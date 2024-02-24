import { updateProducts } from "../appSlice";
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

export const getRates = async (dispatch, currency) => {
  // Example usage
  const selectedCurrency = currency; // Example selected currency
  fetchExchangeRates().then((exchangeRates) => {
    const updatedProducts = convertPrices(
      products,
      exchangeRates,
      selectedCurrency
    );
    dispatch(updateProducts(updatedProducts));
    console.log(updatedProducts);
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
