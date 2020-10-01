const currencyFormatter = (value) => {
  return new Intl.NumberFormat("en-CO", {style: "currency", currency: "COP"}).format(value);
};
export default currencyFormatter;
