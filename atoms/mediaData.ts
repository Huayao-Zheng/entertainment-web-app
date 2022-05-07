import { atom } from 'recoil';

export const bookmarkedIds = atom({
  key: 'bookmarkedIds',
  default: [],
});
