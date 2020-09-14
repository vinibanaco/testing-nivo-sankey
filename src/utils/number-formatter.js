const numberFormatter = (
  locale,
  { style, currency, minimumFractionDigits, maximumFractionDigits, minimumIntegerDigits } = {},
) => {
  return Intl.NumberFormat(locale, {
    style,
    currency,
    minimumFractionDigits,
    maximumFractionDigits,
    minimumIntegerDigits,
  }).format;
};

export default numberFormatter;
