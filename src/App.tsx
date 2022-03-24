import React, { useEffect } from 'react';

import { useAppSelector } from './app/hooks/redux';
import { Clock, Footer, Header, NavBar } from './components';
import { RootState } from './shared/store';

function App(): JSX.Element {
  const { countdown } = useAppSelector((state: RootState) => state);

  useEffect(() => {
    console.log(countdown.ms);
  });

  return (
    <div className="flex flex-col flex-auto justify-between items-center min-h-screen text-white bg-neutral-900">
      <Header />
      <Clock />
      <NavBar />
      <Footer />
    </div>
  );
}

export default App;
