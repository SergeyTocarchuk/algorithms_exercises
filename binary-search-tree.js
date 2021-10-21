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
    if( this.root === null ) return undefined;
    let current = this.root;
    while( current ){
      if( val < current.value ){
        current = current.left;
      } else if( val > current.value ){
        current = current.right;
      } else {
        if( current.left === null ){
          this.root = current.right;
          return this;
        } else if( current.right === null ){
          this.root = current.left;
          return this;
        } else {
// find the smallest Node in the right subtree 
          let min = current.right;
          let temp = min.left;
          while( temp.left !== null ){
            min = temp;
            temp = temp.left;
          }
          current = min;
          min = null;
        }
      }
    }
    return this;
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
tree.delete(10);