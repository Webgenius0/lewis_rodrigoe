import PropTypes from 'prop-types';

const Title = ({ title }) => {
  return (
    <>
      <h2 className="text-[#0E0F11] text-center font-[Manrope] text-[48px] not-italic font-bold leading-[63.36px] tracking-[-0.48px]">
        {title}
      </h2>
    </>
  );
};

// Adding PropTypes for title text
Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
