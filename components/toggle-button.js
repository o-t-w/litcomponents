import {LitElement, html} from 'lit';
import styles from './toggle-button.css' assert { type: 'css' };
import reset from './reset.css' assert { type: 'css' };

export class MyToggleButton extends LitElement {
  static styles = [reset, styles];
  
  static properties = {
    toggled: {type: Boolean},
    disabled: {type: Boolean},
  }

  constructor() {
    super();
    this.toggled = false;
    this.disabled = false;
  }

  render() {
    const classes = {toggled: this.toggled};
    return html`
      <button ?disabled="${this.disabled}" aria-pressed=${this.toggled} type="button" @click="${this._toggle}" part="button"><slot></slot></button>
    `;
  }

   _toggle() {
    this.toggled = !this.toggled;
  }
}

window.customElements.define('my-toggle-button', MyToggleButton);
