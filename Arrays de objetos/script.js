var person1 = {
  name: 'Vulks',
  age: 36
}

var person2 = {
  name: 'Nay',
  age: 32
}

var person3 = {
  name: 'Maria',
  age: 42
}

var list = [person1, person2, person3]

for (var person of list) {
  console.log(person.name)
}