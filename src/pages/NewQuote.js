import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { addQuote } from '../lib/api';
import QuoteForm from './../components/quotes/QuoteForm';
import useHttp from './../hooks/use-http';

const NewQuote = () => {
  const history = useHistory();
  const { sendRequest, status } = useHttp(addQuote);

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
    history.push('/quotes');
  };

  useEffect(() => {
    if (status === 'completed') {
      history.push('/quotes');
    }
    return () => {};
  }, [status, history]);

  return (
    <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} />
  );
};

export default NewQuote;
