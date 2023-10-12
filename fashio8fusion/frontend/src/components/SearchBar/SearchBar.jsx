import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SearchBar.module.css';
import { useField } from '../../hooks/useField';

export const SearchBar = () => {
  //const query = useField('text');
  const [query, setQuery] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // const searchQuery = query.value
    //   .trim()
    //   .split(' ')
    //   .map(encodeURIComponent)
    //   .join('+');

    const searchQuery = query
      .trim()
      .split(' ')
      .map(encodeURIComponent)
      .join('+');

    if (searchQuery) {
      navigate(`/search?query=${searchQuery}`);

      //query.clear()
      setQuery('');
    }
  };

  return (
    <div className={styles.search_bar}>
      <img
        src="/assets/search_logo.svg"
        alt="SearchBar"
        className={styles.search_logo}
      />
      <form className={styles.search_form} onSubmit={handleSubmit}>
        {/* <input {...query} /> */}
        <input
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          type="text"
        />
      </form>
    </div>
  );
};
