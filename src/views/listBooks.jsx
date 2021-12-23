import React, { useState, useEffect } from "react";
import Table from "../components/Table";
import { get, post, httpDelete, put } from "../api/node-misiontic/http";
import ModalComponent from "../components/modal";

const ListBooksView = () => {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [doRequest, setDoRequest] = useState(true);
  const [show, setShow] = useState(false);
  const [selectedBook, setSelectedBook] = useState({})

  useEffect(() => {
    console.log("leyendo users");
    get("users").then((data) => {
      setAuthors(data.authors);
    })
  }, []);


  useEffect(() => {
    if (doRequest) {
      setTimeout(() => {
        console.log("leyendo libros");
        get("books").then((data) => {
          setBooks(data.books);
          setDoRequest(false)
        });
      }, 20)

    }
  }, [doRequest]);

  const handleDelete = (id) => {
    if (window.confirm("¿Seguro que desea eliminar este libro?")) {
      console.log("Delete book with id:", id)
      httpDelete(`books/${id}`);
      setDoRequest(true);
    }
  }
  const rows = books.map((book) => {
    return (
      <tr key={book._id}>
        <td>{book.name}</td>
        <td>{book.published_date}</td>
        <td>{book.author.name}</td>
        <td>
          <div className="flex justify-content-between">
            <button type="button" className="btn btn-danger" onClick={() => handleDelete(book._id)} >Eliminar</button>

            <button type="button" className="btn btn-outline-warning" onClick={() => {
              setSelectedBook(book);
              setShow(true);
            }} >Editar</button>
          </div>

        </td>
      </tr>
    );
  });

  const columns = ["Book name", "Publication date", "Author", "Actions"];
  const columnsTable = columns.map((column) => <th scope="col" key={column}>{column}</th>);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    // data.get reference by form input's `name` tag
    const book = {
      name: data.get("bookName"),
      published_date: data.get("date"),
      author: data.get("author")
    }
    post("books", book);
    setDoRequest(true);
  }

  const handleUpdate = (event) => {
    event.preventDefault();
    console.log("actualizando libro")
    const data = new FormData(event.target);
    // data.get reference by form input's `name` tag
    const book = {
      name: data.get("bookName"),
      published_date: data.get("date"),
      author: data.get("author"),
      id: data.get("bookId")
    }
    put("books", book);
    setDoRequest(true);
  }

  return (
    <div>
      <ModalComponent book={selectedBook} show={show} setShow={setShow} authors={authors} handleUpdate={handleUpdate} />
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
