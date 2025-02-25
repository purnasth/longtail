import logo from '../../assets/icon.svg';

const LogoBar = () => {
  return (
    <div className="relative flex items-center justify-center">
      <span className="before:absolute before:left-0 before:h-[1px] before:w-[42%] before:bg-dark/20 before:content-[''] after:absolute after:right-0 after:h-[1px] after:w-[42%] after:bg-dark/20 after:content-[''] md:before:w-[47%] md:after:w-[47%]"></span>
      <img
        src={logo}
        alt="Icon"
        className="z-10 size-8 object-contain md:size-14"
      />
    </div>
  );
};

export default LogoBar;
