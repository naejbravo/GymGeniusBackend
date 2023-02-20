import express from 'express';
const router = express.Router();

import { verifyToken, verifyUid } from '../controllers/auth';
import {getUser, updateUser} from '../controllers/user';

router.get('/:userId', verifyToken, verifyUid, getUser);
router.put('/:userId', verifyToken, verifyUid, updateUser);

router.param('userId', getUserById);

export default router;