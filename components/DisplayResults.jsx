import React from 'react';

const DisplayResults = ({ results, hasSearched, term }) => {
  const sections = new Set([]);
  for (const result of results) {
    sections.add(result.section);
  }
  const sectionsArr = Array.from(sections);

  return (
    <>
      {hasSearched && (
        <h2 className="font-black font-serif text-2xl text-blue-800 opacity-40 tracking-wide pb-5 mb-5 border-b-2 border-blue-800">
          Results
        </h2>
      )}
      <ul className="max-h-full grid grid-flow-row lg:grid-flow-col auto-cols-fr auto-rows-max gap-4">
        {sectionsArr.map((section) => {
          const resultsInSection = results.filter(
            (result) => result.section === section
          );
          return (
            <li key={section.toLowerCase()} className="min-w-min">
              <h3 className="font-bold text-blue-900 text-xl mb-4 py-2 text-center bg-blue-50 rounded-md">
                {section}
              </h3>
              <ul className="flex flex-col sm:flex-row lg:flex-col 2xl:flex-row flex-wrap gap-2">
                {resultsInSection.map(({ id, url, title, date, section }) => {
                  date = new Date(date).toLocaleDateString('en-AU', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  });

                  return (
                    <li
                      key={id}
                      className="text-blue-800 bg-blue-100 rounded-md p-4 flex flex-col justify-between flex-grow w-auto sm:w-1/4 lg:w-auto 2xl:w-1/4 min-w-min max-w-full"
                    >
                      <a href={url} className="text-base font-medium mb-3">
                        {title}
                      </a>{' '}
                      <span className="text-xs uppercase opacity-50">
                        ({date})
                      </span>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default DisplayResults;
