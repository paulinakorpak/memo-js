import { shuffle } from './helper/shuffle';
import { template } from './template';
import { fruits } from './cards/fruits';
import { Card } from '../Card';

export const Board = (element) => {
  const state = {
    firstCard: null,
    secondCard: null,
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
    const { key } = e.currentTarget.dataset;
    const selectedCard = cards[key];

    const cardAlreadyVisible = selectedCard.isVisible();
    const twoCardsVisible = state.firstCard !== null && state.secondCard !== null;

    if (cardAlreadyVisible || twoCardsVisible) {
      return;
    }

    selectedCard.show();

    if (state.firstCard === null) {
      state.firstCard = selectedCard;
    } else {
      state.secondCard = selectedCard;

      if (state.firstCard.getType() !== state.secondCard.getType()) {
        await (new Promise((resolve) => setTimeout(resolve, 1000)));
        state.firstCard.hide();
        state.secondCard.hide();
      }

      state.firstCard = null;
      state.secondCard = null;
    }
  };

  return { init };
};
