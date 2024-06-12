import { Router } from 'express';
import { addRatingForBook, getRatingsForBook } from '../Controller/ratingcontroller';
import { authenticate } from '../middleware/auth';

const router = Router();

router.post('ratings/:bookId/', authenticate, addRatingForBook);
router.get('ratings/:bookId/', getRatingsForBook);

export default router;
``