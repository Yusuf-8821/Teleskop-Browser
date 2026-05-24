const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      webviewTag: true, // <webview> etiketini aktif ediyoruz
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  // Arayüz dosyamızı yüklüyoruz
  mainWindow.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  // macOS harici sistemlerde pencereler kapanınca uygulamayı kapat
  if (process.platform !== 'darwin') app.quit();
});
