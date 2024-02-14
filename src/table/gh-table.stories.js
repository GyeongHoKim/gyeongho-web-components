import './index.js';
import {html} from 'lit';

export default {
  title: 'Components/gh-table',
  component: 'gh-table',
  tags: ['autodocs'],
  argTypes: {
    multiSelect: {control: 'boolean'},
    zebra: {control: 'boolean'},
  },
};
const Template = ({multiSelect, zebra}) => html`
  <gh-table ?multiSelect=${multiSelect} ?zebra=${zebra}>
    <gh-table-head>
      <gh-table-header-row>
        <gh-table-header-cell>Column 1</gh-table-header-cell>
        <gh-table-header-cell>Column 2</gh-table-header-cell>
        <gh-table-header-cell>Column 3</gh-table-header-cell>
        <gh-table-header-cell>Column 4</gh-table-header-cell>
      </gh-table-header-row>
    </gh-table-head>
    <gh-table-body>
      <gh-table-row>
        <gh-table-cell>Row 1, Column 1</gh-table-cell>
        <gh-table-cell>Row 1, Column 2</gh-table-cell>
        <gh-table-cell>Row 1, Column 3</gh-table-cell>
        <gh-table-cell>Row 1, Column 4</gh-table-cell>
      </gh-table-row>
      <gh-table-row>
        <gh-table-cell>Row 2, Column 1</gh-table-cell>
        <gh-table-cell>Row 2, Column 2</gh-table-cell>
        <gh-table-cell>Row 2, Column 3</gh-table-cell>
        <gh-table-cell>Row 2, Column 4</gh-table-cell>
      </gh-table-row>
      <gh-table-row>
        <gh-table-cell>Row 3, Column 1</gh-table-cell>
        <gh-table-cell>Row 3, Column 2</gh-table-cell>
        <gh-table-cell>Row 3, Column 3</gh-table-cell>
        <gh-table-cell>Row 3, Column 4</gh-table-cell>
      </gh-table-row>
      <gh-table-row>
        <gh-table-cell>Row 4, Column 1</gh-table-cell>
        <gh-table-cell>Row 4, Column 2</gh-table-cell>
        <gh-table-cell>Row 4, Column 3</gh-table-cell>
        <gh-table-cell>Row 4, Column 4</gh-table-cell>
      </gh-table-row>
      <gh-table-row>
        <gh-table-cell>Row 5, Column 1</gh-table-cell>
        <gh-table-cell>Row 5, Column 2</gh-table-cell>
        <gh-table-cell>Row 5, Column 3</gh-table-cell>
        <gh-table-cell>Row 5, Column 4</gh-table-cell>
      </gh-table-row>
    </gh-table-body>
  </gh-table>
`;

export const Zebra = Template.bind({});
Zebra.args = {
  zebra: true,
};

export const SingleSelect = Template.bind({});
SingleSelect.args = {
  multiSelect: false,
};

export const MultiSelect = Template.bind({});
MultiSelect.args = {
  multiSelect: true,
};
