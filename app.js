import { MDCTextField } from "@material/textfield";
import {MDCList} from "@material/list";
import { MDCRipple } from "@material/ripple";
import {MDCDataTable} from '@material/data-table';

const dataTable = new MDCDataTable(document.querySelector('.mdc-data-table'));

const list = MDCList.attachTo(document.querySelector('.mdc-list'));
list.wrapFocus = true;

const selector = '.mdc-button, .mdc-icon-button .mdc-card__primary-action';
const ripples = [].map.call(document.querySelector(selector), function (el) {
  return new MDCRipple(el);
});