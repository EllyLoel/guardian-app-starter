import axios from 'axios';

const searchHandler = async (req, res) => {
  const searchResults = await axios.get(
    'https://content.guardianapis.com/search',
    {
      params: {
        'api-key': process.env.GUARDIAN_API_KEY,
        q: req.query.term,
      },
    }
  );

  const apiResults = searchResults.data.response.results.map(
    ({ id, webTitle, webUrl, webPublicationDate, sectionName }) => {
      return {
        id: id,
        title: webTitle,
        url: webUrl,
        date: webPublicationDate,
        section: sectionName,
      };
    }
  );

  res.status(200).json(apiResults);
};

export default searchHandler;
