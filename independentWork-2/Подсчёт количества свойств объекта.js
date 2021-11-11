let user = {
  name: 'John',
  age: 30
};

function count(obj){
  return Object.values(obj).length;
}

alert( count(user) ); // 2