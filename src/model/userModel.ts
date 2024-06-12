import { DataTypes, Model } from "sequelize";
import sequelize from "../postgressDb/pgConfig";
import { Rating } from "./ratingModel";
import { Review } from "./reviewModel";
import { Payment } from "./paymentModel";
import { Book } from "./bookModel";

interface userAttributes{
    id? :  number ;
    username: string;
    password: string;
    email: string;
}

class User extends Model<userAttributes> implements userAttributes {
    public id!: number ;
    public username!: string;
    public password!: string;
    public email!: string;
}

User.init(
    {
        id : {
            type :DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        username : {
            type : DataTypes.STRING,
            allowNull : false
        },
        password : {
            type : DataTypes.STRING,
            allowNull : false
        },
        email : {
            type : DataTypes.STRING,
            allowNull : false
        }
    },
    {
        sequelize,
        tableName:'users'
    }
)


Review.belongsTo(User, { foreignKey: 'userId' });
Review.belongsTo(Book, { foreignKey: 'bookId' });

Rating.belongsTo(User, { foreignKey: 'userId' });
Rating.belongsTo(Book, { foreignKey: 'bookId' });

Payment.belongsTo(User, { foreignKey: 'userId' });
Payment.belongsTo(Book, { foreignKey: 'bookId' });



export {User}

