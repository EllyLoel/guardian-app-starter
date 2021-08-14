import Image from 'next/image';
import ResultsHeading from './ResultsHeader';
import ResultsData from './ResultsData';
import loadingAnimation from '../../assets/loading.svg';

const ResultsSection = ({ hasSearched, loading, results }) => {
  return (
    <div className="h-full">
      {loading ? (
        <Image
          src={loadingAnimation}
          alt="loading animation"
          width={60}
          height={60}
        />
      ) : (
        <>
          <ResultsHeading hasSearched={hasSearched} />
          <ResultsData results={results} />
        </>
      )}
    </div>
  );
};

export default ResultsSection;
