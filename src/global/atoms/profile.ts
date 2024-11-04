import { atom } from 'recoil';

type BlockEmail = string;

export type DetailPageProps = {
  id: string | undefined;
  title: string | undefined;
  image: string | undefined;
  time: string | undefined;
  hashTag: string | undefined;
};

export const detailPageState = atom<DetailPageProps>({
  key: 'detailPageState',
  default: {
    id: undefined,
    title: undefined,
    image: undefined,
    time: undefined,
    hashTag: undefined,
  },
});

export type ProfileProps = {
  email: string | undefined;
  nickname: string | undefined;
  image: string | undefined;
  permission: 'admin' | 'manager' | 'user' | 'block' | undefined;
  blockList: BlockEmail[];
};

export const profileState = atom<ProfileProps>({
  key: 'profileState',
  default: {
    email: undefined,
    nickname: undefined,
    image: undefined,
    permission: undefined,
    blockList: [],
  },
});
