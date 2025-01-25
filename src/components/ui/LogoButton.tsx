import React from 'react';
import fire from '../../assets/icon.svg';
import { Link } from 'react-router-dom';

interface LogoButtonProps {
  value: string;
  router: string;
}

const LogoButton: React.FC<LogoButtonProps> = ({ value, router }) => {
  return (
    <>
      <Link
        to={router}
        className="transition-300 group flex w-fit items-center justify-center gap-2 rounded-full border border-dark/30 bg-white px-6 py-3 text-sm font-semibold capitalize hover:bg-light hover:shadow md:text-base"
      >
        <img
          src={fire}
          alt="Fire"
          className="transition-300 size-6 scale-75 object-contain group-hover:scale-100 group-hover:filter-none"
        />
        {value}
        <img
          src={fire}
          alt="Fire"
          className="transition-300 size-6 scale-75 object-contain group-hover:scale-100 group-hover:filter-none"
        />
      </Link>
    </>
  );
};

export default LogoButton;
