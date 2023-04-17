const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {

  constructor() {
    this.rootTree = null;
  }

  root() {
    return this.rootTree;
  }

  add(data) {
    this.rootTree = addVal(this.rootTree, data);

    function addVal(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addVal(node.left, data);
      } else {
        node.right = addVal(node.right, data);
      }
      return node;
    }

  }

  has(data) {

    return searchVal(this.rootTree, data);

    function searchVal(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      return data < node.data ?
        searchVal(node.left, data) :
        searchVal(node.right, data);
    }
  }


  find(data) {
    return findVal(this.rootTree, data);

    function findVal(node, data) {
      if (!node) return null;
      if (node.data === data) {
        return node;
      }
      return node.data <= data ?
        findVal(node.right, data) :
        findVal(node.left, data);
    }
  }

  remove(data) {

    this.rootTree = removeVal(this.rootTree, data);

    function removeVal(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeVal(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeVal(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = removeVal(node.right, minFromRight.data);

        return node;
      }
    }
  }

  min() {

    if (!this.rootTree) {
      return;
    }

    let node = this.rootTree;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.rootTree) {
      return node.data;
    }

    let node = this.rootTree;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};