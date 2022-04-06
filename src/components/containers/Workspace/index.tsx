import React from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import * as Style from './styled';
import Icon from '../../widgets/Icon';
import { TabType } from '../../../hooks/useTabs';

interface WorkspaceProps {
  tabs: TabType[];
  currentTabIndex: number;
  changeTab: (idx: number) => void;
  dndTab: (startIdx: number, endIdx: number) => void;
}

function Workspace({ tabs, currentTabIndex, changeTab, dndTab }: WorkspaceProps) {
  const handleChange = (result: DropResult) => {
    if (!result.destination) return;
    dndTab(result.source.index, result.destination?.index);
  };

  return (
    <Style.Container>
      <DragDropContext onDragEnd={handleChange}>
        <Droppable droppableId="tabs" direction="horizontal">
          {(provided) => (
            <Style.TabList className="tabs" {...provided.droppableProps} ref={provided.innerRef}>
              {tabs.map((tab, idx) => (
                <Draggable key={tab.name} draggableId={tab.name} index={idx}>
                  {(provided) => (
                    <Style.TabItem
                      selected={currentTabIndex === idx}
                      onClick={() => changeTab(idx)}
                      ref={provided.innerRef}
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                    >
                      {tab.name}
                      <Style.IconWrapper>
                        <Icon icon="close" />
                      </Style.IconWrapper>
                    </Style.TabItem>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Style.TabList>
          )}
        </Droppable>
      </DragDropContext>
      {tabs.map((tab, idx) => (
        <Style.Workspace key={tab.name} selected={idx === currentTabIndex}>
          {tab.component}
        </Style.Workspace>
      ))}
    </Style.Container>
  );
}

export default Workspace;
