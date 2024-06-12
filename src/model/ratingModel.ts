import { DataTypes, Model } from "sequelize";
import sequelize from "../postgressDb/pgConfig";

interface ratingAttributes{
    id? :  number ;
    userId: number;
    bookId: number;
    rating: number;
}

class Rating extends Model<ratingAttributes> implements ratingAttributes {
    public id?: number;
    public userId!: number;
    public bookId!: number;
    public rating!: number;
}

Rating.init(
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
        rating : {
            type : DataTypes.INTEGER,
            allowNull : false
        }
    },
    {
        sequelize,
        tableName:'ratings'
    }
)

export {Rating}

