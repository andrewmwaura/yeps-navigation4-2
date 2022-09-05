// App.js
import React from "react";
import { Provider } from 'react-redux';
import Home from './redux/screens/home';
import { store } from './redux/store';
 
export default function App() { 
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
} 