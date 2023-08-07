import {LitElement, html} from 'lit';
import styles from './tag.css' assert { type: 'css' };

export class Tag extends LitElement {
  static styles = styles;

  static properties = {
    circle: {type: Boolean},
  }

  render() {
    if (this.circle) {
      return html` <div part="tag">
      <svg fill="currentColor" width="8px" height="8px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="50" />
</svg>
      <slot></slot></div>`
    } else {
      return html`<div part="tag">
      <slot></slot></div>`
    }
  }
}

window.customElements.define('my-tag', Tag);
