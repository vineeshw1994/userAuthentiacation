import  express from 'express';
const router = express.Router();
import  {authUser,registerUser,
    logout,
    getUserProfile,
    updateUserProfile}  from '../controllers/userControllers.js';
import {protect} from '../middleware/authMiddleware.js';

router.post('/',registerUser )
router.post('/auth', authUser )
router.post('/logout',logout)
router.route('/profile').get(protect, getUserProfile).put(  protect, updateUserProfile)
 


export default router;
