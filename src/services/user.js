export async function getUser(req, res, next){
    const { uid } = req.params;
    const collection = firebaseAdmin.firestore().collection('users');
    const user = await collection.doc(uid).get();
    return res.json(user.data());
}

export async function updateUser(req, res, next){
    const { uid } = req.params;
    const { name } = req.body;
    const user = {
        name
    }
    const collection = firebaseAdmin.firestore().collection('users');
    const updatedUser = await collection.doc(uid).update(user);
    return res.json(updatedUser);
}

export default{
    getUser,
    updateUser
}
