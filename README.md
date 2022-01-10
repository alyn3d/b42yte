
# 42 Bytes => "answer to life the universe and everything"

Simple NPM package based on the Hitchiker's Guide to the Galaxy

## Features

- Get advice from Marvin
- Get the answer to life, the universe and everything
- Get a random HHGTTG quote
- Get remaining days until Towel Day. Towel Day is an annual celebration on the 25th of May (On that day, fans around the universe carry a towel in honour of Douglas Adams.)


## Installation

Installation using npm

```bash
  npm install b42yte
```
    
## Usage/Examples

#### Get advice from marvin 
```javascript
import { GetAdvice } from 'b42yte';

GetAdvice('Your name here');
```

#### Get the answer to life, the universe and everything 
```javascript
import { TheAnswerToLifeTheUniverseAndEverything } from 'b42yte';

TheAnswerToLifeTheUniverseAndEverything();
```

#### Get a random quote from HHGTTG
```javascript
import { GetQuote } from 'b42yte';

GetQuote();
```

#### Get remaining days until Towel Day
```javascript
import { IsItTowelDay } from 'b42yte';

IsItTowelDay();
```

#### CommonJS 
```javascript
var b42yte = require("b42yte");

// Get advice from marvin
b42yte.GetAdvice('Your name here');
// Get the answer to life, the universe and everything 
b42yte.TheAnswerToLifeTheUniverseAndEverything();
// Get a random quote from HHGTTG
b42yte.GetQuote();
// Get days remaining until Towel Day
b42yte.IsItTowelDay();
```

## Contributing
[Contributors are welcome](https://github.com/alyn3d/b42yte/blob/master/CONTRIBUTING.md)

## License
[ISC License](https://github.com/alyn3d/b42yte/blob/master/LICENSE.md)