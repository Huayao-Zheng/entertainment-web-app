import { atom } from 'recoil';

export const isHeadState = atom({
  key: 'isHead',
  default: true,
});

export const isTailState = atom({
  key: 'isTail',
  default: false,
});
