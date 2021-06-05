class Book {
    constructor(titleOfBook, authorOfBook, pubDateOfBook, isbn) {
      this.title = titleOfBook;
      this.author = authorOfBook;
      this.pubDate = pubDateOfBook;
      this.isbn = isbn
    }
  }

  class Library {
    constructor(name) {
      this._name = name;
      this._books = [];
    }
    get books() {
      // Return copy of books
      return JSON.parse(JSON.stringify(this._books));
    }
    get count() {
      return this._books.length;
    }
    addBook(book = {}) {
      const { title = "", author = "", pubDate = "", isbn = "" } = book;
      if (title.length > 0 && author.length > 0) {
        const newBook = { title, author, pubDate, isbn };
        this._books.push(newBook);
      }
    }
    deleteBook(isbn) {
    // find the index of the book
    let indexOfBookToRemove = null;

    /*
        let index = 0;
        for (const book of this._books) {
            if (book.isbn == isbn){
                indexOfBookToRemove = index;
                break;
            }
            index += 1;
        }
        */

        for (let index = 0; index < this._books.length; index++){
            const book = this._books[index];
            if (book.isbn == isbn){
                indexOfBookToRemove = index;
                break;
        }
    }
    // use splice to remove _books
        this._books.splice(indexOfBookToRemove, 1);
    }
    listBooks() {
      for (const book of this._books) {
        const {title, author, pubDate, isbn} = book;
        console.log(`Title: ${title}, Author: ${author}, PubDate: ${pubDate}, ISBN: ${isbn}`)
      }
    }
  }

const myBook = new Book("AP Calc", "Steely Dan", "11/13/1999", "2375923750");
const atomicHabits = new Book("Atomic Habits", "James Clear", "10/16/2018", "23520982");

let uoLibrary = new Library("knight library");
console.log("adding books");
uoLibrary.addBook(myBook);
uoLibrary.addBook(atomicHabits);
uoLibrary.listBooks();
console.log("deleting books");
uoLibrary.deleteBook("2375923750");
uoLibrary.listBooks();