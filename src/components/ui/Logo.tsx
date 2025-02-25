import { Link } from 'react-router-dom';
import useFetchAPI from '../../hooks/useFetchAPI';

interface LogoProps {
  aprops?: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ aprops, className }) => {
//   const apiUrl = import.meta.env.VITE_API_URL;

  const {
    data: siteRegulars,
    isLoading,
    isError,
  } = useFetchAPI('siteRegulars', `/api/siteRegulars.json`);

  if (isLoading) return null;
  if (isError) {
    console.error(isError);
    return null;
  }

  const { logo_upload, sitetitle } = siteRegulars;

  const handleClick = () => {
    // window.scrollTo({ top: 0});
    window.scrollTo(0, 0);
  };

  return (
    <Link
      to="/"
      className={aprops ? aprops : 'cursor-pointer'}
      aria-label={sitetitle}
      title={sitetitle}
      onClick={handleClick}
    >
      <img
        src={logo_upload}
        alt={`${sitetitle} Logo`}
        className={`${className}`}
      />
    </Link>
  );
};

export default Logo;
