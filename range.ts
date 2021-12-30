type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>

export type Range<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>

// type rangeNumber = Range<100, 500>
// const a: rangeNumber = 300 // correct
// const b: rangeNumber = 50 // wrong
// const c: rangeNumber = 999 // wrong