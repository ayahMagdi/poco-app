export const initialState = {
  basket: [],
  wishlist: [],
}

const reducer = (state , action) => {
  console.log(action)
  switch(action.type){
    case 'ADD_TO_BASKET':
      return{
        ...state, basket:[...state.basket , {...action.item , qty: 1}]
         , wishlist:state.wishlist.filter(e => e.id !== action.item.id)
      };
    case 'REMOVE_FROM_BASKET':
      return{
        ...state, basket:state.basket.filter(e => e.id !== action.item.id)
      };
      case 'ADD_TO_WISHLIST':
        return{
          ...state, wishlist:[...state.wishlist , action.wish]
          , basket: state.basket.filter(e => e.id !== action.wish.id)
        };
      default:
        return state
  };
}

export default reducer