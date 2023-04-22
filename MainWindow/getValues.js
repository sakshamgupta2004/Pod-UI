const { SerialPort } = require('serialport')
const queryString = window.location.search;
const params = new URLSearchParams(queryString)
let selectedBaud = Number(params.get('baud'))
let selectedPort = params.get('port')

const port = new SerialPort({ path: selectedPort, baudRate: selectedBaud }, function (err) {
  if (err) {
    let x = document.getElementById("snackbar");
    x.className = "show";
    x.innerText = "Failed to open port"
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 2000);
  }
})
let stringData = ''
let displayData = ''
port.on('readable', function () {
  stringData += port.read().toString()
  displayData = null;
  console.log(stringData)
  if (stringData.endsWith('\n')) {
    if (stringData.startsWith('START:')) {
      stringData = stringData.substring(6)
    }
    else {
      stringData = ''
      return;
    }
    displayData = stringData.split(',')
    displayValues(displayData);
    console.log('Data:', displayData)
    stringData = ''
  }
})