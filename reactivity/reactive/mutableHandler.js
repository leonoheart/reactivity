import {
  isObject,
  hasOwnProperty,
  isEqual,
} from '../shares/utils';
import { useReactive } from '.';

const get = createGetter();
const set = createSetter();

function createGetter () {
  return function get (target, key, receiver) {
    const res = Reflect.get(target, key, receiver);

    if (isObject(res)) {
      return useReactive(res);
    }
    return res;
  }
}

function createSetter () {
  return function set (target, key, value, receiver) {
    const isKeyExist = hasOwnProperty(target, key);
    const oldValue = target[key];
    const res = Reflect.get(target, key, receiver);

    if (!isKeyExist) {
      console.log('new a property:' + value)
    } else if (!isEqual(value, oldValue)) {
      console.log('change a property:' + key + '=' + value)
    }

    return res;
  }
}

const mutableHandler = {
  get,
  set,
}

export {
  mutableHandler,
}