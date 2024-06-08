import { http, HttpResponse } from 'msw';

// 정상적으로 보내는 지 확인하기
/*
  profile
  email: string | undefined;
  nickname: string | undefined;
  image: string | undefined;
  permission: 'admin' | 'manager' | 'user' | 'block' | undefined;
  blockList: BlockEmail[];
*/
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
