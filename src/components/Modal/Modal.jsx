import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, OnModal } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleCloseEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleCloseEsc);
  }

  handleCloseEsc = e => {
    const { onCloseModal } = this.props;

    if (e.key === 'Escape') {
      onCloseModal();
    }
  };

  handleCloseBackdrop = e => {
    const { onCloseModal } = this.props;

    if (e.currentTarget === e.target) {
      onCloseModal();
    }
  };

  render() {
    const { largeImage, tags } = this.props;

    return createPortal(
      <Overlay onClick={this.handleCloseBackdrop}>
        <OnModal>
          <img src={largeImage} alt={tags} />
        </OnModal>
      </Overlay>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  largeImage: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
