import { ImageGalleryItem } from 'components/ImageGalleryItem/ImgaGalleryItem';
import PropTypes from 'prop-types';
import { Gallery } from './imageGallery.styled';

export const ImageGallery = ({ images, onOpenModal }) => {
  return (
    <Gallery>
      <ImageGalleryItem onOpenModal={onOpenModal} images={images} />
    </Gallery>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  onOpenModal: PropTypes.func.isRequired,
};
