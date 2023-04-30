import PropTypes from 'prop-types';
import { GalleryItemImage, ImageItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ images, onOpenModal }) => {
  return (
    <>
      {images.map(({ id, webformatURL, tags, largeImageURL }) => (
        <ImageItem key={id}>
          <GalleryItemImage
            loading="lazy"
            src={webformatURL}
            alt={tags}
            onClick={() => onOpenModal(largeImageURL, tags)}
          />
        </ImageItem>
      ))}
    </>
  );
};

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};
