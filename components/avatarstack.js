import {LitElement, html} from 'lit';
import styles from './avatarstack.css' assert { type: 'css' };

export class AvatarStack extends LitElement {
  static styles = styles;

  render() {    
      return html`<div>
        <img alt="Primer logo" size="20" src="https://avatars.githubusercontent.com/primer" height="24" width="24">
        <img alt="Primer logo" size="20" src="https://avatars.githubusercontent.com/primer" height="24" width="24">
        <img alt="Primer logo" size="20" src="https://avatars.githubusercontent.com/primer" height="24" width="24">
        <img alt="Primer logo" size="20" src="https://avatars.githubusercontent.com/primer" height="24" width="24">
        <img alt="Primer logo" size="20" src="https://avatars.githubusercontent.com/primer" height="24" width="24">
      </div>`
  }
}

window.customElements.define('my-avatar-stack', AvatarStack);
