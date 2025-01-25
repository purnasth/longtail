import React from 'react';

interface TitleProps {
  title?: string;
  subtitle?: string;
  description?: string;
  align?: string;
}

const Title: React.FC<TitleProps> = ({
  title,
  subtitle,
  description,
  align = 'center',
}) => {
  return (
    <>
      <div
        className={`mx-auto mb-8 mt-16 flex max-w-2xl flex-col items-${align} justify-${align} gap-4 text-${align} md:mb-20 md:mt-0`}
      >
        <span className="text-base w-fit border px-4 py-1 rounded-full uppercase tracking-wider">{subtitle}</span>
        <h3 className="text-3xl capitalize leading-snug sm:text-3xl md:text-4xl lg:text-6xl lg:leading-snug">
          {title}
        </h3>
        <p className={`max-w-lg text-sm text-${align} text-dark/60`}>
          {description}
        </p>
      </div>
    </>
  );
};

export default Title;
