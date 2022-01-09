import { HHGTTGQuotes } from './quotes';

export const GetAdvice = (name: string):string => `I'd give you advice, ${name} but you wouldn't listen. No one ever does.`;

export const TheAnswerToLifeTheUniverseAndEverything = ():number => 42;

export const GetQuote = ():string => HHGTTGQuotes[Math.floor(Math.random() * HHGTTGQuotes.length)];