# moment-jalaali-holiday

[![npm package version](https://img.shields.io/npm/v/moment-holiday.svg?style=flat-square)](https://www.npmjs.com/package/moment-holiday) [![Travis build status](https://img.shields.io/travis/kodie/moment-holiday.svg?style=flat-square)](https://travis-ci.org/kodie/moment-holiday) [![npm package downloads](https://img.shields.io/npm/dt/moment-holiday.svg?style=flat-square)](https://www.npmjs.com/package/moment-holiday) [![build/moment-holiday.min.js file size](https://img.shields.io/github/size/kodie/moment-holiday/build/moment-holiday.min.js.svg?style=flat-square)](build/moment-holiday.min.js) [![license](https://img.shields.io/github/license/kodie/moment-holiday.svg?style=flat-square)](LICENSE.md)

A [Moment.js](https://github.com/moment/moment) plugin for handling holidays.

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
  - [Node.js](#nodejs)
- [Functions](#functions)
  - [isHoliday](#use)
- [License](#license)

## Requirements

- [moment.js](https://github.com/moment/moment) v2.0.0 or higher

## Installation

### Node.js

```
npm install moment-jalaali-holiday
//or
yarn add moment-jalaali-holiday
```

```javascript
var moment = require('moment-jalaali-holiday');
moment().isHoliday('1398/07/27', 'jYYYY/jMM/jDD');
```

#### Use

```javascript
moment().isHoliday();
//or
moment().isHoliday('1398/07/27', 'jYYYY/jMM/jDD');
```

#### Examples

```javascript
moment().isHoliday('1398/07/27', 'jYYYY/jMM/jDD');
// true

moment().isHoliday('1398/01/13', 'jYYYY/jMM/jDD');
// true

moment().isHoliday('1398/01/15', 'jYYYY/jMM/jDD');
// false
```

## License

MIT. See the License file for more info.
