import BaseComponent from '../base.js';
import {css, html} from 'lit';

export default class GHTable extends BaseComponent {
  static get properties() {
    return {
      multiSelect: {type: Boolean, reflect: true},
      zebra: {type: Boolean, reflect: true},
    };
  }

  static get styles() {
    return css`
      :host {
        position: relative;
        display: table;
        width: 100%;
        overflow: auto;
        text-align: left;
        border-collapse: collapse;
      }
    `;
  }

  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);
    const tableBody = this.querySelector('gh-table-body');
    if (tableBody) {
      tableBody.multiSelect = this.multiSelect;
      tableBody.zebra = this.zebra;
    }
  }

  render() {
    return html` <slot></slot>`;
  }
}

customElements.define('gh-table', GHTable);
