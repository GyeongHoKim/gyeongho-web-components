import BaseComponent from '../base.js';
import {css, html} from 'lit';

export default class GHTableHeaderRow extends BaseComponent {
  static get styles() {
    return css`
      :host {
        display: table-row;
        height: 2rem;
      }
    `;
  }

  render() {
    return html` <slot></slot>`;
  }
}

customElements.define('gh-table-header-row', GHTableHeaderRow);
