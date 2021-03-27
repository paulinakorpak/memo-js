import { template } from './template';

export const Counter = (element) => {
  const state = {
    count: 0,
  };

  const init = () => {
    render();
  };

  const render = () => {
    element.innerHTML = template(state.count);
  };

  const increment = () => {
    state.count++;
    render();
  };

  return { init, increment };
};
