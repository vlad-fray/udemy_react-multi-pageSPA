import {
  Link,
  Route,
  useParams,
  useRouteMatch,
} from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from './../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Max', text: 'Learning React' },
  { id: 'q2', author: 'Maximilian', text: 'Learning JavaScript' },
];

const QuotesDetail = () => {
  const match = useRouteMatch();
  const params = useParams();
  const quote = DUMMY_QUOTES.find(
    (quote) => quote.id === params.quoteId
  );

  const quoteMarkup = (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />

      <Route path={match.path} exact>
        <div className='centered'>
          <Link className='btn--flat' to={`${match.url}/comments`}>
            Load comments
          </Link>
        </div>
      </Route>

      <Route path={`${match.path}/comments`}>
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
