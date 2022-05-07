type Props = {
  text: string;
  className?: string;
};

export const Title = ({ text, className }: Props) => {
  return (
    <h1
      className={`mb-4 pl-4 text-xl font-light text-[black] transition duration-300 dark:text-d-text-color md:mb-6 md:text-4xl ${className}`}
    >
      {text}
    </h1>
  );
};
