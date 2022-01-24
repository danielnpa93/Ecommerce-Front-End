export const currencyFormatter = (value, style = 'decimal') => {
  const amount = new Intl.NumberFormat('pt-BR', {
    style,
    currency: 'BRL',
    minimumFractionDigits: 2,
  }).format(value || 0);

  return `${amount}`;
};
