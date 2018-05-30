// app.js pulls in 'amd' because of the dependency.
define('wiring', ['./amd'], function(amd) {
  console.log('ENTER: amd/app.js: Here1');
  document.getElementById('mybutton').addEventListener('click', amd.updateSum);
});

wiring();
