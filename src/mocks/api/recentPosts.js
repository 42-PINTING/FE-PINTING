import { http, HttpResponse } from 'msw';
/*
type imageType = {
  id: number,
  author: string,
  width: number,
  height: nuber,
  url: string,
  download_url: string,
};
*/

let image;

axios
  .get('https://picsum.photos/v2/list?page=2&limit=100​')
  .then((response) => {
    image = JSON.parse(response.data);
  });

export const recentPosts = [
  http.post(
    `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/recentPosts`,
    ({ request }) => {
      const randomTestValue = Math.random() % 2;
      let statusName;

      if (!isValidateToken(request)) {
        statusName = 'tokenError';
      } else if (randomTestValue === 0) {
        statusName = 'empty';
      } else {
        statusName = 'goodPosts';
      }

      switch (statusName) {
        case 'tokenError':
          return new HttpResponse(null, {
            status: 401,
            statusText: 'token is not provided',
          });
        case 'empty':
          return new HttpResponse(null, {
            status: 200,
            statusText: 'empty',
          });
        case 'goodPosts':
          return new HttpResponse(getPost(), {
            status: 200,
            statusText: '30 posts are returned',
          });
        default:
          return new HttpResponse(JSON.stringify(posts), { status: 200 });
      }
    }
  ),
];

function isValidateToken(request) {
  return request.headers.get('Authorization') === '' ? false : true;
}

function getPost() {
  const now = new Date();
  const changeDate = new Date();
  const posts = [];

  posts.push({
    title: `title ${-1}`,
    image: ``,
    id: ``,
    content: `작성자는 없습니다.`,
    deleteDate: `${changeDate.setDate(now.getDate() - 3)}`,
    like: -1,
  });

  for (let i = 0; i < 30; i++) {
    posts.push({
      title: `title ${i}`,
      image: `${image[i].url}`,
      id: `${image[i].id}`,
      content: `작성자는 ${image[i].author}입니다.`,
      deleteDate: `${changeDate.setDate(now.getDate() + 3)}`,
      like: `${Math.floor(Math.random() * 100)}`,
    });
  }

  return posts;
}
