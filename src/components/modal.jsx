import React from "react"
import Modal from 'react-bootstrap/Modal'

const ModalComponent = ({ book, show, setShow, authors, handleUpdate }) => {

  const handleSubmit = (event) => {
    setShow(false);
    handleUpdate(event);
  }
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Actualizar libro</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form name="booksUpdateForm" className="m-5" onSubmit={handleSubmit}>
          <div className="mb-1">
            <label htmlFor="bookName" className="form-label">Nombre del libro</label>
            <input type="text" className="form-control" id="bookName" name="bookName" defaultValue={book.name} />
          </div>

          <div className="mb-1">
            <label htmlFor="date" className="form-label">Fecha de publicación</label>
            <input type="text" className="form-control" id="date" name="date" defaultValue={book.published_date} />
          </div>

          <div className="mb-1">
            <label className="form-label" htmlFor="author">Selecciona el autor</label>
            <select className="form-select" id="author" name="author">
              {authors.map((author) => <option key={author._id} value={author._id}>{author.name}</option>)}
            </select>
          </div>
          <br />

          <input type="hidden" value={book._id} name="bookId"></input>
          <button type="submit" className="btn btn-primary">
            Guardar cambios
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default ModalComponent;