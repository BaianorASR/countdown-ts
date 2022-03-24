import React, { useEffect } from 'react';

import { useAppSelector } from './app/hooks/redux';
import background from './assets/images/background.svg';
import { Clock, Footer, Header, NavBar } from './components';
import { RootState } from './shared/store';

function App(): JSX.Element {
  const { countdown } = useAppSelector((state: RootState) => state);

  useEffect(() => {
    console.log(countdown.ms);
  });

  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="flex flex-col flex-auto justify-between items-center min-h-screen text-white bg-center bg-no-repeat bg-cover"
    >
      <Header />
      <Clock />
      <NavBar />
      <Footer />
    </div>
  );
}

export default App;
