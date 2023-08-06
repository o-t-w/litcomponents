import {LitElement, html} from 'lit';
import styles from './progress.css' assert { type: 'css' };

export class Progress extends LitElement {
  static styles = styles;

  render() {
    return html`
       <progress aria-valuemin="0" tabindex="-1" aria-valuenow="40" aria-valuemax="100" max="100" value="40"></progress>       
    `;
  }
}

window.customElements.define('my-progress', Progress);
