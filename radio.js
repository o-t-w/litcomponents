import {LitElement, html} from 'lit';
import radioStyles from './radio.css' assert { type: 'css' };
import reset from './reset.css' assert { type: 'css' };

export class MyRadio extends LitElement {
  static styles = [reset, radioStyles];
  
  static properties = {
    disabled: {type: Boolean},
  }

  constructor() {
    super();
    this.disabled = false;
  }

  render() {
    return html`
      <input type="radio"/>
    `;
  }

}

window.customElements.define('my-radio', MyRadio);
