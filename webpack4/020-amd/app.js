// app.js pulls in 'amd' because of the dependency.

requirejs.config({
  // By default, load any module IDs from js/lib
  baseUrl: './',

  // except if the module ID starts with "a''",
  // load it from the js/app directory.  paths
  // config is relative to the baseUrl, and
  // nver includes a *.js extension since
  // the paths config could be for a directory
  paths: {
    amd: './amd'
  }
})

requirejs(['amd'], function(amd) {
  console.log('ENTER: amd/app.js: Here1');
  document.getElementById('mybutton').addEventListener('click', amd.updateSum);
});
