import { Rating } from '../model/ratingModel';

export const createRating = async (rating : Rating) => {
    const newRating = await Rating.create(rating);
    return newRating;
};

export const getRatingsByBookId = async (bookId: number) => {
    const book = await Rating.findAll({ where: { bookId } });
    const ratings = await Rating.findAll();
    return ratings;
};

