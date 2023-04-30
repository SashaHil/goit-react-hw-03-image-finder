import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/?';

export const fetchImages = async (query, page) => {
  const options = {
    params: {
      q: query,
      key: '34416296-fda96b516d83885efe030181a',
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page: page,
      per_page: 12,
    },
  };
  try {
    const response = await axios.get(BASE_URL, options);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
