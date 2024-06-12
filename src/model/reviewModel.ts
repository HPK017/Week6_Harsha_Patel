import { DataTypes, Model } from "sequelize";
import sequelize from "../postgressDb/pgConfig";

interface reviewAttributes{
    id? :  number ;
    userId: number;
    bookId: number;
    content: string;
}

class Review extends Model<reviewAttributes> implements reviewAttributes {
    public id?: number;
    public userId!: number;
    public bookId!: number;
    public content!: string;
}

Review.init(
    {
        id : {
            type :DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        userId : {
            type : DataTypes.INTEGER,
            allowNull : true,
            references :{
                model: 'users',
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL'
        },
        bookId : {
            type : DataTypes.INTEGER,
            allowNull : true,
            references :{
                model: 'books',
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL'
        },
        content : {
            type : DataTypes.STRING,
            allowNull : false
        }
    },
    {
        sequelize,
        tableName:'reviews'
    }
)

export {Review}


