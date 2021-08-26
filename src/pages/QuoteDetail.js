import { Route, useParams } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from './../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Max', text: 'Learning React' },
  { id: 'q2', author: 'Maximilian', text: 'Learning JavaScript' },
];

const QuotesDetail = () => {
  const params = useParams();
  const quote = DUMMY_QUOTES.find(
    (quote) => quote.id === params.quoteId
  );

  const quoteMarkup = (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments comments={[]} />
      </Route>
    </>
  );

  return (
    <>
      {!quote && <p>No quote found</p>}
      {quote && quoteMarkup}
    </>
  );
};

export default QuotesDetail;
