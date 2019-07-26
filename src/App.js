import React from 'react';
//import logo from './logo.svg';
import './App.module.css';
import Layout from './Components/Layout/Layout';
import Burgerbuilder from './Containers/BurgerBuilder/BurgerBuilder';

function App() {
  return (
    <div>
      {/* The Chilren of Layout -- Burgerbuilder */}
      <Layout>
        <Burgerbuilder />
      </Layout>
    </div>
  );
}

export default App;
