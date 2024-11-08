function easter() {
   var eastClick = document.getElementById('easter');
   var displaySetting = eastClick.style.display;
    
    if (displaySetting == 'flex') {
      eastClick.style.display = 'none';
    
    }
    else {
      eastClick.style.display = 'flex';
    }
}
