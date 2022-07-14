/*
### Problema 1:

Crea una función para encontrar la diferencia de edad entre el miembro mas viejo y el más jóven de la familia. Retorna como resultado un objeto indicando las edades de cada miembro, y la diferencia de edad.

```jsx
const Family = [
    {
      name: 'John',
      age: 13
    },
    {
      name: 'Mark',
      age: 56,
    },
    {
      name: 'Rachel',
      age: 45,
    },
    {
      name: 'Nate',
      age: 67,
    },
    {
      name: 'Jeniffer',
      age: 65,
    }
  ];
```

Expected result:

```jsx
	{
    oldest: 67,
    youngest: 13,
    'age-difference': 54
  }
```
*/
const Family = [
    {
      name: 'John',
      age: 13
    },
    {
      name: 'Mark',
      age: 56,
    },
    {
      name: 'Rachel',
      age: 45,
    },
    {
      name: 'Nate',
      age: 67,
    },
    {
      name: 'Jeniffer',
      age: 65,
    }
  ];

  let edades= Family.map(edad=>edad.age)
  console.log(edades);
  let old = Math.max(...edades)
  let joven = Math.min(...edades)
  console.log(old);
  console.log(joven);
  console.log(`La diferencia ${old-joven}`);