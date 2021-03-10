import { isObject } from '../shares/utils';
import { mutableHandler } from './mutableHandler';

export function useReactive (target) {
  return ceateReactiveObject(target, mutableHandler);
}

function ceateReactiveObject(target, baseHandler) {
  if (!isObject(target)) {
    return target;
  }
  const observer = new Proxy(target, baseHandler);
  return observer;
}

// const proxy = new Proxy(target, {
//   get (target, key, receiver) {
      // const res = Reflect.get(target, key, receiver);
      // return res;
//   },
//   set (target, key, value, receiver) {
      // const res = Reflect.set(target, key, value, receiver);
      // target[key] = value;
      // return res;
//   },
// })

// the same as handlers
// returned value
// reflect: all functions in utils
// function programming
