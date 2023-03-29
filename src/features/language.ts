import { createStore } from "redux";

const initialState = {
  language: 'pt',
};

function reducer(state = initialState, action : any) {
  switch (action.type) {
    case "language/change": {
      return {
        ...state,
        language: state.language == 'pt' ? 'en' : 'pt'
      };
    }    
    default:
      return state;
  }
}

export const store = createStore(reducer);