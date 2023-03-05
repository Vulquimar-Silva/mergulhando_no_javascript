interface Animal {
  sex: 'male' | 'female'
}

interface Human extends Animal {
  name: string
  age: number
}

const person: Human = {
  age: 50,
  name: 'Gilmar',
  sex: 'male'
}