import { atom } from 'recoil';

export interface TabType {
  name: string;
  component: React.ReactElement;
}

interface TabState {
  currentIdx: number;
  tabs: TabType[];
}

const tabState = atom<TabState>({
  key: 'tabState',
  default: { currentIdx: 0, tabs: [] },
});

export default tabState;
