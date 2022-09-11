import React, { useCallback } from 'react';

import { useModalDispatch, useModalState } from './ModalContext';
import Modal from '../components/widgets/Modal';

const ModalGlobal = () => {
  const dispatch = useModalDispatch();
  const state = useModalState();

  const { ModalComponent, targetId } = state;
  const closeModal = useCallback(() => {
    if (state.closeModal) state.closeModal();
    dispatch({ type: 'CLOSE_MODAL' });
  }, [dispatch, state]);

  return (
    <Modal isOpen={state.isModalOpen} closeModal={closeModal}>
      {ModalComponent && <ModalComponent targetId={targetId} closeModal={closeModal} onConfirm={state.onConfirm} />}
    </Modal>
  );
};

export default ModalGlobal;
