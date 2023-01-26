import { Sorter } from './sorter';
import { NumberCollection } from './numberCollection';
import { CharacterCollection } from './characterCollection';

const numbersCollection = new NumberCollection([50, 3, -5, 0,4.789,564,7657,345354,464,67,4,74,54754456,546,54654]);

numbersCollection.sort()
console.log(numbersCollection.data)
const charactersCollection = new CharacterCollection('Habtamu Firew Enyew idjugkKJDlJDljdslnLFdfLJFl');
charactersCollection.sort()
console.log(charactersCollection.data)
