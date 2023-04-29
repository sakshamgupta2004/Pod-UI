const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const {SerialPort} = require('serialport')
const fs = require('fs')
const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 800, 
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false
      },
    })
    // win.setMenu(null)
  
    win.loadFile('PortSelector/index.html')
    
    
  }

  app.whenReady().then(() => {
    createWindow()
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
      })
  })
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })
  

// var i = 0;
//   let p = new SerialPort({ path: 'COM2', baudRate: 115200 }, function (err) {
//     if (!err) {

//         setInterval(()=>{
//           let autogen = []
//           for (let j = 0; j < 17; j++) {
//             autogen.push('\u{1F480} ' + j * 69 + ' ' + i)
//           }
//             p.write('START:' + i + ',' + i*10 + ',Too high bruh  \u{1F480},' + autogen.join(',') + '\n', (e)=>{

//             })
//             i+=10;
//         }, 30);
       
//     }
//   })

  
