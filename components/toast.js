
import {LitElement, html} from 'lit';
import styles from './toast.css' assert { type: 'css' };

export class Toast extends LitElement {
  static styles = styles;


//   document.getElementById('toast').addEventListener('toggle', function(event) {
//     const target = event.currentTarget;
//   if (event.currentTarget.matches(':popover-open') ) {
//     setTimeout(function() {
//       target.hidePopover(); 
//     }, 3000)
//   } 
//      else {return}
//   })

  render() {
    return html`
      <div>
        <slot></slot>
    </div>
    `;
  }
}

window.customElements.define('my-toast', Toast);
