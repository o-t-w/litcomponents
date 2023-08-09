import {LitElement, html} from 'lit';
import styles from './color-picker.css' assert { type: 'css' };

export class ColorInput extends LitElement {
  static styles = styles;
  
  static properties = {
    disabled: {type: Boolean},
    disabled: {type: String},
  }

  constructor() {
    super();
    this.disabled = false;
  }

  _handleInput(e) {
    const input = this.shadowRoot.querySelector('input');
    this.shadowRoot.querySelector('.picker div').style.setProperty('--picked-color', `${input.value}`);
    this.shadowRoot.querySelector('.picker div').style.backgroundImage = "none";
  }

  render() {
    return html`
    <label class="picker">
        <span><slot>Pick a color</slot></span>
        <div></div>
        <input @input="${this._handleInput}" type="color">
    </label>
    `;
  }

}

window.customElements.define('my-color-picker', ColorInput);
