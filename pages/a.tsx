/* eslint-disable func-style */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const foo: number[] = [1, 2, '3']
const bar: Array<number> = [1, 2, 3]
const aa: (number | string)[] = [1, 2, '3']

const bbb: [number, string] = [1, '2']

const ccc: any = [1, 2, '3']

const ddd: unknown = [1, 2, '3']

ccc.toFixed(2)
ddd.toFixed(2)

function fff(): void {
  alert('hello')
  return undefined
}

const ggg: () => void = () => {
  alert('hello')
  return undefined
}

const obj3: Record<string, unknown> = {
  a: 1,
  b: '2',
}
const obj4: { [key: string]: unknown } = {}

type Foo = {
  a: number
  b: string
}

type Bar = {
  c: boolean
}

type FooBar = Foo | Bar

const obj5: FooBar = {
  a: 1,
  b: '2',
  c: true,
}

type Keita = string
type Age = number
type User = Keita | Age


function double(x: number | string) {
  if (typeof x === 'string') {
    return Number(x) * 2
  }
  return x * 2
}
