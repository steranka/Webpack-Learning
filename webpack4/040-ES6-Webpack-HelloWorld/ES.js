
import { sum } from './math.js';

export function updateSum() {
  console.log('updateSum called');
  document.getElementById('sum').innerHTML = sum(
      parseInt(document.getElementById('text1').value),
      parseInt(document.getElementById('text2').value)
  )
}
