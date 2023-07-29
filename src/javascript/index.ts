import * as _ from 'lodash';
import { calculateTax } from './tax';
 
_.clone([1, 2, 3, 4, 5]);

let tax = calculateTax(10000);
console.log(tax);
