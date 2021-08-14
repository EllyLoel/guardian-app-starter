import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = ({ loading, setLoading, setResults, setHasSearched }) => {
  const [term, setTerm] = useState('');

  const doSearch = async () => {
    setLoading(true);
    setHasSearched(true);

    try {
      const resultSet = await axios.get('/api/search', {
        params: {
          term,
        },
      });

      setLoading(false);
      setResults(resultSet.data);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  const handleSearchInputChanges = (evt) => {
    setTerm(evt.target.value);
  };

  const resetInputField = () => {
    setTerm('');
  };

  const callSearchFunction = (evt) => {
    evt.preventDefault();
    doSearch();
    resetInputField();
  };

  return (
    <div className="flex flex-row justify-center items-center border-2 border-blue-200 rounded-md p-2 text-blue-900">
      <label>
        <FontAwesomeIcon icon={faSearch} className="fill-current ml-1" />
        <input
          id="search"
          value={term}
          onChange={handleSearchInputChanges}
          className="py-1 px-2 mr-2 w-2/3 text-blue-900 font-bold outline-none border-blue-900 focus:border-b-2"
        />
      </label>

      <button
        type="submit"
        onClick={(evt) => term && !loading && callSearchFunction(evt)}
        className="bg-blue-800 text-white font-bold py-1 px-2 w-1/3 rounded-md focus:ring"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
