import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import Workspace from '.';
import { render, screen, fireEvent } from '../../../libs/rtl-utils';
import { tabState } from '../../../recoil/tab';
import { TabState } from '../../../recoil/tab/atom';

const onChange = jest.fn();
const tabs = ['tab1', 'tab2'];

const RecoilObserver = ({ node, onChange }: any) => {
  const [value, setValue] = useRecoilState<TabState>(node);
  useEffect(() => onChange(value), [value]);
  useEffect(() => {
    setValue((prev) => ({
      ...prev,
      tabs: tabs.map((tab) => ({ name: tab, component: <div data-testid="tab">{tab}</div> })),
    }));
  }, []);
  return null;
};

const renderApp = () =>
  render(
    <>
      <RecoilObserver node={tabState} onChange={onChange} />
      <Workspace />
    </>
  );

beforeEach(() => {
  onChange.mockClear();
});

describe('Container/Workspace', () => {
  it('rendering test', () => {
    renderApp();

    const tabNames = screen.getAllByTestId('tab').map((dom) => dom.textContent);
    expect(tabNames).toEqual(tabs);
  });

  it('change tab', () => {
    renderApp();

    const tabs = screen.getAllByTestId('dnd-item');
    fireEvent.click(tabs[1]);
    expect(onChange).toBeCalledTimes(3);
  });
});
