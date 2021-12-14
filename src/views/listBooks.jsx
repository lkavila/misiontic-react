import React, { useState, useEffect } from "react";
import Table from "../components/Table";
import { get, post, httpDelete } from "../api/node-backend/http";

const ListBooksView = () => {
  const [authors, setAuthors] = useState([])
  const [books, setBooks] = useState([])
  const [doRequest, setDoRequest] = useState(true);

  useEffect(() => {
    console.log("leyendo usuarios")
    get("users").then((data) => {
      setAuthors(data.authors);
    });
  }, []);


  useEffect(() => {
    if (doRequest) {
      console.log("leyendo libros");
      setTimeout(() => {
        get("books").then((data) => {
          setBooks(data.books);
        });
      }, 10);
      setDoRequest(false);
    }
  }, [doRequest]);

  const handleClick = (id) => {
    if (window.confirm('Está seguro que desea eliminar este libro?')) {
      console.log("Eliminar libro con id:", id);
      httpDelete(`books/${id}`, {});
      setDoRequest(true);
    }
  }
  const rows = books.map((book) => {
    return (<tr key={book._id}>
      <td>{book.name}</td>
      <td>{book.published_date}</td>
      <td>{book.author.name}</td>
      <td><button type="button" className="btn btn-danger" onClick={() => handleClick(book._id)} >Eliminar</button></td>
    </tr>
    );
  });

  const columns = ["book name", "published date", "author", "actions"];
  const columnsTable = columns.map((column) => <th scope="col" key={column}>{column}</th>);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    // reference by form input's `name` tag
    const book = {
      name: data.get("bookName"),
      published_date: data.get("date"),
      author: data.get("author"),

    }
    post("books", book);
    setDoRequest(true);
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
            {authors.map((author) => <option key={author._id} value={author._id}>{author.name}</option>)}
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
