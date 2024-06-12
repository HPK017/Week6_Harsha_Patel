import { Author } from "../model/authorModel";
import { Book } from "../model/bookModel"
import { Rating } from "../model/ratingModel";
import { Review } from "../model/reviewModel";


const bookcreate = async(book: Book):Promise<any>=>{
    try{
        const app =await Book.create(book);
        if (app){
            return app;
        }
    }
    catch(err){
        throw err;
    }
}

const getAllBooks = async () => {
    try {
        const books = await Book.findAll();
        return books;
    } catch (error) {
        throw new Error("Failed to fetch books");
    }
}

 const getBookById = async (bookId: number) => {
    try {
        const book = await Book.findByPk(bookId, {include :[ Author, Rating, Review] });
        if (!book) {
            console.log(book)
            throw new Error;
        }
        return book;
    } catch (error) {
        throw error;
    }
};

const updateBookById = async (bookId: number, bookData: Book) => {
    try {
        const book = await Book.findByPk(bookId);
        if (!book) {
            throw new Error("Book not found");
        }
        await book.update(bookData);
        return book;
    } catch (error) {
        throw error;
    }
};

const deleteBookById = async (bookId: number) => {
    try {
        const book = await Book.findByPk(bookId);
        if (!book) {
            throw new Error("Book not found");
        }
        await book.destroy();
        return { message: "Book deleted successfully" };
    } catch (error) {
        throw new Error("Failed to delete book");
    }
};

export {bookcreate, getAllBooks, getBookById, updateBookById, deleteBookById}


