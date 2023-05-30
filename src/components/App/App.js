import React from 'react';

import './App.css';
import { Container } from '../Container';
import { Item } from '../Item';

export const App = () => {
  return (
    <Container>
      <div className="container">
        <div className="guests-container__title">
          <h2 className="guests-container__heading-title">
            Homes guests loves
          </h2>
        </div>
        <div className="guests-container__navigation">
          <Item />
        </div>
      </div>
    </Container>
  );
};
