"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {
  this._length = 0;
  this.head = null;
}

LinkedList.prototype.add = function (data) {
  var node = new Node(data);
  let current = this.head;

  if (!current) {
    this.head = node;
    this._length++;
    return node;
  }
  while (current.next) {
    current = current.next;
  }
  current.next = node;
  this._length++;
  return node;
};
LinkedList.prototype.remove = function () {
  let current = this.head;
  if (!current) {
    return null;
  }
  if (this._length === 1) {
    toDelete = current.value;
    current.next = null;
    this.head = null;
    this._length--;
    return toDelete;
  }
  var toDelete = null;
  for (let index = 0; index < this._length; index++) {
    if (index === this._length - 1) {
      toDelete = current.value;
      current.next = null;
      this._length--;
      return toDelete;
    } else {
      current = current.next;
    }
  }
};
LinkedList.prototype.search = function (data) {
  let current = this.head;

  if (typeof data === "function") {
    while (current) {
      if (data(current.value)) {
        return current.value;
      }
      current = current.next;
    }
  } else {
    while (current) {
      if (current.value === data) {
        return current.value;
      }
      current = current.next;
    }
  }
  return null;
};

function Node(value) {
  this.value = value;
  this.next = null;
}

/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable() {
  this.numBuckets = 35
  this.buckets = []
}
HashTable.prototype.hash = function (key) {
  if (typeof key !== "string") throw new TypeError("Keys must be strings")
  let code = 0
  for (let i = 0; i < key.length; i++) {
    code += key.charCodeAt(i)
  }
  return code % this.numBuckets

}
HashTable.prototype.set = function (key, value) {
  const hashCode = this.hash(key)
  this.buckets[hashCode] = value
}
HashTable.prototype.get = function (key) {
  const code = this.hash(key)
  return this.buckets[code]
}
HashTable.prototype.hasKey = function (key) {
  const code = this.hash(key)
  if (this.buckets[code]) this.buckets[code].hasOwnProperty()
  return false
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};