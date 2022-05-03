import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';

type Props = {
  placeholderText: string;
};

export const Search = ({ placeholderText }: Props) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log('submitted');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-x-4 px-8 pt-6 lg:gap-x-6 lg:px-9 lg:pt-8 sm:px-5"
    >
      <BiSearch className="h-6 w-6 text-text-color  transition duration-300 dark:text-d-text-color" />

      <input
        onChange={(e) => setSearchTerm(e.target.value)}
        type="text"
        placeholder={placeholderText}
        className="w-full cursor-pointer border-b border-b-transparent bg-transparent py-3 text-base font-light text-darkBlue caret-primary-color outline-none focus-visible:border-b-greyishBlue dark:text-d-text-color dark:placeholder:text-[white]/50 lg:text-2xl"
      />
    </form>
  );
};
