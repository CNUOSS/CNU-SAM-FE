import React, { ForwardRefExoticComponent, LegacyRef, RefAttributes } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';

interface DnDProps {
  /* list component for rendering */
  ListComponent: ForwardRefExoticComponent<
    Pick<any, string | number | symbol> & RefAttributes<LegacyRef<HTMLUListElement>>
  >;
  /* item component for rendering */
  ItemComponent: ForwardRefExoticComponent<
    Pick<any, string | number | symbol> & RefAttributes<LegacyRef<HTMLLIElement>>
  >;
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

export const TAB_NAME_ATTR = 'data-rbd-draggable-id';

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
          <ListComponent
            className="tabs"
            {...provided.droppableProps}
            ref={provided.innerRef as React.Ref<React.LegacyRef<HTMLUListElement>>}
          >
            {items.map((item, idx) => (
              <Draggable key={item} draggableId={item} index={idx}>
                {(provided) => (
                  <ItemComponent
                    data-testid="dnd-item"
                    onClick={() => clickItem(idx)}
                    ref={provided.innerRef as React.Ref<React.LegacyRef<HTMLLIElement>>}
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
