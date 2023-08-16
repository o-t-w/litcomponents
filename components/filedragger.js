import {LitElement, html} from 'lit';
import buttonStyles from './button.css' assert { type: 'css' };
import styles from './filedragger.css' assert { type: 'css' };

export class Filedragger extends LitElement {
  static styles = [buttonStyles, styles];

  static properties = {
    disabled: {type: Boolean},
  }

  constructor() {
    super();
    this.disabled = false;

    document.addEventListener('paste', async (event) => {
      event.preventDefault();
      if (!event.clipboardData.files.length) {
        return;
      }
      else {
        this.shadowRoot.querySelector('input').files = event.clipboardData.files;
        this.shadowRoot.querySelector('.message').textContent = event.clipboardData.files[0].name;
      }
    })
  }

  render() {
    return html`
      <div @drop="${this._handleDrag}" @dragover="${this._handleDragover}">
        <p>Drag or</p>
        <button ?disabled="${this.disabled}" @click="${this._handleClick}">Select a file</button>
        <p class="message">No file selected</p>
        <input @change="${this._handleInput}" tabindex="-1" type="file" />  
      </div>
    `;
  }

  _handleDragover(e) {
    e.preventDefault();
  }

  _handleClick(e) {
    this.shadowRoot.querySelector('input').click();
  }

  _handleInput(e) {
    this.shadowRoot.querySelector('.message').textContent = e.target.files[0].name;
  }

  _handleDrag(e) {
    e.preventDefault();
    this.shadowRoot.querySelector('input').files = e.dataTransfer.files;
    this.shadowRoot.querySelector('.message').textContent = e.dataTransfer.files[0].name;
  }
}

window.customElements.define('file-dragger', Filedragger);
