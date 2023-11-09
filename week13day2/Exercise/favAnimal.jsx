// PART 2 THE FAVORITE ANIMALS PIECE
import React from 'react';
import UserFavoriteAnimals from './UserFavoriteAnimals'; // Import the component

const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals: ['Horse', 'Turtle', 'Elephant', 'Monkey'],
};

function App() {
  return (
    <div>
      <h3>{user.firstName}</h3>
      <h3>{user.lastName}</h3>
      <UserFavoriteAnimals favAnimals={user.favAnimals} />
    </div>
  );
}

export default App;