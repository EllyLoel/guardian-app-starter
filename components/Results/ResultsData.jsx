import React from 'react';
import Sections from './Sections';

const ResultsData = ({ results }) => {
  return (
    <ul className="flex flex-col gap-4">
      <Sections results={results} />
    </ul>
  );
};

export default ResultsData;
