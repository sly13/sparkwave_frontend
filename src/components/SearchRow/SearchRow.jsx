import React from 'react'
import { useNavigate } from 'react-router-dom';
import classes from './SearchRow.module.css'

export default function SearchRow({ input, placeholder, setQuery, value = '' }) {
  let navigate = useNavigate();

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      const query = event.target.value;
      navigate(`/find-artists?search=${query}`);
    }
  };

  return (
    <form action="" className={classes.row}>
      <input type="text"
        placeholder={placeholder}
        className={classes.input}
        onChange={(event) => { setQuery(event.target.value) }}
        onKeyPress={handleKeyPress} />
      <button type="submit" className={classes.button}></button>
    </form>
  )
}
