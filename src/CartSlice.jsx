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
        console.log("Add Item   ", name, cost )
           
        const existingItem = state.items.find(item => item.name === name);
        
        if (existingItem) {
		    existingItem.quantity++;
		} else {
		    state.items.push({ name, image, cost, quantity: 1 });
  		}
        console.log(state.items)
    },
    removeItem: (state, action) => {
        state.items = state.items.filter(item => item.name !== action.payload);
    },
    updateQuantity: (state, action) => {
        const { name, quantity } = action.payload;
        console.log ("Add to quantity by  ", quantity)
		const itemToUpdate = state.items.find(item => item.name === name);
		if (itemToUpdate) {
		  itemToUpdate.quantity = quantity;
          console.log ("Update done quanityt = ",itemToUpdate.quantity)
		}
    },
    incrementQuantity: (state, action) => {
        const itemToIncrease = state.items.find(item => item.name === action.payload);
        if (itemToIncrease) {
          itemToIncrease.quantity += 1;
        }
    },
    decrementQuantity: (state, action) => {
        const itemToDecrease = state.items.find(item => item.name === action.payload);
        if (itemToDecrease) {
          itemToDecrease.quantity -= 1;
        }
    },
    
}
});

export const { addItem, removeItem, updateQuantity, incrementQuantity, decrementQuantity } = CartSlice.actions;

export default CartSlice.reducer;
