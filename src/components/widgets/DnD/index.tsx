import React from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';

interface DnDProps {
  /* list component for rendering */
  ListComponent: (props: any) => JSX.Element;
  /* item component for rendering */
  ItemComponent: (props: any) => JSX.Element;
  /* list sort direction */
  direction?: 'horizontal' | 'vertical';
  /* items for rendering */
  items: string[];
  /* selected tab index */
  selectedIndex?: number;
  /* drang end event handler */
  onDragEnd: (result: DropResult) => void;
  /* click item event handler */
  clickItem: (idx: number) => void;
}

function DnD({
  ListComponent,
  ItemComponent,
  direction = 'horizontal',
  items,
  selectedIndex = -1,
  onDragEnd,
  clickItem,
}: DnDProps) {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="dnd" direction={direction}>
        {(provided) => (
          <ListComponent className="tabs" {...provided.droppableProps} refs={provided.innerRef}>
            {items.map((item, idx) => (
              <Draggable key={item} draggableId={item} index={idx}>
                {(provided) => (
                  <ItemComponent
                    data-testid="dnd-item"
                    onClick={() => clickItem(idx)}
                    refs={provided.innerRef}
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                    selected={selectedIndex === idx}
                  >
                    {item}
                  </ItemComponent>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ListComponent>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default DnD;
