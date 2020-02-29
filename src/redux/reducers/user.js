export const userReducer = (state='Tom', action) =>{
  if(action.type === 'updateUser'){
    return action.payload;
  }
  return state;
}