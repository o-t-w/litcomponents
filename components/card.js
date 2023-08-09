import {LitElement, html} from 'lit';
import styles from './card.css' assert { type: 'css' };

export class MyCard extends LitElement {
  static styles = styles;

  render() {
    return html`
      <div part="card"><slot></slot></div>
    `;
  }
}

window.customElements.define('my-card', MyCard);
