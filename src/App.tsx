import React from 'react';

import background from './assets/images/background.svg';
import { Clock, Footer, Header, NavBar } from './components';

function App(): JSX.Element {
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
