import { Range } from './range'

type rangeNumber = Range<100, 500>
const a: rangeNumber = 300 // correct
const b: rangeNumber = 50 // wrong
const c: rangeNumber = 999 // wrong