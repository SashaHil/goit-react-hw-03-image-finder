import PropTypes from 'prop-types';
import { ButtonComp } from './Button.styled';

export const Button = ({ onClick }) => {
  return (
    <ButtonComp type="button" onClick={() => onClick()}>
      Load More
    </ButtonComp>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
