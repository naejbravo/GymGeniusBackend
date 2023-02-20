import userService from '../services/user.js';

export async function getUser(req, res, next){
    try {
        const user = await userService.getUser(req, res);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({error: error});
    }
}

export async function updateUser(req, res, next){
    try {
        const user = await userService.updateUser(req, res);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({error: error});
    }
}

export default{
    verifyToken,
    verifyUid
}