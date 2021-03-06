import { shuffle } from './helper/shuffle';
import { template } from './template';
import { fruits } from './cards/fruits';
import { Card } from '../Card';
import { Timer } from '../Timer';
import { Counter } from '../Counter';

export const Board = (element, showResult) => {
  const state = {
    firstCard: null,
    secondCard: null,
  };

  let cards = [];
  let timer = null;
  let counter = null;

  const init = (rows, cols) => {
    const timerElement = element.querySelector('.timer');
    timer = Timer(timerElement);
    timer.init();

    const counterElement = element.querySelector('.counter');
    counter = Counter(counterElement);
    counter.init();

    renderBoard(rows, cols);
    cards = initCards(shuffleCardTypes());
  };

  const shuffleCardTypes = () => shuffle([...fruits, ...fruits]);

  const renderBoard = (rows, cols) => {
    const table = element.querySelector('table');
    table.innerHTML = template(rows, cols);
  };

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
    counter.increment();
    isCompleted();

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

  const isCompleted = () => {
    let allVisible = true;

    cards.map((card) => allVisible = allVisible && card.isVisible());

    if (allVisible) {
      timer.stop();
      showResult();
    }
  };

  return { init };
};
