const {SerialPort} = require('serialport')
const getPortsList = (callback) => {
    var portsList = [];
  
    SerialPort.list().then((ports) => {
      ports.forEach((port) => {
        portsList.push(port.path);
      });
  
      callback(null, portsList);
    });
  };

  let selectedPort;
  let selectedBaud;

  const baudRateList = [
    1200, 2400, 4800, 9600, 19200, 38400, 57600, 115200, 25000000, 50000000, 500000000
  ];


  getPortsList((e, portsList) => {
    let dropbuttonports = document.querySelectorAll(".dropbtn")[0];
let dropbuttonsholder = document.querySelectorAll('.buttongrp')[0];
let dropButtons = [];
for (let i = 0; i < portsList.length; i++) {
    let j = i;
    dropButtons[i] = document.createElement('button');
    dropButtons[i].innerText = portsList[i];
    dropButtons[i].type = 'button';
    dropButtons[i].addEventListener('click', (e) => {
        dropbuttonports.innerText = "Port: " + portsList[j];
        selectedPort = portsList[j]
    });
    dropbuttonsholder.appendChild(dropButtons[i]);
}
if (portsList.length > 0) {
dropbuttonports.innerText = "Port: " + portsList[0];
selectedPort = portsList[0]
}
else 
selectedPort = NaN;
})




let dropbuttonbaud = document.querySelectorAll(".dropbtn")[1];
let dropbuttonsholder = document.querySelectorAll('.buttongrp')[1];
let dropButtons = [];
for (let i = 0; i < baudRateList.length; i++) {
    let j = i;
    dropButtons[i] = document.createElement('button');
    dropButtons[i].innerText = baudRateList[i];
    dropButtons[i].type = 'button';
    dropButtons[i].addEventListener('click', (e) => {
        dropbuttonbaud.innerText = "Baud: " + baudRateList[j];
        selectedBaud = baudRateList[j]
    });
    dropbuttonsholder.appendChild(dropButtons[i]);
}
selectedBaud = baudRateList[0]
dropbuttonbaud.innerText = "Baud: " + baudRateList[0];