import Image from 'react-bootstrap/Image';
import PropTypes from 'prop-types';

export const ContactSection = ({ fullName, role }) => {
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

ContactSection.propTypes = {
  fullName: PropTypes.string,
  role: PropTypes.string,
};

ContactSection.defaultProps = {
  fullName: 'hector olea',
  role: 'full stack developer',
};
