import {LitElement, html} from 'lit';
import inputStyles from './input.css' assert { type: 'css' };

export class MyInput extends LitElement {
  static styles = inputStyles;
  
  static properties = {
    disabled: {type: Boolean},
  }

  constructor() {
    super();
    this.disabled = false;
  }

  render() {
    return html`
      <label part="label"><div><slot>Label</slot></div>
      <input type="text" ?disabled="${this.disabled}" part="input">
      </label>
    `;
  }

}

window.customElements.define('my-input', MyInput);
