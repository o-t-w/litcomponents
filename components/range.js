import {LitElement, html} from 'lit';
import styles from './range.css' assert { type: 'css' };

export class Range extends LitElement {
  static styles = styles;

  _handleChange(e) {
    const input = this.shadowRoot.querySelector('input');
    input.style.setProperty('--track-fg-width', `${input.valueAsNumber}%`);
  }

  render() {
    return html`
      <input @input="${this._handleChange}" style="--track-fg-width: 49.49%;" max="100" min="1" step="1" value="50" type="range" part="input">
    `;
  }
}

window.customElements.define('my-range', Range);
