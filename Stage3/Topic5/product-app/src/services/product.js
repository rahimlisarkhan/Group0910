import { fetcher } from '../common/helpers/fetcher';

export async function getProductData() {
  try {
    const response = await fetcher({
      method: 'GET',
      url: 'posts',
    });

    return response.data;
  } catch (err) {
    console.log('err', err);
  }
}

export async function addProductData(data) {
  try {
    const response = await fetcher({
      method: 'POST',
      url: 'posts',
      data,
    });

    return response.data;
  } catch (err) {
    console.log('err', err);
  }
}

export async function uptProductData(id, data) {
  try {
    const response = await fetcher({
      method: 'PUT',
      url: 'posts/' + id,
      data,
    });

    return response.data;
  } catch (err) {
    console.log('err', err);
  }
}

export async function rmvProductData(id) {
  try {
    const response = await fetcher({
      method: 'DELETE',
      url: 'posts/' + id,
    });

    return response.data;
  } catch (err) {
    console.log('err', err);
  }
}
