import Product from '../../models/product';

export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const SET_PRODUCTS = 'SET_PRODUCTS';

export const fetchProducts = () => {
    return async dispatch => {
        //any async code you want
        try {
            const responce = await fetch(
                'https://shop-app-952c9.firebaseio.com/products.json',
            );

            if (!responce.ok) {
                throw new Error('Something went wrong.');
            }

            const resData = await responce.json();
            const loadedProducts = [];

            for (const key in resData) {
                loadedProducts.push(new Product(
                    key,
                    'u1',
                    resData[key].title,
                    resData[key].imageUrl,
                    resData[key].description,
                    resData[key].price
                ));
            }

            dispatch({
                type: SET_PRODUCTS,
                products: loadedProducts
            });
        } catch (err) {
            // send to custom analytics server
            throw err;
        }
    };
};

export const deleteProduct = productId => {
    return {
        type: DELETE_PRODUCT,
        pid: productId
    };
};

export const createProduct = (title, description, imageUrl, price) => {
    return async dispatch => {
        //any async code you want
        const responce = await fetch('https://shop-app-952c9.firebaseio.com/products.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                description,
                imageUrl,
                price
            })
        });

        const resData = await responce.json();

        dispatch({
            type: CREATE_PRODUCT,
            productData: {
                id: resData.name,
                title,
                description,
                imageUrl,
                price
            }
        });
    };
};

export const updateproduct = (id, title, description, imageUrl) => {
    return {
        type: UPDATE_PRODUCT,
        pid: id,
        productData: {
            title,
            description,
            imageUrl
        }
    };
};