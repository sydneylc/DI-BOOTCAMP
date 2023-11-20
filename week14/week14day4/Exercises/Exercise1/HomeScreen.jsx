
import React from 'react';

const HomeScreen = () => {
  return <h1>Home</h1>;
};

const ProfileScreen = () => {
  return <h1>Profile</h1>;
};

const ShopScreen = () => {
  throw new Error('Shop error');
};

export { HomeScreen, ProfileScreen, ShopScreen };
