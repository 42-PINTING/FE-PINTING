import image1 from '../_dummyImage/1.png';
import image2 from '../_dummyImage/2.png';
import image3 from '../_dummyImage/3.png';
import image4 from '../_dummyImage/4.jpeg';
import { Post } from './dataType';

export const DUMMY_DATA: Post[] = [
  {
    id: 1,
    image: image1,
    title: '첫번째 데모 이미지',
    time: '2024.9.11 13:00',
    hashTag: '#첫번째',
  },
  {
    id: 2,
    image: image2,
    title: '두번째 데모 이미지',
    time: '2024.9.11 13:00',
    hashTag: '#두번째',
  },
  {
    id: 3,
    image: image3,
    title: '세번째 데모 이미지',
    time: '2024.9.11 13:00',
    hashTag: '#세번째',
  },
  {
    id: 4,
    image: image4,
    title: '네번째 데모 이미지',
    time: '2024.9.11 13:00',
    hashTag: '#네번째',
  },
];
