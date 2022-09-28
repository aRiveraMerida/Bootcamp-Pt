//Arrays

const array1 = [1, 2, 3, 4, 5];
const array2 = ["Patata", true, { name: "cosa", id: 23 }];

//Posición empieza siempre en 0
//Longitud es la cantidad "humana" de elementos en un array

//-----at
console.log(array1.at(2));

//Normalmente ahora se utiliza la siguiente forma para acceder a los elementos de un array:
console.log(array1[2]); //！

//-----concat - NO SE USA MUCHO
const arrayConcat1 = [1, 2, 3, 4];
const arrayConcat2 = [5, 6, 7, 8];

const concat = arrayConcat1.concat(arrayConcat2);
console.log(concat);

//Normalmente ahora se utiliza SPREAD OPERATOR para concatenar arrays -> ...
const concat2 = [...arrayConcat1, ...arrayConcat2, 70];  //！
console.log(concat2);

//Ejemplo real: todo list
/* const list = [];
const todo = [...list, newTodo] */

//-----entries - NO SE USA MUCHO
const arrayEntries = [1, 2, 3];
const iteratorEntries = arrayEntries.entries();
//console.log(iteratorEntries);

console.log(iteratorEntries.next().value);
console.log(iteratorEntries.next().value);
console.log(iteratorEntries.next().value);
console.log(iteratorEntries.next().value);

//-----fill ->El primer parametro es el elemento a rellenar, el segundo parametro es la posición donde empieza, y el tercero es la posición donde acaba (ESTA POSICIÓN NO SE INCLUYE).
const arrayFill = [1, 2, 3, 4, 5];  //！
const arrayFillCopy = [...arrayFill];
console.log(arrayFill.fill("🫠", 2, 5));
console.log(arrayFill.fill("🛸"));
console.log(arrayFillCopy.fill("👌🏻", 3));

//-----flat -> Aplana las dimensiones de un array y el parámetro que acepta es la cantidad de niveles que tiene que aplanar.
const arrayFlat = [1, 2, 3, [4, 5, [6, 7]]];  //！
console.log(arrayFlat[3][2][0]);
console.log(arrayFlat.flat());
console.log(arrayFlat.flat(2));

//----includes -> El método nos devuelve true false si el array incluye o no el elemento pasado por parámetro
const arrayIncludes = ["Pedro", "Alberto", 2, { name: "Paco", age: 98 }];  //！
console.log(arrayIncludes.includes("Pedro"));
console.log(arrayIncludes.includes(2));
console.log(arrayIncludes.includes("Paco"));
console.log(arrayIncludes.includes("Fulano"));

//-----indexof -> Este método nos devolvera la posición del primer elemento que coincida con el parámetro y si no se encuentra nos devolverá -1
const arrayIndex = ["A", "B", "C"];  //！
console.log(arrayIndex.indexOf("B"));
//-----lastIndexOf -> Es lo mismo, pero con el último elemento

//-----join -> Este método nos convierte un array en un string y el parámetro que le pasemos será el elemento separador
const arrayJoin = ["A", "B", "C"];
console.log(arrayJoin.join());
console.log(arrayJoin.join(" "));
console.log(arrayJoin.join("/"));

//-----length -> Esta propiedad te devuelve la longitud de un array -> TIP: GO TO HELL
const arrayLength = [1, 2, 3, 4, 5, 6];  //！
console.log(arrayLength.length);

//-----push y pop -> Respectivamente añaden al final o quitan del final un elemento de un array
const arrayPush = [1, 2, 3, 4];  //！
arrayPush.push(5); //Podeis meter tantos elementos como querais
console.log(arrayPush);
arrayPush.pop();
console.log(arrayPush);

//-----shift -> Elimina el primer elemento
arrayPush.shift();  //！
console.log(arrayPush);

//-----unshift -> Añade en la primera posición
arrayPush.unshift(1);  //！
console.log(arrayPush);

//----slice -> Troceamos un array y los parametros que le indicamos es desde donde vamos a trocear y hasta donde vamos a trocear. LA ULTIMA POSICION NO SE INCLUYE. Esto devuelve un array con lo convervado en la porción.
const arraySlice = ["Hola", "Adios", "Hello", "Bye"];  //！

console.log(arraySlice.slice(1, 3));

//----sort -> Ordena alfabeticamente un array
const arraySort = ["Hola", "Adios", "Hello", "Bye"];  //！
console.log(arraySort.sort());
const arraySort2 = [4, 1, 40, 5, 50, 6, 78];
console.log(arraySort2.sort());

//----splice -> Primer parámetro indica desde donde vamos a eliminar, segundo parámetro indica cuantos elementos vamos a eliminar, tercer parámetro opcional que introducir en su lugar.
const arraySplice = ["Daniel", "Pedro", "Andrea", "Juan", "Alex"];  //！
arraySplice.splice(1, 3, "Alberto");
console.log(arraySplice);

//----tostring -> Convierte un array en string
const arrayString = ["Pepe", "Paco"];  //！

console.log(arrayString.toString())

/* -----values 
const arrayValues = ["Hola", 1, 45];
const iteratorValues = arrayValues.values();
console.log(iteratorValues) */