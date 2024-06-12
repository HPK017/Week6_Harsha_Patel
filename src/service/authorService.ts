import { Author } from "../model/authorModel";
import { Book } from "../model/bookModel"


const authorcreate = async(author: Author):Promise<any>=>{
    try{
        const app =await Author.create(author);
        if (app){
            return app;
        }
    }
    catch(err){
        throw err;
    }
}

const getAllAuthors = async ():Promise<any[]> => {
    try {
        const authors = await Author.findAll();
        return authors;
    } catch (error) {
        throw new Error("Failed to fetch books");
    }
}

 const getAuthorById = async (authorId: number) => {
    try {
        const author = await Author.findByPk(authorId, {include : Book});
        if (!author) {
            throw new Error("Author not found");
        }
        return author;
    } catch (error) {
        throw new Error("Failed to fetch Author");
    }
};

const updateAuthorById = async (authorId: number, authorData: Author) => {
    try {
        const author = await Book.findByPk(authorId);
        if (!author) {
            throw new Error("Author not found");
        }
        await author.update(authorData);
        return author;
    } catch (error) {
        throw error;
    }
};

const deleteAuthorById = async (authorId: number) => {
    try {
        const author = await Book.findByPk(authorId);
        if (!author) {
            throw new Error("Author not found");
        }
        await author.destroy();
        return { message: "Author deleted successfully" };
    } catch (error) {
        throw new Error("Author to delete book");
    }
};

export {authorcreate, getAllAuthors, getAuthorById, updateAuthorById, deleteAuthorById}

