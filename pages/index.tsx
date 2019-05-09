import React from 'react';

import { Help } from '../src/components/help';

function Home() {
  const nextjs = 'Next.js!';
  return (
    <div>
      <h1>Welcome to ${nextjs}</h1>
      <Help />
    </div>
  );
}

export default Home;
