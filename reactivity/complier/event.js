import { randomNum } from "../shares/utils";

const reg_onClick = /onClick\=\"(.*?)\"/g;

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