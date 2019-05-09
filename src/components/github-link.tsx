import React from 'react';

interface GithubLinkProps {
  link: string;
}

export const GithubLink: React.FC<GithubLinkProps> = ({ link }): JSX.Element => (
  <a href={link}>
    Github
  </a>
);
