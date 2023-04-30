import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { GalleryItemImage } from 'components/ImageGalleryItem/ImageGalleryItem.styled';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#modal-root');

export const ImageModal = ({ isOpen, onCloseModal, image, tags }) => {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onCloseModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <GalleryItemImage loading="lazy" src={image} alt={tags} />
      </Modal>
    </div>
  );
};

ImageModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  // image: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
