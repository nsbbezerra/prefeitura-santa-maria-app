const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const isDev = require("electron-is-dev");
let mainWindow;
const Menu = electron.Menu;

Menu.setApplicationMenu(false);

function createWindow() {
  const iconPath = path.resolve(__dirname, "icone.png");
  mainWindow = new BrowserWindow({
    width: 1300,
    height: 700,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      plugins: true,
    },
    icon: iconPath,
  });
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
  mainWindow.on("closed", () => (mainWindow = null));
}

app.setName("Prefeitura Municipal de Santa Maria do Tocantins");
app.allowRendererProcessReuse = true;
app.on("ready", createWindow);
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
