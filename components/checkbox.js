import {LitElement, html} from 'lit';
import styles from './checkbox.css' assert { type: 'css' };
import reset from './reset.css' assert { type: 'css' };

export class MyCheckbox extends LitElement {
  static styles = [reset, styles];
  
  static properties = {
    disabled: {type: Boolean},
  }

  constructor() {
    super();
    this.disabled = false;
  }

  render() {
    return html`
      <label>
      <div part="checkbox"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
      <input type="checkbox" ?checked="${this.checked}" ?disabled="${this.disabled}">
      <span><slot>Label</slot></span>  </label>
    `;
  }

}

window.customElements.define('my-checkbox', MyCheckbox);
