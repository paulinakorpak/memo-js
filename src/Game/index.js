import { Board } from '../Board';

export const Game = (element) => {
  const init = (rows, cols) => {
    const boardElement = element.querySelector('.board');
    Board(boardElement).init(rows, cols);
  };

  return { init };
};
