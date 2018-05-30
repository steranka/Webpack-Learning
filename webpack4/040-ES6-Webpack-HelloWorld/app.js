import { updateSum } from './ES';
require('./style.scss');

export function wiring(amd) {
  console.log('ENTER: amd/app.js: Here1');
  document.getElementById('mybutton').addEventListener('click', updateSum);
}

wiring();
