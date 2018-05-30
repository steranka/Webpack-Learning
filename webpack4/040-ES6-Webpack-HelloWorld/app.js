import { updateSum } from './ES';

export function wiring(amd) {
  console.log('ENTER: amd/app.js: Here1');
  document.getElementById('mybutton').addEventListener('click', updateSum);
}

wiring();
