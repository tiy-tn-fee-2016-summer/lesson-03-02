const simpsons = [
  { name: 'Homer', age: 36 },
  { name: 'Marge', age: 34 },
  { name: 'Bart', age: 10 },
  { name: 'Lisa', age: 8 },
];

export default function () {
  var list = document.querySelector('ul');

  for (var i = 0; i < simpsons.length; i++) {
    const loopItem = document.createElement('li');
    loopItem.innerText = `Name: ${simpsons[i].name}, Age: ${simpsons[i].age}`;
    list.appendChild(loopItem);
  }
}
