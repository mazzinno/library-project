import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import Allcategories from './components/categories'


const App = () => {
  return (
    <>
      <Navbar />
      <Allcategories />
    </>
  );
}

export default App;
