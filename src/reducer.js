export const initialState = {
    basket: [],
    user: null,
};

export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);


const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };
        case 'Add_To_Basket':
            // Logic for adding item to Cart
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case 'Remove_From_Basket':
            //Logic for removing item from Cart
            let newBasket = [...state.basket];

            const i = state.basket.findIndex((basketItem) => basketItem.id ===action.id);

            if(i>=0) {
                newBasket.splice(i, 1);
            }

            return {...state, basket: newBasket};
            break;
        default: 
            return state;
    }
}

export default reducer;