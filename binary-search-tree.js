class Node {
  constructor(val){
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }

  insert(val){
    let newNode = new Node(val);
    if( this.root === null ){
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while( true ){
        if( val === current.value ) return undefined;
        if( val < current.value ){
          if( current.left === null ){
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if( val > current.value ){
          if( current.right === null ){
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(val){
    if( this.root === null ) return undefined;
    let current = this.root,
        found = false;
    while( current && !found ){
      if( val < current.value ){
        current = current.left;
      } else if( val > current.value ){
        current = current.right;
      } else {
        found = true;
      }
    }
    if( !found ) return undefined;
    return current;
  }

  delete(val){
    let current = this.root;
    const removeNode = function(current, val){
      if( current === null ) return undefined;
      if( val === current.value ){
        // has no children
        if( current.left === null && current.right === null ){
          return null;
        // has only right child
        } else if( current.left === null ){
          return current.right;
        // has only left child
        } else if( current.right === null ){
          return current.left;
        }
        // Node has 2 children: find the smallest Node in the right subtree 
        let min = current.right;
        while( min.left !== null ){
          min = min.left;
        }
        current.value = min.value;
        current.right = removeNode(current.right, min.value);
        return current;
      } else if( val < current.value ){
        current.left = removeNode(current.left, val);
        return current;
      } else {
        current.right = removeNode(current.right, val);
        return current;
      }
    }
    this.root = removeNode(this.root, val);
  }
}

//     10
//   5    50
//      32   77
//    25

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(50);
tree.insert(32);
tree.insert(77);
tree.insert(25);
