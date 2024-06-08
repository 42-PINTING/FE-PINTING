import { http, HttpResponse } from 'msw';

export const profile = [
  http.post(`${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/me`, ({ request }) => {
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

    console.log('mock accessToken', request.headers.get('authorization'));
    console.log('mock email:', request.body);

    return new HttpResponse(JSON.stringify(profile), { status: 200 });
  }),
];
