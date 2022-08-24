"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;

}

BinarySearchTree.prototype.size = function () {
  var cont = 1
  if (!this.left && !this.right) {
    return 1;
  } else {
    if (this.left && !this.right) {
      return cont + this.left.size();
    } else if (!this.left && this.right) {
      return cont + this.right.size();
    } else {
      return this.left.size() + this.right.size() + 1
    }
  }
}

BinarySearchTree.prototype.insert = function (value, pos) {
  if (!pos) var pos = this
  if (value < this.value) {
    if (this.left === null) {
      this.left = new BinarySearchTree(value)
    } else {
      this.left.insert(value, pos)
    }
  } else if (value >= this.value) {
    if (this.right === null) {
      this.right = new BinarySearchTree(value)
    } else {
      this.right.insert(value, pos)
    }
  }
  return this
}

BinarySearchTree.prototype.contains = function (value, pos) {
  if (this.value === value) {
    return true;
  }
  if (value < this.value && this.left !== null) {
    return this.left.contains(value);
  } else if (value >= this.value && this.right !== null) {
    return this.right.contains(value)
  } else {
    return false;
  }
}

BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {

}

BinarySearchTree.prototype.breadthFirstForEach = function () {}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};