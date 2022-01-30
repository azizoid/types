export type NonNull<T> = T extends (null | undefined) ? never : T

// const n: NonNull<number> // ok
// const n: NonNull<null> // error