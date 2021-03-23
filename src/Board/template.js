export const template = (cards, rows, cols) => {
  let html = '';

  for (let i = 0; i < rows; i++) {
    html = `${html} <tr class="row">`;

    for (let j = 0; j < cols; j++) {
      const index = i * cols + j;
      const card = cards[index];

      html = `${html} <td class="col">
        <img src="img/types/${card}.png" alt="${card}" data-name="${card}" class="d-none"/>
      </td>`;
    }

    html = `${html} </tr>`;
  }

  return html;
};
