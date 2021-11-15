export const processCartData = (cartData) => {
  //TODO: Нужно добавить поле discount(oldPrice - price)
  // убрать поле oldPrice
  cartData.map(item=>{
    const disc = item.oldPrice-item.price;
    (disc>0)&&(item.discount=disc);
   return delete item.oldPrice;
  });
  return cartData;
};

export const makeCartItemCopy = (cartItem) => {
  //TODO: сделать копию элемента "Пицца с анчоусами"
  // После увеличить кол-во добавленного ингредиента

  function deepClone(obj){
    let clone={};
    for (let prop in obj){
      if(typeof obj[prop]==='object'){
        clone[prop]=deepClone(obj[prop]);
      } else
      clone[prop]=obj[prop];
    }
    return clone;
  }

  function getNewId(arr){
    return cartItem.reduce((max,cur)=>Math.max(max,cur.id),0)+1;
  }

const foundItem = cartItem.find(item=>item.name==='Пицца с анчоусами');
const clone = deepClone(foundItem);
clone.id=`${getNewId(cartItem)}`;
clone.addedIngredients[0].count+=1;
clone.count+=1;
cartItem.push(clone);
return clone;
};

export const calcSum = (cartData) => {
  //TODO: посчитать суммы по типам товаров и их цены
  function sum(arr,prop){
    return arr.reduce((sum,current)=>sum+current[prop],0)
  }
  function filter(str){
    return cartData.filter(i=>i.type===`${str}`)
  }
  const waterArr = filter('water');
  const pizzaArr = filter('pizza');
  const otherArr = filter('other');
  return {
    total: { 
      count: sum(cartData,'count'), 
      sum: sum(cartData,'price'), 
    },
    water: { 
      count: sum(waterArr,'count'), 
      sum: sum(waterArr,'price') 
    },
    pizza: { 
      count: sum(pizzaArr,'count'), 
      sum: sum(pizzaArr,'price') },
    other: { 
      count: sum(otherArr,'count'), 
      sum: sum(otherArr,'price') }
  };
};

export const getCartItemsByDate = (cartData, date) => {
  //TODO: выбрать покупки сделанные за выбранную дату
  const filteredOrders = cartData.filter(i=>Date.parse(i.date)===Date.parse(date));
 return filteredOrders.length?filteredOrders:cartData;
};

export const repeatOrder = (cartData, date) => {
  //TODO: нужно повторить заказ за выбранную дату
  // дублиовать соответствующие элементы
  // поставить в начало спиcка
  // дату текущую
  // поменять id на уникальный
  const orders = getCartItemsByDate(cartData,date);
  let maxId = cartData.reduce((max,cur)=>Math.max(max,cur.id),0);
  for(let order of orders ){
    const clone = Object.assign({},order)
    //let date = 
    clone.date=new Date().toISOString();
    clone.id=`${++maxId}`;
    cartData.unshift(clone);
  }

  return cartData;
};

export const addItem = (cartData, item) => {
  //TODO: увеличить кол-во товара в полученном элементе
  cartData.find(i=>i.id===item.id).count+=1;
  return cartData;
};

export const checkPromo = (cartData) => {
  //TODO: нужно проверить корзина подходит под правила промоакции
  // проверить что суммарно в корзине больше 1000р
  // что есть пункт больше чем на 500р
  // что нет скидочных товаров
const total = cartData.reduce((sum,cur)=>sum+cur.price,0);
const oneBigPosition = cartData.find(i=>(i.price*i.count)>500);
const discounted = cartData.find(i=>'discount' in i);
  return {
    total: total>1000,
    oneBigPosition: oneBigPosition,
    notDiscounted: discounted
  };
};
