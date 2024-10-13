const slider1 = document.getElementById('slider1');
const dropdown = document.getElementById('dropdown');

function getPyramidCode(levels = slider1.value, symbol = dropdown.value) {
  str = " ";

  for(i = 1; i <= levels; i++) {

    for(k = 0; k < i; k++) {
      str += symbol;
    }
    
    str += "<br>";
  }

  return str;
}

slider1.addEventListener('input', (event) => {

  document.getElementById('pyramid').innerHTML = getPyramidCode();
  document.getElementById('levels').innerHTML = slider1.value;
});

dropdown.addEventListener('input', (event) => {

  document.getElementById('pyramid').innerHTML = getPyramidCode();

});
