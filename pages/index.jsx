import React, { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import DisplayResults from '../components/DisplayResults';
import DoSearch from '../components/DoSearch';
import loadingAnimation from '../assets/loading.svg';

const IndexPage = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  return (
    <div className="min-h-screen flex justify-center items-center bg-blue-100">
      <Head>
        <title>Guardian Search</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="my-10 flex flex-col gap-8 justify-center items-center bg-white p-10 w-4/5 rounded-3xl">
        <h1 className="font-black font-serif text-5xl text-blue-800">
          Guardian Search
        </h1>
        <div className="flex flex-row justify-center items-center border-2 border-blue-200 rounded-md p-2 text-blue-900">
          <label>
            <FontAwesomeIcon icon={faSearch} className="fill-current ml-1" />
            <input
              id="search"
              value={term}
              onChange={(evt) => setTerm(evt.target.value)}
              className="py-1 px-2 mr-2 w-2/3 text-blue-900 font-bold outline-none border-blue-900 focus:border-b-2"
            />
          </label>
          <button
            onClick={() => {
              term &&
                !loading &&
                DoSearch({ term, setResults, setLoading, setHasSearched });
            }}
            className="bg-blue-800 text-white font-bold py-1 px-2 w-1/3 rounded-md focus:ring"
          >
            Search
          </button>
        </div>
        <div className="h-full">
          {loading ? (
            <Image
              src={loadingAnimation}
              alt="loading animation"
              width={60}
              height={60}
            />
          ) : (
            <DisplayResults
              results={results}
              hasSearched={hasSearched}
              term={term}
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default IndexPage;
