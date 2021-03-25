import { shuffle } from './helper/shuffle';
import { template } from './template';
import { fruits } from './cards/fruits';
import { Card } from '../Card';

export const Board = (element) => {
  let cards = [];

  const init = (rows, cols) => {
    renderBoard(rows, cols);
    cards = initCards(shuffleCardTypes());
  };

  const shuffleCardTypes = () => shuffle([...fruits, ...fruits]);

  const renderBoard = (rows, cols) => element.innerHTML = template(rows, cols);

  const initCards = (types) => {
    const fields = Array.from(element.querySelectorAll('td'));

    cards = fields.map((field, index) => {
      const card = Card(field, types[index], index);
      card.init();

      return card;
    });

    return cards;
  };

  return { init };
};
