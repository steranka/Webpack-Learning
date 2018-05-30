define('amd', ['math'], function(math) {
  var amd = {
    updateSum: function() {
      console.log('updateSum called');
      document.getElementById('sum').innerHTML = math.sum(
          parseInt(document.getElementById('text1').value),
          parseInt(document.getElementById('text2').value)
      )
    }
  }

  return amd;
})
