import { MDCTextField } from "@material/textfield";
import {MDCList} from "@material/list";
import { MDCRipple } from "@material/ripple";

const list = MDCList.attachTo(document.querySelector('.mdc-list'));
list.wrapFocus = true;

const selector = '.mdc-button, .mdc-icon-button .mdc-card__primary-action';
const ripples = [].map.call(document.querySelector(selector), function (el) {
  return new MDCRipple(el);
});