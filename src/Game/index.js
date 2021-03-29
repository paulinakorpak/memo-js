import { Board } from '../Board';

export const Game = (element) => {
  const init = (rows, cols) => {
    const boardElement = element.querySelector('.board');
    Board(boardElement, showResult).init(rows, cols);

    const restartButton = element.querySelector('.result button');
    restartButton.addEventListener('click', restart);
  };

  const showResult = () => {
    const resultElement = element.querySelector('.result');
    const table = element.querySelector('.table');

    table.classList.add('d-none');
    resultElement.classList.remove('d-none');
  };

  const restart = () => {
    window.location.reload(true);
  };

  return { init };
};
