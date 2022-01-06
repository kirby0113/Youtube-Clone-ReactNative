import {AnyAction} from 'redux';
/* Card */

import {CardProps} from '../types/Cards';

export const Add = 'Add' as const;

const add = (payload: CardProps) => ({
  type: Add,
  payload,
});

export type CardReducerActions = ReturnType<typeof add> | AnyAction; //修正の余地あり（できればAnyAction使いたくない）

/* Theme */

export const ChangeTheme = 'change_theme' as const;

export const changeTheme = (payload: boolean) => ({
  type: ChangeTheme,
  payload,
});

export type ThemeReducerActions = ReturnType<typeof changeTheme> | AnyAction; //修正の余地あり
