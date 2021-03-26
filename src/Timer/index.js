import { template } from './template';

export const Timer = (element) => {
  const state = {
    time: 0,
  };

  const init = () => {
    render(0, 0);
    countTime();
  };

  const render = (minutes, seconds) => {
    element.innerHTML = template(minutes, seconds);
  };

  const countTime = () => {
    setInterval(
      () => {
        state.time++;

        const seconds = state.time % 60;
        const minutes = Math.floor(state.time / 60);

        render(minutes, seconds);
      },
      1000,
    );
  };

  return { init };
};
