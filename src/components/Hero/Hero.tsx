import React from 'react';

import { LinkButton } from '../LinkButton';
import './Hero.css';

export const Hero = () => {
  return (
    <div className="hero">
      <h1 className="header">
        Welcome To My Secret Space
      </h1>
      <p>Hey I’m Kaylee, just a petite 4ft10 Asian software engineer
        with secret hobbies and tendencies to overshare. Check out my
        links if you’d like to see more of me!</p>
      <LinkButton  href="https://onlyfans.com/kaylee" text="Click here! Exclusive content 18+" />
    </div>
  )
}
