document.getElementById("boxy").addEventListener('click', function test() {

var scroll = document.getElementById('hc');
var displaySetting = scroll.style.display;

if (displaySetting == 'flex') {
  scroll.style.display = 'none';

}
else {
  scroll.style.display = 'flex';
}
});

document.getElementById("doxy").addEventListener('click', function test() {

  var scroll = document.getElementById('hd');
  var displaySetting = scroll.style.display;
  
  if (displaySetting == 'flex') {
    scroll.style.display = 'none';
  
  }
  else {
    scroll.style.display = 'flex';
  }
  });

  document.getElementById("roxy").addEventListener('click', function test() {

    var scroll = document.getElementById('hr');
    var displaySetting = scroll.style.display;
    
    if (displaySetting == 'flex') {
      scroll.style.display = 'none';
    
    }
    else {
      scroll.style.display = 'flex';
    }
    });