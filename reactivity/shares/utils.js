function isObject (value) {
  return typeof value === 'object' && value !== null;
}

function hasOwnProperty (target, key) {
  return Object.prototype.hasOwnProperty.call(target, key);
}

function isEqual (newValue, oldValue) {
  return newValue == oldValue;
}

function randomNum () {
  return new Date().getTime() + parseInt(Math.random() * 10000);
}

export {
  isObject,
  hasOwnProperty,
  isEqual,
  randomNum,
};