import {MDCTopAppBar} from '@material/top-app-bar';
import {MDCDrawer} from '@material/drawer';
import {MDCDataTable} from '@material/data-table';
import {MDCRipple} from '@material/ripple';

// const topAppBar = new MDCTopAppBar(document.querySelector('.mdc-top-app-bar'));
const drawer = new MDCDrawer(document.querySelector('.mdc-drawer'));

const topAppBarNavigation = MDCTopAppBar.attachTo(document.querySelector('.mdc-top-app-bar'));
topAppBarNavigation.setScrollTarget(document.querySelector('main-content'));
topAppBar.listen('MDCTopAppBar:nav', () => drawer.open = !drawer.open);


const dataTable = new MDCDataTable(document.querySelector('.mdc-data-table'));
const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));
