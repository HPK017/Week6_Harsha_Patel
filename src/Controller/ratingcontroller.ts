import { Request, Response } from 'express';
import { Rating } from '../model/ratingModel';
import { reviewCreate } from '../service/reviewService';
import { getRatingsByBookId } from '../service/ratingService';

interface AuthReq extends Request{
    user? : any;
}

export const getRatingsForBook = async (req: Request, res: Response) => {
    try {
        const { bookId } = req.params;
        const ratings = await getRatingsByBookId(parseInt(bookId));
        res.json(ratings);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch ratings for the book' });
    }
};

export const addRatingForBook = async (req: AuthReq, res: Response) => {
    try {
        const { bookId } = req.params;
        const userId = req.user.id; 
        const { rating } = req.body;
        
        const newReview = await reviewCreate( parseInt(bookId, 10), userId, rating);
        res.status(201).json(newReview);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add rating for the book' });
    }
};


