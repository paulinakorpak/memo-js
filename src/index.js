import { Game } from './Game';

const rows = 6;
const cols = 5;

const appElement = document.querySelector('.app');
Game(appElement).init(rows, cols);
