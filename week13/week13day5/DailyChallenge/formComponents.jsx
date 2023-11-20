
import React from 'react';

const FormComponent = ({ handleChange, handleSubmit, data }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={data.firstName}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={data.lastName}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Age:
        <input type="text" name="age" value={data.age} onChange={handleChange} />
      </label>
      <br />

      <label>
        Gender:
        <input
          type="radio"
          name="gender"
          value="male"
          checked={data.gender === 'male'}
          onChange={handleChange}
        />
        Male
        <input
          type="radio"
          name="gender"
          value="female"
          checked={data.gender === 'female'}
          onChange={handleChange}
        />
        Female
      </label>
      <br />

      <label>
        Destination:
        <select name="destination" value={data.destination} onChange={handleChange}>
          <option value="Japan">Japan</option>
          <option value="USA">USA</option>
          <option value="Germany">Germany</option>
          <option value="Brazil">Brazil</option>
        </select>
      </label>
      <br />

      <label>
        Dietary Restrictions:
        <input
          type="checkbox"
          name="isVegetarian"
          checked={data.isVegetarian}
          onChange={handleChange}
        />
        Vegetarian
        <input
          type="checkbox"
          name="isVegan"
          checked={data.isVegan}
          onChange={handleChange}
        />
        Vegan
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
