import { http, HttpResponse } from 'msw';

/*--------------------login token------------------------------*/
export const loginToken = [
  http.post(`${process.env.NEXT_PUBLIC_SERVER_LOGIN_ENDPOINT}`, () => {
    return HttpResponse.json({
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdG5hbWUiOiJnb29kIiwibGFzdE5hbWUiOiJqb2IifQ.fP9YiSYoHl25-zlAxrAlgFqBn1cz4IFVFFMtpKNRk0A',
    });
  }),
];

/*--------------------random img------------------------------*/
export const randomeImage = [
  http.post(`${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/login`, () => {
    return HttpResponse.json({
      token: `${fetchRandomImage().then((data) => data.avatar_url)}`,
    });
  }),
];

async function fetchRandomImage() {
  const response = await fetch('https://api.github.com/users/octocat');
  const data = await response.json();
  return data;
}
