import { HHGTTGQuotes } from './quotes';

export const GetAdvice = (name: string):string => `I'd give you advice, ${name} but you wouldn't listen. No one ever does.`;

export const TheAnswerToLifeTheUniverseAndEverything = ():number => 42;

export const GetQuote = ():string => HHGTTGQuotes[Math.floor(Math.random() * HHGTTGQuotes.length)];

export const IsItTowelDay = ():string => {
  var today = new Date();
  var towelDay = new Date(today.getFullYear(),4,25);
  var remainingDays = Math.ceil((towelDay.getTime()-today.getTime())/86400000);

  if ( remainingDays < 0 ) {
      var newToday = new Date();
      newToday.setFullYear(today.getFullYear()+1);
      remainingDays+=Math.floor((newToday.getTime()-today.getTime())/86400000);
  }

  if ( remainingDays > 1 ) {
      return `${remainingDays} day${remainingDays>1?"s":""} left until Towel Day!`;
  } else if ( remainingDays == 1 ) {
      return `Towel Day is tomorrow!`;
  } else {
      return `Today is Towel Day. Don't forget your towel!`;
  }
};