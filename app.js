import {MDCTab} from '@material/tab';
import {MDCTabBar} from '@material/tab-bar';
import { MDCTabIndicator } from "@material/tab-indicator";
import { MDCTabScroller } from "@material/tab-scroller";
import { MDCDataTable } from "@material/data-table";

const tab = new MDCTab(document.querySelector('.mdc-tab'));
const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));
const tabIndicator = new MDCTabIndicator(document.querySelector('.mdc-tab-indicator'));
const tabScroller = new MDCTabScroller(document.querySelector('.mdc-tab-scroller'));


tabBar.listen('MDCTabBar:activated', activatedEvent => {
  document.querySelectorAll('.tab-content').forEach((element, index) => {
    if (index === activatedEvent.detail.index) {
      element.classList.remove('display-hidden');
    } else {
      element.classList.add('display-hidden');
    }
  });
});