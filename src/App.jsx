import React from "react";
import AppRouter from "./router/AppRouter";
import { WishlistProvider } from "react-use-wishlist";
import { ThemeProvider } from "./context/ThemeContext";
import { Provider } from "react-redux";
import { store } from "./redux/Store";
import Test from "./router/Test";
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
    // <Test/>
  );
};

export default App;
