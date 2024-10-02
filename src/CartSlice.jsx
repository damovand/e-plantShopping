import { createSlice } from '@reduxjs/toolkit';

const initialState= {
    items: [], // Initialize items as an empty array
   };
export const CartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    addItem: (state, action) => {
        const { name, image, cost } = action.payload;
        const existingItem = state.items.find(item => item.name === name);
        
        if (existingItem) {
		    existingItem.quantity++;
		} else {
		    state.items.push({ name, image, cost, quantity: 1 });
  		}
        console.log(state.items)
    },
    removeItem: (state, action) => {
      //  console.log ("Remove ", action.payload.name)
        state.items = state.items.filter(item => item.name !== action.payload.name);
    },
    updateQuantity: (state, action) => {
        const { name, quantity } = action.payload;
		const itemToUpdate = state.items.find(item => item.name === name);
		if (itemToUpdate) {
		  itemToUpdate.quantity = quantity;
		}
    },
    incrementQuantity: (state, action) => {
        const itemToIncrease = state.items.find(item => item.name === action.payload.name);
        
        if (itemToIncrease) {
          itemToIncrease.quantity++;
        }
       // console.log ("Done increase  ", itemToIncrease.quantity);
    },
    decrementQuantity: (state, action) => {
        const itemToDecrease = state.items.find(item => item.name === action.payload.name);
        
        if (itemToDecrease) {
          itemToDecrease.quantity -= 1;
        }
    },
    
}
});

export const { addItem, removeItem, updateQuantity, incrementQuantity, decrementQuantity } = CartSlice.actions;

export default CartSlice.reducer;
