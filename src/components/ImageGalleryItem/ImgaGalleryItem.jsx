import PropTypes from 'prop-types';
import { GalleryItemImage, ImageItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ images, onOpenModal }) => {
  return (
    <>
      {images.map(({ id, webformatURL, tags, largeImageURL }) => (
        <ImageItem key={id} onClick={() => onOpenModal(largeImageURL, tags)}>
          <GalleryItemImage loading="lazy" src={webformatURL} alt={tags} />
        </ImageItem>
      ))}
    </>
  );
};

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onOpenModal: PropTypes.func.isRequired,
};
