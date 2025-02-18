import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import { ProductContext } from './contexts/ProductContext';
import { CartContext } from './contexts/CartContext';


// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
// import { createContext } from 'jest-runtime';


function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
	};


	const removeItem = id => {
		setCart(
			cart.filter(item => item.id !== id)
		)
	}



	return (
		<ProductContext.Provider value={{ products, addItem }}>
			<CartContext.Provider value={{cart, setCart, removeItem}}>
				<div className="App">
					<Navigation  />
					<h1>We're testing this!</h1>
					{/* Routes */}
					<Route
						exact
						path="/"
						component={Products}
					/>

					<Route
						path="/cart"
						component={ShoppingCart}
					/>
				</div>
			</CartContext.Provider>
		</ProductContext.Provider>
	);
} 

export default App;
