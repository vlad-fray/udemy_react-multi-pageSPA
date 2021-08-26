import QuoteList from './../components/quotes/QuoteList';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Max', text: 'Learning React' },
  { id: 'q2', author: 'Maximilian', text: 'Learning JavaScript' },
];

const AllQuotes = () => {
  return (
    <>
      <QuoteList quotes={DUMMY_QUOTES} />
    </>
  );
};

export default AllQuotes;
