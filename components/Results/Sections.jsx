import React from 'react';
import Result from './Result';

const Sections = ({ results }) => {
  let sectionNames = new Set([]);
  results.forEach((result) => {
    sectionNames.add(result.section);
  });
  sectionNames = Array.from(sectionNames);

  return sectionNames.map((section) => {
    const sectionResults = results.filter(
      (result) => result.section === section
    );

    return (
      <li key={section.toLowerCase()} className="flex flex-col gap-2">
        <h3 className="font-bold text-blue-900 text-xl py-2 text-center bg-blue-50 rounded-md p-2">
          {section}
        </h3>

        <ul className="flex flex-col gap-2">
          <Result sectionResults={sectionResults} />
        </ul>
      </li>
    );
  });
};

export default Sections;
