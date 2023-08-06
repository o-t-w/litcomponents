import {LitElement, html} from 'lit';
import styles from './fileinput.css' assert { type: 'css' };

export class MyFileInput extends LitElement {
  static styles = styles;
  
  static properties = {
    disabled: {type: Boolean},
  }

  constructor() {
    super();
    this.disabled = false;
  }

  render() {
    return html`
      <input type="file" ?disabled="${this.disabled}" part="input">
    `;
  }

}

window.customElements.define('my-file-input', MyFileInput);
