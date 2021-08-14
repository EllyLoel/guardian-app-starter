import React from 'react';

const ResultsHeader = ({ hasSearched }) => {
  return (
    hasSearched && (
      <h2 className="font-black font-serif text-2xl text-blue-800 opacity-40 tracking-wide pb-5 mb-5 border-b-2 border-blue-800">
        Results
      </h2>
    )
  );
};

export default ResultsHeader;
