import {LitElement, html} from 'lit';
import buttonStyles from './button.css' assert { type: 'css' };

export class MyButton extends LitElement {
  static styles = buttonStyles;

  render() {
    return html`
      <button part="button"><slot></slot></button>
    `;
  }
}

window.customElements.define('my-button', MyButton);
