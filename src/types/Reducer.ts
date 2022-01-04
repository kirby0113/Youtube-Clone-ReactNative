/* Card */

import {CardProps} from '../types/Cards';

export const Add = 'Add' as const;

const add = (payload: CardProps) => ({
  type: Add,
  payload,
});

export type CardReducerActions = ReturnType<typeof add>;

/* Theme */

export const ChangeTheme = 'change_theme' as const;

export const changeTheme = (payload: boolean) => ({
  type: ChangeTheme,
  payload,
});

export type ThemeReducerActions = ReturnType<typeof changeTheme>;
