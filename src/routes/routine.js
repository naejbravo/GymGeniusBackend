import express from 'express';
const router = express.Router();
import { getRoutines, addRoutine, updateRoutine, deleteRoutine } from '../controllers/routine.js';
import { verifyToken, verifyUid } from '../controllers/auth.js';

router.get('/', verifyToken, verifyUid, getRoutines)
router.post('/addRoutine', verifyToken, verifyUid, addRoutine)
router.put('/updateRoutine', verifyToken, verifyUid, updateRoutine)
router.delete('/deleteRoutine', verifyToken, verifyUid, deleteRoutine)

export default router;
