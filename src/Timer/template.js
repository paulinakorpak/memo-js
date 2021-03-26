export const template = (minutes, seconds) => {
  const format = (value) => (value > 9 ? value : `0${value}`);

  return `
    <div>
      Timer: ${format(minutes)}:${format(seconds)}
    </div>
  `;
};
