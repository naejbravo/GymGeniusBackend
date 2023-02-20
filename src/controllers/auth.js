import authService from '../services/auth.js';
import middleware from '../middleware/middleware.js';

export async function signUp(req, res, next) {
    const { email, password, name } = req.body;
    try {
      const user = await authService.signUp(email, password);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({error: error});
    }
  }
  
  export async function signIn(req, res, next) {
    const { email, password } = req.body;
    try {
      const user = await authService.signIn(email, password);
      res.json(user);
    } catch (error) {
      console.log(error);
      res.status(400).json({error: error});
    }
  }

  export async function signInWithProviderAndCreateUser(req, res ,next) {
    const {userCredential} = req.body;
    try {
      const user = await authService.signInWithProviderAndCreateUser(userCredential);
      res.json(user);
    } catch (error) {
      next(error);
    }
  }

  export async function verifyToken(req, res,next){
    try {
        await middleware.verifyToken(req, res, next);
    } catch (error) {
        res.status(401).json({error: 'unauthorized'})
    }
}

export async function verifyUid(req, res, next){
    try {
        await middleware.verifyUid(req, res, next);
    } catch (error) {
        res.status(401).json({error: 'unauthorized'})
    }
}
  
export default {
    signUp,
    signIn,
    signInWithProviderAndCreateUser,
    verifyToken,
    verifyUid
  }