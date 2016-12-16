function load() {
  createMap();
  createButtons();
}

function createMap() {
  var map = document.createElement('img');
  map.setAttribute('src', 'images/map.png');
  map.setAttribute('width', '100%');
  document.getElementById('pic').appendChild(map);
}
function createButtons() {

  var http = new XMLHttpRequest;
  http.open('GET', "https://code-your-future.github.io/api-demo/area/index.json");
  http.onreadystatechange = function() {
    if(this.readyState === 4 && this.status === 200) {
      var myData = JSON.parse(http.responseText);
      var buttons = '';
      for(var i=0; i<myData.data.length; i++) {
          buttons = '<button id="btn-' + myData.data[i] + '" type=\"button\" onClick=createSubButtons("' + myData.data[i] + '")>' + myData.data[i] + '</button>';
        document.getElementById('pop-ups').innerHTML += buttons;
      }
    }
  }
  http.send();
}

function createSubButtons(areaName) {
  var http = new XMLHttpRequest;
  http.open('GET', "https://code-your-future.github.io/api-demo/area/" + areaName + "/index.json");
  http.onreadystatechange = function() {
    if(this.readyState === 4 && this.status === 200) {
      document.getElementById('sub-pop-ups').innerHTML = "" ;
      var myData = JSON.parse(http.responseText);
      var buttons = '';
      for(var i=0; i<myData.data.length; i++) {
          buttons = '<button id="btn-' + myData.data[i].organisation + '" type=\"button\" onClick=createSubButtons("' + myData.data[i].organisation + '")>' + myData.data[i].organisation + '</button>';
          document.getElementById('sub-pop-ups').innerHTML += buttons;
          console.log(' : ' + myData.data[i].organisation);

        console.log("----------------------------------------");

      }
    }
  }
  http.send();
}
