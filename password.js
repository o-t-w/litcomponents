import {LitElement, html} from 'lit';
import styles from './reset.css' assert { type: 'css' };
import reset from './input.css' assert { type: 'css' };
import passwordStyles from './password.css' assert { type: 'css' };

export class PasswordInput extends LitElement {
  static styles = [reset, styles, passwordStyles];
  
  static properties = {
    disabled: {type: Boolean},
  }

  constructor() {
    super();
    this.disabled = false;
  }

  _toggle(e) {
    const input = this.shadowRoot.querySelector('input');
    const button = this.shadowRoot.querySelector('button');

    if (input.type === "password") {
      input.type = "text";
      button.textContent = "Hide";
    }
    else {
      input.type = "password";
      button.textContent = "Show";
    }
  }

  render() {
    return html`
      <label part="label"><div><slot>Label</slot></div>
      <input type="password" ?disabled="${this.disabled}" part="input">
      <button @click="${this._toggle}" type="button">Show</button>    
      </label>
    `;
  }

}

window.customElements.define('my-password-input', PasswordInput);
