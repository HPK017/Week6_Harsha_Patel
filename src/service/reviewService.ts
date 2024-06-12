import { Review } from '../model/reviewModel';

export const reviewCreate = async (bookId: any, userId: any, content: any): Promise<any> => {
    try {
        const newReview = await Review.create({ bookId, userId, content });
        return newReview;
    } catch (error) {
        throw new Error('Failed to create review');
    }
};

export const getReviews = async (bookId : any) => {
    try {
        const reviews = await Review.findAll({ where: { bookId } });
        return reviews;
    } catch (error) {
        throw new Error('Failed to fetch reviews');
    }
};


