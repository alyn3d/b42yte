import { GetQuote } from '../index';
import { HHGTTGQuotes } from '../quotes';

test('Get a random quote from HHGTTG', () => {
  expect(HHGTTGQuotes).toContain(GetQuote());
});