import React from 'react'
import CalorieCard from './components/CalorieCard';
import './App.css';

function App() {
  return (
    <>
    <div className="container">
      <CalorieCard Title="Pizza" calories="56"/>
      <CalorieCard Title="Burger" calories="69"/>
      <CalorieCard Title="Coke" calories="500"/>
      <CalorieCard Title="Brownie" calories="180"/>
      <CalorieCard Title="Fried Rice" calories="90"/>
      <CalorieCard Title="Lassania" calories="200"/>
      <CalorieCard Title="Pani Puri" calories="10"/>
    </div>
    </>
  );
}

export default App;
