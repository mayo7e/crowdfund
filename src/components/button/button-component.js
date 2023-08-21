import React from 'react';
import Button  from './button';

 export const PrimaryButton = () => {
  return (
        <button className="button primary">Primary</button>
    );
}

 export const PrimaryButtonDisabled = () => {
  return (
        <button className="button disabled">Primary</button>
    );
}


export const SecondaryButton = () => {
  return (
        <button className="button secondary">Secondary</button>
    );
}
 
export const SecondaryButtonDisabled = () => {
  return (
        <button className="button disabled">Secondary</button>
    );
}

export const WhiteButton = () => {
  return (
        <button className="button white">White</button>
    );
}
 
export const WhiteButtonDisabled = () => {
  return (
        <button className="button disabled">White</button>
    );
}
 
export const ButtonAsLink = () => (
  <button className= "button primary link" href="/">
    Link
  </button>
);

export const CounterButton = () => <button className= " button counter">+</button>;


