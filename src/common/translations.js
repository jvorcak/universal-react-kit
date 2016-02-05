import {sync as globSync} from 'glob';
import * as path from 'path';
import {readFileSync} from 'fs';

const translations = globSync('./build/lang/*.json')
  .map((filename) => [
    path.basename(filename, '.json'),
    readFileSync(filename, 'utf8'),
  ])
  .map(([locale, file]) => [locale, JSON.parse(file)])
  .reduce((collection, [locale, messages]) => {
    collection[locale] = messages;
    return collection;
  }, {});

export default translations;
