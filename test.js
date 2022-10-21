import enumUtil from './index'
console.log('Array: string|number[][]-------->>>>>>>>>')
const test1 = enumUtil([
  [1, 'String'],
  [2, 'Number'],
  [3, 'Boolean']
])
console.log(test1)
console.log(test1[1] === 'String', test1['String'] === 1, test1['1'] === 'String')
console.log(test1[1], (test1[1] = '不可变数据'), test1[1] === '不可变数据')

console.log('Array: string[]-------->>>>>>>>>')
const test2 = enumUtil(['String', 'Number', 'Boolean'], 1)
console.log(test2)
console.log(test2[1] === 'String', test2['String'] === 1, test2['1'] === 'String')

console.log('Object: {[number]:string} 不处理-------->>>>>>>>>')
const example = enumUtil({ 1: 'String', 2: 'Number', 3: 'Boolean' })
console.log(example)
console.log(example[1] === 'String', example['String'] === '1', example['1'] === 'String')

console.log('Object: {[number]:string} 处理-------->>>>>>>>>')
const example3 = enumUtil({ 1: 'String', 2: 'Number', 3: 'Boolean' }, true)
console.log(example3)
console.log(example3[1] === 'String', example3['String'] === 1, example3['1'] === 'String')

console.log('Object: {[string]:number} -------->>>>>>>>>')
const example2 = enumUtil({ String: 1, Number: 2, Boolean: 3 }, true)
console.log(example2)
console.log(example2[1] === 'String', example2['String'] === 1, example2['1'] === 'String')

console.log('Error: -------->>>>>>>>>')
console.log(enumUtil(''))
