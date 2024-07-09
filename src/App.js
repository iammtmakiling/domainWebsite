import React from 'react';
import HomePage from './pages/HomePage';
import SwitchButton from './components/atoms/SwitchButton';

const App = () => {
  return (
    <div className="min-h-screen bg-light-background dark:bg-dark-background">
      <div className="flex justify-end p-4">
        <SwitchButton />
      </div>
      <HomePage />
    </div>
  );
};

export default App;
