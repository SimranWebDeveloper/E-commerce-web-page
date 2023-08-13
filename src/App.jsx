import React from "react";
import AppRouter from "./router/AppRouter";
import { WishlistProvider } from "react-use-wishlist";
import { ThemeProvider } from "./context/ThemeContext";
import { Provider } from "react-redux";
import { store } from "./redux/Store";
import { CartProvider } from "react-use-cart";



const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <WishlistProvider>
          <CartProvider>
            <AppRouter />
          </CartProvider>
        </WishlistProvider>
      </ThemeProvider>
    </Provider>
   
  );
};

export default App;
