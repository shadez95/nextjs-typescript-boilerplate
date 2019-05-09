import React from 'react';

import { GithubLink } from './github-link';

export const Help: React.FC<{}> = (): JSX.Element => (
  <p>
    Please see
    {' '}
    <GithubLink link="https://github.com/shadez95/nextjs-typescript-boilerplate" />
    {' '}
    page for more help and information
  </p>
);
