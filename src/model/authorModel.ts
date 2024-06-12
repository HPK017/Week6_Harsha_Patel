import { DataTypes, Model } from "sequelize";
import sequelize from "../postgressDb/pgConfig";
import { Book } from "./bookModel";

interface AuthorAttributes {
    id?: number;
    name: string;
    bio:string;
    birthdate: Date; 
    isSystemUser: Boolean
}

class Author extends Model<AuthorAttributes> implements AuthorAttributes{
    public id!: number;
    public name!: string;
    public bio!: string;
    public birthdate!: Date;
    public isSystemUser!: Boolean;
}

Author.init(
    {
        id : {
            type :DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        name : {
            type : DataTypes.STRING,
            allowNull : false
        },
        bio : {
            type : DataTypes.STRING,
            allowNull : false
        },  
        birthdate : {
            type : DataTypes.DATE,
            allowNull : false
        },
        isSystemUser : {
            type : DataTypes.BOOLEAN,
            allowNull : false
        }
    },
    {
        sequelize,
        tableName : 'authors'
    }
)

const BookAuthor = sequelize.define('BookAuthors',{
    bookId: { type: DataTypes.INTEGER, references: { model: Book, key: 'id' } },
    authorId: { type: DataTypes.INTEGER, references: { model: Author, key: 'id' } }
})

Book.belongsToMany(Author, {through : BookAuthor })
Author.belongsToMany(Book, {through : BookAuthor})

export {Author}

