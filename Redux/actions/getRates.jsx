import { updateProducts } from "../appSlice";
import { updateCart } from "../cartSlice";
import { products } from "../data";

const currencySymbols = {
  USD: "$",
  EUR: "€",
  NGN: "₦", // Nigerian Naira
};
// Function to fetch exchange rates from API
function fetchExchangeRates() {
  return fetch(`https://open.er-api.com/v6/latest/USD`)
    .then((response) => response.json())
    .then((data) => data.rates)
    .catch((error) => {
      console.error("Error fetching exchange rates:", error);
    });
}

export const getRates = async (dispatch, currency, items) => {
  // Example usage
  if (!currency) return;
  const selectedCurrency = currency; // Example selected currency
  fetchExchangeRates().then((exchangeRates) => {
    const updatedProducts = convertPrices(
      products,
      exchangeRates,
      selectedCurrency
    );
    if (items?.length > 0) {
      const updatedProducts = items.map((cart) => {
        const exchangeRate = exchangeRates[selectedCurrency];
        const basePrice = parseFloat(cart.product.basePrice);
        const convertedPrice = (basePrice * exchangeRate).toFixed(2);
        const currencySymbol = currencySymbols[selectedCurrency];

        return {
          ...cart,
          product: {
            ...cart.product,
            price: `${currencySymbol}${convertedPrice}`,
            currency: selectedCurrency,
          },
        };
      });
      dispatch(updateCart(updatedProducts));
    }
    dispatch(updateProducts(updatedProducts));
  });
};

// Function to convert product prices to the selected currency
function convertPrices(products, exchangeRates, selectedCurrency) {
  return products.map((product) => {
    const exchangeRate = exchangeRates[selectedCurrency];
    const price = parseFloat(product.price);
    const convertedPrice = (price * exchangeRate).toFixed(2);
    const currencySymbol = currencySymbols[selectedCurrency];

    return {
      ...product,
      price: `${currencySymbol}${convertedPrice}`,
      currency: selectedCurrency,
    };
  });
}
