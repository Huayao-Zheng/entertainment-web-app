import React from 'react';
import { BiSearch } from 'react-icons/bi';

export const Search = () => {
  return (
    <div className="flex gap-x-2 px-2 pt-6 lg:gap-x-6 lg:px-9 lg:pt-16">
      <BiSearch className="mt-1 h-6 w-6 text-text-color  transition duration-300 dark:text-d-text-color" />
      <input
        type="text"
        placeholder="Search for movies or TV series"
        className="w-full bg-transparent text-base font-light text-text-color caret-primary-color outline-none focus-visible:border-b focus-visible:border-b-greyishBlue dark:placeholder:text-[white]/50 lg:text-2xl"
      />
    </div>
  );
};
