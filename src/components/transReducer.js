const TransReducer = ((state, action) => {
        switch (action.type) {
          case "ADD_TRANSACTION": {
            return [action.payload, ...state];
          }
          case 'DELETE_ITEM':{
              let arr = [...state]
              arr.splice(action.payload.id,1)
              state = arr
              return state
          }
          default:
            return state
        }
      });

export default TransReducer;
