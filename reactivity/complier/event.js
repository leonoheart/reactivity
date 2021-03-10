import { checkType, randomNum } from "../shares/utils";

const reg_onClick = /onClick\=\"(.*?)\"/g;
const reg_fnName = /^(.*?)\(/;
const reg_arg = /\((.*?)\)/;

/**
 * eventPool =[]
 * {
 *  flag: random number/ random string
 *  handler: event handler
 *  type: click
 * }
 *
 *
 */

const eventPool = [];

export function eventFormat (template) {
  return template.replace(reg_onClick, function (node, key) {
    const _flag = randomNum();

    eventPool.push({
      flag: _flag,
      handler: key.trim(),
      type: 'click',
    });

    return `data-dom="${_flag}"`;
  });
}

export function bindEvent (methods) {
  const allElements = document.getElementsByTagName('*');
  let oItem = null;
  let _flag = 0;

  eventPool.forEach((event) => {
    for (let i = 0; i < allElements.length; i++) {
      oItem = allElements[i];
      _flag = parseInt(oItem.dataset.dom);

      if (event.flag === _flag) {
        oItem.addEventListener(event.type, function () {
          const fnName = event.handler.match(reg_fnName)[1];
          const args = checkType(event.handler.match(reg_arg)[1]);
          console.log('args', args)
          console.log('methods[fnName]', methods[fnName])

          methods[fnName](args);
        }, false)
      }
    }
  })
}