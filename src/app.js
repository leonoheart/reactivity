import { useReactive, useDom } from '../reactivity';

function App () {
  const state = useReactive({
    count: 0
  });

  const add = (num) => {
    state.count += num;
  }

  const minus = (num) => {
    state.count -= num;
  }

  return {
    template: `<h1>{{ count }}</h1>
      <button onClick="add(2)">+</button>
      <button onClick="minus(1)">-</button>
    `,
    state,
    methods: {
      add,
      minus
    }
  }
}

useDom(
  App(),
  document.querySelector('#app')
);