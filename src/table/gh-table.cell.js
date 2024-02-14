import BaseComponent from '../base.js';
import {css, html} from 'lit';

export default class GHTableCell extends BaseComponent {
  static get styles() {
    return css`
      :host {
        display: table-cell;
        vertical-align: middle;
        padding: 0.5rem;
      }
    `;
  }

  render() {
    return html` <slot></slot>`;
  }
}

customElements.define('gh-table-cell', GHTableCell);
