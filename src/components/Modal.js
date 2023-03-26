function Modal({ closeModal, deleteTodo, text }) {
  return (
    <div className='modal'>
      <p>Are you sure?</p>
      <button className='btn btn--alt' onClick={closeModal}>
        Cancel
      </button>
      <button className='btn' onClick={() => deleteTodo(text)}>
        Confirm
      </button>
    </div>
  );
}
export default Modal;
