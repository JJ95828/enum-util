# enum-util

Emulation of typescript enum implementations in javascript.


``` 
import enumUtil from './index'
const test1 = enumUtil([
  [1, 'String'],
  [2, 'Number'],
  [3, 'Boolean']
])
console.log(test1)****
console.log(test1[1] === 'String', test1['String'] === 1, test1['1'] === 'String')
```

```
const test2 = enumUtil(['String', 'Number', 'Boolean'], 1)
console.log(test2)
console.log(test2[1] === 'String', test2['String'] === 1, test2['1'] === 'String')
```

```
const example2 = enumUtil({ String: 1, Number: 2, Boolean: 3 })
console.log(example2)
console.log(example2[1] === 'String', example2['String'] === 1, example2['1'] === 'String')
```