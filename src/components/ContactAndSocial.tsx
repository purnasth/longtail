import React from 'react';
import { Link } from 'react-router-dom';

import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { TbBrandFacebook } from 'react-icons/tb';
import useFetchAPI from '../hooks/useFetchAPI';

const iconMap = {
  FaFacebookF,
  AiFillInstagram,
  FaXTwitter,
  FaLinkedinIn,
  TbBrandFacebook,
  FaYoutube,
};

interface ContactDetail {
  link: string;
  title: string;
}

interface ContactInfo {
  id: string;
  type: string;
  icon: keyof typeof iconMap | null;
  image: string | null;
  details: ContactDetail[];
}

const ContactAndSocial: React.FC = () => {
  const {
    data: contactInfo = [],
    isLoading,
    isError,
  } = useFetchAPI('contactInfo', '/api/contactInfo.json');

  if (isLoading) return null;
  if (isError) {
    console.error(isError);
    return null;
  }
  return (
    <>
      <ul className="flex flex-col gap-1">
        {contactInfo
          .filter((item: ContactInfo) => item.type !== 'social')
          .map((item: ContactInfo) => (
            <li key={item.id}>
              {item.details.map((detail, index) => (
                <React.Fragment key={index}>
                  <a
                    key={index}
                    href={detail.link}
                    className="transition-300 mb-2 inline-block text-sm font-medium hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={detail.title}
                  >
                    {detail.title}
                  </a>
                  {index < item.details.length - 1 && <span>, </span>}
                </React.Fragment>
              ))}
            </li>
          ))}
      </ul>

      <ul className="mt-5 flex gap-4">
        {contactInfo
          .filter((item:ContactInfo) => item.type === 'social')
          .map((item:ContactInfo) => {
            const IconComponent = item.icon ? iconMap[item.icon] : null;

            return (
              <li key={item.id} className="group">
                {item.details.map((detail, index) => (
                  <Link
                    key={index}
                    to={detail.link}
                    rel="noreferrer noopener"
                    target="_blank"
                    className="size-9"
                  >
                    {IconComponent ? (
                      <IconComponent className="group-hover:border-logo-green group-hover:bg-logo-green size-9 rounded-full border border-dark/30 p-2 text-base text-dark transition-all duration-200 ease-linear group-hover:text-light" />
                    ) : item.image ? (
                      <img
                        src={item.image}
                        alt={item.id}
                        className="group-hover:border-logo-green group-hover:bg-logo-green size-9 rounded-full border border-dark/30 object-contain p-2 transition-all duration-200 ease-linear group-hover:text-light"
                      />
                    ) : null}
                  </Link>
                ))}
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default ContactAndSocial;
