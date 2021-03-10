import {
  eventFormat,
  stateFormat,
} from '.';

export function useDom (
  {
    template,
    state,
    methods
  },
  DOM
) {
  DOM.innerHTML = render(template, state);
}

export function render (template, state) {
  template = eventFormat(template);
  // template = stateFormat(template, state);
  return template;
}