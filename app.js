console.log("Hello World!\n==========\n");

// PROJECT Section
console.log("PROJECT:\n==========\n");

const books = [
    {
        id: 1,
        title: "Name of the Wind",
        author: "Patrick Rothfuss",
        read: true,
    },
    {
        id: 2,
        title: "Name of the Wind",
        author: "Patrick Rothfuss",
        read: true,
    },
    {
        id: 3,
        title: "Name of the Wind",
        author: "Patrick Rothfuss",
        read: true,
    },
    {
        id: 4,
        title: "Name of the Wind",
        author: "Patrick Rothfuss",
        read: true,
    },
];

class Book {
    constructor(id, title, author, read) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.read = read;
        this.favorite = false;
    }
}

class Library {
    constructor(books) {
        this.nextId = books.length;
        this.books = books;
    }

    addBook(book) {
      if(book) {
        var { id, title, author, read } = book;
      }
  if(!id) {
    var titleInput = document.getElementById("title");
    var authorInput = document.getElementById("author");
    var readInput = document.getElementById("read");
    this.nextId++;
    var newBook = new Book(
      this.nextId, 
      titleInput.value, 
      authorInput.value, 
      readInput.checked
    );
    this.books.push(newBook);
    console.log("Finished creating book");
  }   
      console.log(book);
      console.log(newBook);
      const tbody = document.getElementById("tableBody");
      const newTr = document.createElement("tr");
      newTr.classList.add(id || newBook.id);
      newTr.addEventListener("dblclick", () => {
        this.markFavorite(id || newBook.id);
      });
      const newTitle = document.createElement("td");
      const newAuthor = document.createElement("td");
      const newRead = document.createElement("td");

      newTitle.textContent = title || newBook.title;
      newAuthor.textContent = author || newBook.author;
      const newCheckbox = document.createElement("input");
      newCheckbox.classList.add(id || newBook.id);
      newCheckbox.type = "checkbox";
      newCheckbox.checked = read || readInput.checked;
      newCheckbox.disabled = read || readInput.checked;
      newCheckbox.addEventListener("click", (event) => {
        this.markRead(event.target, id || newBook.id);
      });
      newRead.appendChild(newCheckbox);
      
      newTr.appendChild(newTitle);
      newTr.appendChild(newAuthor);
      newTr.appendChild(newRead);

      tbody.appendChild(newTr);
    }

    markRead(checkbox, id) {
      this.books.forEach((book) => {
        if (id === book.id) {
            book.read = true;
            checkbox.disabled = true;
        }
      });
    }

    markFavorite(bookId) {
        this.books.forEach(book => {
          if (book.id === bookId) {
            book.favorite = !book.favorite;
          }
        });
       document.getElementsByClassName(bookId)[0].classList.toggle("favorite");
    }

    removeBook(bookId) {
      this.books = this.books.filter(({ id }) => bookId !== id);
      const tbody = document.getElementById("tableBody");
      tbody.removeChild(document.getElementsByClassName(bookId)[0]);
    }
}


const library = new Library(books);
if(books.length > 0) {
  library.books.forEach(book => {
    library.addBook(book);
  });
}

const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
 event.preventDefault();
   library.addBook();
});