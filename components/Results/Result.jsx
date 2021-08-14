import React from 'react';

const Result = ({ sectionResults }) => {
  return sectionResults.map(({ id, url, title, date }) => {
    const dateFormated = new Date(date).toLocaleDateString('en-AU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    return (
      <li
        key={id}
        className="flex flex-row justify-between items-baseline gap-10 text-blue-800 bg-blue-100 rounded-md p-4"
      >
        <a
          href={url}
          className="text-base font-medium hover:underline transition-all"
        >
          {title}
        </a>
        <span className="text-xs uppercase opacity-50">({dateFormated})</span>
      </li>
    );
  });
};

export default Result;
