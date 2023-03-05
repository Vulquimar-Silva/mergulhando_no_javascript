type Person = {
  name: string
  age: number
  contacts?: string[]
  isAlive: boolean
}

const person: Person = {
  age: 30,
  name: 'nay',
  isAlive: true,
  contacts: [
    'nay007@hotmail.com'
  ]
}

const person2: Person = {
  name: 'Joao',
  age: 43,
  isAlive: true
}