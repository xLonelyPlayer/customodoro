const Store = require("electron-store");
const storage = new Store();

function getWinSettings() {
  const default_bounds = [800, 600];

  const size = storage.get("window-size");
  if (size) {
    return size;
  }

  storage.set("window-size", default_bounds);
  return default_bounds;
}

function saveBounds(bounds) {
  console.log(`NEW APP BOUNDS ${bounds[0]} ${bounds[1]}`);
  storage.set("window-size", bounds);
}

module.exports = {
  getWinSettings,
  saveBounds,
}
