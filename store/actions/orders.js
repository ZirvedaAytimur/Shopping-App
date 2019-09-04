export const ADD_ORDER = 'ADD_ORDER';

export const addOrder = (cartItems, totalAmount) => {
  return async dispatch => {
    const date = new Date();
    const responce = await fetch('https://shop-app-952c9.firebaseio.com/orders/u1.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        cartItems,
        totalAmount,
        date: date.toISOString()
      })
    });

    if (!responce.ok) {
      throw new Error('Something went wrong.');
    }

    const resData = await responce.json();

    dispatch({
      type: ADD_ORDER,
      orderData: {
        id: resData.name,
        items: cartItems,
        amount: totalAmount,
        date: date
      }
    });
  };
};
