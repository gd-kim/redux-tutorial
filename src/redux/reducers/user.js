export const userReducer = (state='', action) =>{
  if(action.type === 'updateUser'){
    return action.payload;
  }
  return state;
}