import React from 'react';
import axios from 'axios';

const DoSearch = async ({ term, setResults, setLoading, setHasSearched }) => {
  setLoading(true);
  setHasSearched(true);

  try {
    const resultSet = await axios.get('/api/search', {
      params: {
        term: term,
      },
    });

    setLoading(false);
    setResults(resultSet.data);
  } catch (e) {
    setLoading(false);
    console.log(e);
  }
};

export default DoSearch;
