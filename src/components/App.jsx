import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Layout } from './Layout/Layout';
import { SearchBar } from './Searchbar/Searchbar';
import { fetchImages } from 'api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    largeImage: '',
    tags: '',
    total: 0,
    error: null,
    loading: false,
    showModal: false,
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.fetchImages(query, page);
    }
  }

  fetchImages = async (query, page) => {
    try {
      this.setState({ loading: true });
      const data = await fetchImages(query, page);
      if (data.hits.length === 0) {
        return toast.error("We didn't find anything");
      }
      this.setState(({ images }) => ({
        images: [...images, ...data.hits],
        total: data.totalHits,
      }));
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ loading: false });
    }
  };

  handleSubmit = query => {
    this.setState({ query, page: 1, images: [] });
  };
  onOpenModal = (largeImage, tags) => {
    this.setState({ showModal: true, largeImage, tags });
  };

  onCloseModal = () => {
    this.setState({ showModal: false, largeImage: '', tags: '' });
  };

  onClickLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, loading, total, error, showModal, largeImage, tags } =
      this.state;

    const totalPage = total / images.length;

    return (
      <Layout>
        <SearchBar onSubmit={this.handleSubmit} />

        {error && (
          <p style={{ textAlign: 'center' }}>
            Something went wrong: ({error})!
          </p>
        )}

        {images.length !== 0 && (
          <ImageGallery onOpenModal={this.onOpenModal} images={images} />
        )}

        {loading && <Loader />}

        {totalPage > 1 && !loading && images.length !== 0 && (
          <Button onClick={this.onClickLoadMore} />
        )}

        {showModal && (
          <Modal
            largeImage={largeImage}
            tags={tags}
            onCloseModal={this.onCloseModal}
          />
        )}

        {error && <p>We didn't find anything</p>}
        <ToastContainer />
      </Layout>
    );
  }
}
