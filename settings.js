const Store = require("electron-store");
const storage = new Store();

function setWindowConfig(window) {
  const bounds = getWindowBounds();
  console.log(`APP BOUNDS [${bounds}]`);

  if (bounds && bounds.length == 2) {
    window.setSize(bounds[0], bounds[1]);
  }

  const position = getWindowPosition();
  console.log(`APP POSITOON [${position}]`);
  if (position && position.length == 2) {
    window.setPosition(position[0], position[1]);
  }
}

function getWindowBounds() {
  const default_bounds = [800, 600];

  const size = storage.get("window-size");
  if (size) {
    return size;
  }

  storage.set("window-size", default_bounds);
  return default_bounds;
}

function saveWindowBounds(bounds) {
  storage.set("window-size", bounds);
}

function getWindowPosition() {
  const position = storage.get("window-position");
  if (position) {
    return position;
  }
}

function saveWindowPosition(position) {
  storage.set("window-position", position);
}

module.exports = {
  setWindowConfig,
  getWindowBounds, saveWindowBounds,
  getWindowPosition, saveWindowPosition,
}
