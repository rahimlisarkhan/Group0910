import { myAxios } from '../helpers/myAxios';

export async function getPostsData() {
  const response = await myAxios({
    method: 'GET',
    url: 'posts',
  });

  return response;
}

export async function addPostData(data) {
  const response = await myAxios({
    method: 'POST',
    url: 'posts',
    data,
  });

  return response;
}

export async function rmvPostData(id) {
  const response = await myAxios({
    method: 'DELETE',
    url: 'posts/' + id,
  });

  return response;
}
