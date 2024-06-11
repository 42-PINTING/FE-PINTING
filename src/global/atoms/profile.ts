import { atom } from 'recoil';

type BlockEmail = string;

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
