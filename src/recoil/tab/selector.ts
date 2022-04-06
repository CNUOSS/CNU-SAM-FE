import { selector } from 'recoil';
import { tabState } from '.';

const tabSelector = selector({
  key: 'todoListStatsState',
  get: ({ get }) => {
    const { tabs } = get(tabState);
    const tabNames = tabs.map((tab) => tab.name);

    return { tabNames };
  },
});

export default tabSelector;
