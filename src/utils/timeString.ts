export const getTimeString = isoString => {
  if (!isoString) {
    return;
  }
  var date = new Date(isoString);

  return `${date.toLocaleDateString()} at ${date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  })}`;
};
