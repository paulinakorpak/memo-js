import { template } from './template';

export const Card = (element, type) => {
  const state = {
    visibility: false,
  };

  const init = () => {
    render();
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

  const isVisible = () => state.visibility;

  return {
    init, show, hide, getType, isVisible,
  };
};
