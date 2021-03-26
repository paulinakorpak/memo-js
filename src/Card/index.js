import { template } from './template';

export const Card = (element, type) => {
  const state = {
    visibility: false,
  };

  const init = () => {
    render();
    element.addEventListener('click', () => show());
  };

  const render = () => element.innerHTML = template(state.visibility, type);

  const show = () => {
    state.visibility = true;
    render();
  };

  const hide = () => {
    state.visibility = false;
    render();
  };

  const getType = () => type;

  return {
    init, show, hide, getType,
  };
};
