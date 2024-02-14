import BaseComponent from '../base.js';
import {css, html} from 'lit';

export default class GHTableBody extends BaseComponent {
  constructor() {
    super();
    this.numberOfRows = 0;
  }

  static get properties() {
    return {
      multiSelect: {type: Boolean, reflect: true},
      zebra: {type: Boolean, reflect: true},
    };
  }

  static get styles() {
    return css`
      :host {
        display: table-row-group;
      }
    `;
  }

  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);
    const rows = this.querySelectorAll('gh-table-row');
    rows.forEach((row) => {
      row.setAttribute('id', 'gh-table-row-' + this.numberOfRows++);
      if (this.zebra && this.numberOfRows % 2 !== 0) {
        row.zebra = true;
      }
    });
  }

  onRowSelected(event) {
    if (this.multiSelect) {
      return;
    }

    const rows = this.querySelectorAll('gh-table-row');
    rows.forEach((row) => {
      if (row.id !== event.detail.id) {
        row.selected = false;
      }
    });
  }

  render() {
    return html` <slot @row-selected=${this.onRowSelected}></slot> `;
  }
}

customElements.define('gh-table-body', GHTableBody);
