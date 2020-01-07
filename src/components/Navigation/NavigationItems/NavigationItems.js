import React from 'react';
import NavigationItem from "./NavigationItem/NavigationItem";

import './NavigationItems.css';

const NavigationItems = () => (
  <ul className="NavigationItems">
    <NavigationItem to="/" exact>Orders</NavigationItem>
  </ul>
);

export default NavigationItems;