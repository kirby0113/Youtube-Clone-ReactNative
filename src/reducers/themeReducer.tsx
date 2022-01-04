import {ChangeTheme, ThemeReducerActions} from '../types/Reducer';

const initialState = false;

export const themeReducer = (
  state = initialState,
  action: ThemeReducerActions,
) => {
  if (action.type === ChangeTheme) {
    return action.payload;
  }
  return state;
};
