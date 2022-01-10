
# 42 Bytes => "answer to life the universe and everything"

Simple NPM package based on the Hitchiker's Guide to the Galaxy

## Features

- Get advice from Marvin
- Get the answer to life, the universe and everything
- Get a random HHGTTG quote


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

#### CommonJS 
```javascript
var b42yte = require("b42yte");

// Get advice from marvin
b42yte.GetAdvice('Your name here');
// Get the answer to life, the universe and everything 
b42yte.TheAnswerToLifeTheUniverseAndEverything();
// Get a random quote from HHGTTG
b42yte.GetQuote();
```

## Contributing
[Contributors are welcome](https://github.com/alyn3d/b42yte/blob/master/CONTRIBUTING.md)