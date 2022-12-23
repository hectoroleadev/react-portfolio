import React from 'react';
import Image from 'react-bootstrap/Image';

const ContactSection = ({
  fullName = 'Hector Olea',
  role = 'Full stack developer',
}) => {
  return (
    <section>
      <Image
        className='rounded-5 mb-4'
        src='images/hector-olea.jpg'
        width='150'
        height='150'
        alt={fullName}
      />
      <h1 className='fw-bold'>{fullName}</h1>
      <h2 className='mb-4'>{role}</h2>
    </section>
  );
};

export default ContactSection;
