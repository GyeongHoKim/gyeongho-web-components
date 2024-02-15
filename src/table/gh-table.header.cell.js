import {css, html, LitElement} from 'lit';

export default class GHTableHeaderCell extends LitElement {
  constructor() {
    super();
    this.isResizing = false;
  }

  static get styles() {
    return css`
      :host {
        display: table-cell;
        vertical-align: middle;
        padding: 0.5rem;
        position: relative; /* For the resize handle positioning */
      }

      .resize-handle {
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        width: 5px;
        cursor: col-resize;
      }
    `;
  }

  initResize(event) {
    if (event.target.classList.contains('resize-handle')) {
      this.isResizing = true;
      window.addEventListener('mousemove', this.resize.bind(this));
      window.addEventListener('mouseup', this.stopResize.bind(this));
    }
  }

  resize(event) {
    if (this.isResizing) {
      const newWidth = event.clientX - this.getBoundingClientRect().left;
      this.style.width = `${newWidth}px`;
    }
  }

  stopResize() {
    this.isResizing = false;
    window.removeEventListener('mousemove', this.resize.bind(this));
    window.removeEventListener('mouseup', this.stopResize.bind(this));
  }

  render() {
    return html`
      <slot></slot>
      <div class="resize-handle" @mousedown="${this.initResize}"></div>
    `;
  }
}

customElements.define('gh-table-header-cell', GHTableHeaderCell);
