import { DataTypes, Model } from "sequelize";
import sequelize from "../postgressDb/pgConfig";
import { Book } from "./bookModel";

interface paymentAttributes{
    id? :  number ;
    userId: string;
    bookId: string;
    amount: number;
    status: string;
    createdAt : Date;
}

class Payment extends Model<paymentAttributes> implements paymentAttributes {
    
    public id?: number;
    public userId!: string;
    public bookId!: string;
    public amount!: number;
    public status!: string;
    public createdAt!: Date;
}

Payment.init(
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
        amount : {
            type : DataTypes.FLOAT,
            allowNull : false
        },
        status :{
            type : DataTypes.STRING,
            allowNull : false
        },
        createdAt: {
            type : DataTypes.DATE,
            allowNull : false
        }
    },
    {
        sequelize,
        tableName:'payments',
        timestamps:false
    }
)

Payment.belongsTo(Book, {foreignKey : 'bookId'})

export {Payment}

