import { Request, Response } from 'express';
import { AuthReq } from '../middleware/auth'; 
import { reviewCreate } from '../service/reviewService';
import { getRatingsByBookId } from '../service/ratingService';

export const addReviewForBook = async ( req: AuthReq, res: Response) => {
    try {
        const { bookId } = req.params;
        const userId = req.user.id;
        const { content } = req.body;

        const newReview = await reviewCreate(parseInt(bookId, 10), userId, content);
        res.status(201).json(newReview);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add review for the book' });
    }
};

export const getReviewsForBook = async (req: AuthReq, res: Response) => {
    try {
        const { bookId } = req.params;
        const reviews = await getRatingsByBookId(parseInt(bookId));
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch reviews for the book' });
    }
};


