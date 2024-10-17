import { http, HttpResponse } from 'msw';

export const posts = [
  http.post(
    `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/posts`,
    ({ request }) => {
      const token = request.headers.get('Authorization');

      if (token === null) {
        return new HttpResponse(null, {
          status: 401,
          statusText: 'token is not provided',
        });
      }

      const profile = {
        posts: [
          {
            id: 3,
            author_name: '주하',
            title: '테스트 제목',
            img: '/img/test.jpg',
            content: '테스트를 위한 컨텍스트',
            likeCount: 123,
            view: 10,
            tag: ['일상', '그림'],
            createdDate: '2024-06-14T11:56:59.263705',
            updatedDate: '2024-06-14T11:56:59.263705',
          },
        ],
      };

      return new HttpResponse(JSON.stringify(profile), { status: 200 });
    }
  ),
];
