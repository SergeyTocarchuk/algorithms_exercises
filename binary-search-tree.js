class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val){
    let newNode = new Node(val);
    if( this.root === null ){
      this.root = newNode;
      return this;
    }
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
}