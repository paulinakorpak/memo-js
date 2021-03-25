export const template = (rows, cols) => {
  let html = '';

  for (let i = 0; i < rows; i++) {
    html = `${html} <tr class="row">`;

    for (let j = 0; j < cols; j++) {
      const key = i * cols + j;
      html = `${html} <td class="col" data-key="${key}"></td>`;
    }

    html = `${html} </tr>`;
  }

  return html;
};
