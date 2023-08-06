import {LitElement, html} from 'lit';
import styles from './button.css' assert { type: 'css' };

export class MyButton extends LitElement {
  static styles = styles;

  render() {
    return html`
      <button part="button"><slot></slot></button>
    `;
  }
}

window.customElements.define('my-button', MyButton);
