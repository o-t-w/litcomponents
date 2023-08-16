import {LitElement, html} from 'lit';
import styles from './input.css' assert { type: 'css' };

export class MyInput extends LitElement {
  static styles = styles;
  // static formAssociated = true;
  // static observedAttributes = ['value'];
  // #internals;

  static properties = {
    disabled: {type: Boolean},
  }

  constructor() {
    super();
    this.disabled = false;
    // this.#internals = this.attachInternals();

    // const input = this.shadowRoot.querySelector('input');
    // input.addEventListener('change', () => {
    //     this.#internals.setFormValue(input.value);
    //     this.updateValidity(input.value);
    // });
  }

  render() {
    return html`
      <label part="label"><div><slot>Label</slot></div>
      <input type="text" required minlength="3" ?disabled="${this.disabled}" part="input">
      </label>
    `;
  }

}

window.customElements.define('my-input', MyInput);
