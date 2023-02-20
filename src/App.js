import React from 'react';
import { Header } from './components/Header';
import { CaloricIntake } from './components/CaloricIntake';
import { IntakeList } from './components/IntakeList';
import { AddCalories } from './components/AddCalories';
import { GlobalProvider } from './context/GlobalState';
import './App.css';

function App() {
  return (
    <GlobalProvider>
    <Header />
    <div className = "container">
     <CaloricIntake />
     <IntakeList />
     <AddCalories />
    </div>
  </GlobalProvider>
  
  );
}

export default App;
