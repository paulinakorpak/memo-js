import { Board } from '../Board';

export const Game = (element) => {
  const init = (rows, cols) => {
    const boardElement = element.querySelector('.board');
    Board(boardElement, showResult).init(rows, cols);
  };

  const showResult = () => {
    const resultElement = element.querySelector('.result');
    const table = element.querySelector('.table');

    table.classList.add('d-none');
    resultElement.classList.remove('d-none');
  };
  return { init };
};
