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
  }

  render() {
    return html`
      <div ?inert="${this.disabled}" @drop="${this._handleDrag}" @dragover="${this._handleDragover}">
        <p>Drag or</p>
        <button>Select a file</button>
        <p class="message">No file selected</p>
        <input type="file" />  
      </div>
    `;
  }

  _handleDragover(e) {
    e.preventDefault();
  }

  _handleDrag(e) {
    e.preventDefault();
    this.shadowRoot.querySelector('input').files = e.dataTransfer.files;
    this.shadowRoot.querySelector('.message').textContent = e.dataTransfer.files[0].name;
  }
}

window.customElements.define('file-dragger', Filedragger);
