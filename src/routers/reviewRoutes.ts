import { Router } from 'express';
import { authenticate } from '../middleware/auth';
import { addReviewForBook, getReviewsForBook } from '../Controller/reviewController';

const router = Router();

router.post('books/:bookId/reviews', authenticate, addReviewForBook);
router.get('books/:bookId/reviews', getReviewsForBook);

export default router;

