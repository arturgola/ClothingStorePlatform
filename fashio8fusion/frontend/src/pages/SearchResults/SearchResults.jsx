import { useEffect, useState } from 'react';
import { ProductList } from '../ProductListWomen/ProductList';
import { useLocation } from 'react-router-dom';
import { REACT_APP_API_URL } from '../../utils/apiConfig';
import LoadingBox from '../../components/LoadingBox/LoadingBox';
import { Helmet } from 'react-helmet-async';

const SearchResults = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('query');

  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          `${REACT_APP_API_URL}/api/search?query=${query}`
        );

        if (!res.ok) {
          throw Error('Could not fetch results for the search');
        }

        const data = await res.json();

        setIsLoading(false);
        setError(null);
        setResults(data);
      } catch (err) {
        setIsLoading(false);
        setError(err.message);
      }
    };

    fetchResults();
  }, [query]);

  return (
    <>
      <Helmet>
        <title>Search results</title>
      </Helmet>
      <h2 style={{ padding: 20, paddingBottom: 0, margin: 0 }}>
        Search results
      </h2>
      <div>
        {isLoading ? (
          <LoadingBox />
        ) : error ? (
          <div>{error}</div>
        ) : results.length === 0 ? (
          <div style={{ padding: 20 }}>No result matching your search</div>
        ) : (
          <ProductList products={results} />
        )}
      </div>
    </>
  );
};

export default SearchResults;
