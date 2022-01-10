import { IsItTowelDay } from '../index';

function expect_or(...tests:any) {
  try {
    tests.shift()();
  } catch(e) {
    if (tests.length) expect_or(...tests);
    else throw e;
  }
}

test('Get remaining days until Towel Day', () => {
  expect(IsItTowelDay()).toMatch(/^[1-9]|[1-9][0-9]|[1-2][0-9]{2}|3[0-5][0-9]|36[0-5]$ ${'day' || 'days'} left until Towel Day!/ || `Towel Day is tomorrow!` || `Today is Towel Day. Don't forget your towel!`);
});