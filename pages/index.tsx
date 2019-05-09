import React from 'react';

import { Help } from '../src/components/help';

export const Home: React.FC<{}> = (): JSX.Element => {
  const nextjs = 'Next.js!';
  return (
    <div>
      <h1>
        Welcome to
        {' '}
        {nextjs}
      </h1>
      <Help />
    </div>
  );
};
