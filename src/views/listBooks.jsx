import React, { useState } from "react";
import Table from "../components/Table";

const ListBooksView = () => {
  const [books, setBooks] = useState([])

  const rows = books.map((book) => {
    return (
      <tr key={book._id}>
        <td>{book.name}</td>
        <td>{book.published_date}</td>
        <td>{book.author.name}</td>
      </tr>
    );
  });

  const columns = ["book name", "publication date", "author"];
  const columnsTable = columns.map((column) => <th scope="col" key={column}>{column}</th>);

  const handleSubmit = (event) => {
    event.preventDefault();
    //const data = new FormData(event.target);
    // data.get reference by form input's `name` tag
  }

  return (
    <div>

      <form name="booksForm" className="m-5" onSubmit={handleSubmit}>
        <h2>Crear libro</h2>
        <div className="mb-1">
          <label htmlFor="bookName" className="form-label">Nombre del libro</label>
          <input type="text" className="form-control" id="bookName" name="bookName" />
        </div>

        <div className="mb-1">
          <label htmlFor="date" className="form-label">Fecha de publicación</label>
          <input type="text" className="form-control" id="date" name="date" />
        </div>

        <div className="mb-1">
          <label className="form-label" htmlFor="author">Selecciona el autor</label>
          <select className="form-select" id="author" name="author">
            <option value="1">One</option>

          </select>
        </div>
        <br />
        <button type="submit" className="btn btn-primary">Crear</button>
      </form>

      <div name="users-table" className="m-5">
        <h2>Lista de libros</h2>
        <Table rows={rows} columns={columnsTable} />
      </div>

    </div>
  );
}

export default ListBooksView;
