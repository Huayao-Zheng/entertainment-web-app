import React from 'react';
import { BiSearch } from 'react-icons/bi';

export const Search = () => {
  return (
    <div className="flex">
      <BiSearch className="h-8 w-8 text-text-color transition duration-300  dark:text-d-text-color" />
      <input
        type="text"
        placeholder="Search for movies or TV series"
        className="bg-transparent outline-none placeholder:text-[white]/50 focus-visible:border-b focus-visible:border-b-greyishBlue "
      />
    </div>
  );
};
