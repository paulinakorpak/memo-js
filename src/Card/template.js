export const template = (visibility, type) => `
  <img
    src="img/cards/${type}.png"
    alt="${type}"
    ${!visibility ? 'class="d-none"' : ''}
  />`;
