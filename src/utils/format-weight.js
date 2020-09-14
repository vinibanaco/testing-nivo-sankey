import numberFormatter from './number-formatter';

const formatWeight = (value, symbol = 'Kg') => {
  const formatNumber = numberFormatter('pt-BR', {
    minimumFractionDigits: 3,
    maximumFractionDigits: 3,
  });

  const renderSymbol = symbol ? ` ${symbol}` : '';

  return `${formatNumber(value)}${renderSymbol}`;
};

export default formatWeight;
