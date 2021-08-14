import React, { useState } from 'react';
import Head from 'next/head';
import Results from '../components/Results/Results';
import Header from '../components/Header/Header';
import Search from '../components/Search/Search';

const IndexPage = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  return (
    <div className="min-h-screen flex justify-center items-center bg-blue-100">
      <Head>
        <title>Guardian Search</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="my-10 flex flex-col gap-8 justify-center items-center bg-white p-10 min-w-max rounded-3xl">
        <Header text="Guardian Search" />
        <Search
          loading={loading}
          setLoading={setLoading}
          setResults={setResults}
          setHasSearched={setHasSearched}
        />
        <Results
          results={results}
          loading={loading}
          hasSearched={hasSearched}
        />
      </main>
    </div>
  );
};

export default IndexPage;
