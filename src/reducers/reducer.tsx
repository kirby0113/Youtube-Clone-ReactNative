import {CardReducerActions, Add} from '../types/Reducer';
import {CardProps} from '../types/Cards';
const initialState: CardProps[] = [];

export const reducer = (state = initialState, action: CardReducerActions) => {
  if (action.type === Add) {
    return action.payload;
  }
  return state;
};
