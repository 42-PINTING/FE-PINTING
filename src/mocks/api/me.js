import { http, HttpResponse } from 'msw';

export const profile = [
  http.post(`${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/me`, ({ request }) => {
    const token = request.headers.get('Authorization');

    if (token === '') {
      return new HttpResponse(null, {
        status: 401,
        statusText: 'token is not provided',
      });
    }

    console.log('mock token:', token);

    const profile = {
      email: 'juha@student.42seoul.kr',
      nickname: 'juha',
      image: 'https://cdn.intra.42.fr/users/juha.jpg',
      permission: 'user',
      blockList: [
        {
          email: 'test@naver.com',
        },
        {
          email: 'test@gmail.com',
        },
      ],
    };

    return new HttpResponse(JSON.stringify(profile), { status: 200 });
  }),
];
