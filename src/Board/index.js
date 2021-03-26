import { shuffle } from './helper/shuffle';
import { template } from './template';
import { fruits } from './cards/fruits';
import { Card } from '../Card';

export const Board = (element) => {
  const state = {
    selectedCard: null,
  };

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

      field.addEventListener('click', handlePlay);

      return card;
    });

    return cards;
  };

  const handlePlay = async (e) => {
    const { key } = e.target.dataset;
    const selectedCard = cards[key];

    if (state.selectedCard === null) {
      state.selectedCard = selectedCard;
    } else {
      if (selectedCard.getType() !== state.selectedCard.getType()) {
        await (new Promise((resolve) => setTimeout(resolve, 1000)));
        selectedCard.hide();
        state.selectedCard.hide();
      }

      state.selectedCard = null;
    }
  };

  return { init };
};
