import { shuffle } from './helper/shuffle';
import { template } from './template';
import { fruits } from './cards/fruits';

export const Board = (element) => {
  const init = (rows, cols) => {
    const cards = generateCards();
    renderBoard(cards, rows, cols);
  };

  const generateCards = () => shuffle([...fruits, ...fruits]);

  const renderBoard = (cards, rows, cols) => element.innerHTML = template(cards, rows, cols);

  return { init };
};
