import { GetAdvice } from '../index';

test('Get advice from Marvin', () => {
  expect(GetAdvice('Arthur')).toBe(`I'd give you advice, Arthur but you wouldn't listen. No one ever does.`);
});