import { DataTypes, Model } from "sequelize";
import sequelize from "../postgressDb/pgConfig";
import { Author } from "./authorModel";

interface BookAttributes {
    id? : number, 
    bookCode : string, 
    title:string; 
    description: string;
    publishedYear: number;
    price: number;
    externalId:string
}

class Book extends Model<BookAttributes> implements BookAttributes {
    public id!: number;
    public bookCode!: string;
    public title!: string;
    public description!: string;
    public publishedYear!: number;
    public price!: number;
    public externalId!: string;
    
}

Book.init(
    {
        id : {
            type :DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        bookCode : {
            type : DataTypes.STRING,
            allowNull : false
        },
        title : {
            type : DataTypes.STRING,
            allowNull : false
        },
        description : {
            type : DataTypes.STRING,
            allowNull : false
        },
        publishedYear : {
            type : DataTypes.INTEGER,
            allowNull : false
        },
        price : {
            type : DataTypes.INTEGER,
            allowNull:false
        },
        externalId : {
            type : DataTypes.STRING,
            allowNull : false
        },
    },
    {
        sequelize,
        tableName : 'books'
    })

    

export {Book}

