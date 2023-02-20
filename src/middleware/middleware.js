export async function verifyToken(req, res, next){
    const idToken = req.headers.authorization.split('Bearer ')[1];
  firebaseAdmin.auth().verifyIdToken(idToken)
    .then((decodedToken) => {
      req.uid = decodedToken.uid;
      next();
    })
}

async function verifyUid(req, res, next) {
  const uid = req.uid;
  const userRecord = await firebaseAdmin.auth().getUser(uid);
  if (userRecord.uid === uid) {
    next();
  }
}

export default {
    verifyToken,
    verifyUid
}