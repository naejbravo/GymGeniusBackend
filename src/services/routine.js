import firebaseAdmin from '../config/firebaseAdmin.js';

export async function getRoutines(req ,res){
    const uid = req.uid;
  const routinesCollection = firebaseAdmin.firestore().collection('routines');
  const routines = await routinesCollection.where('userId', '==', uid).get();
  const routinesArray = [];

  routines.forEach((routine) => {
    routinesArray.push(routine.data());
  });

  return res.json(routinesArray);
}

export async function addRoutine(req, res){
    const uid = req.uid;
    const { name, description, exercises } = req.body;
    const routine = {
        name,
        description,
        exercises,
        userId: uid
    }
    const routinesCollection = firebaseAdmin.firestore().collection('routines');
    const newRoutine = await routinesCollection.add(routine);
    return res.json(newRoutine);
}

export async function updateRoutine(req, res){
    const uid = req.uid;
    const { id, name, description, exercises } = req.body;
    const routine = {
        name,
        description,
        exercises,
        userId: uid
    }
    const routinesCollection = firebaseAdmin.firestore().collection('routines');
    const updatedRoutine = await routinesCollection.doc(id).update(routine);
    return res.json(updatedRoutine);
}

export async function deleteRoutine(req, res){
    const uid = req.uid;
    const { id } = req.body;
    const routinesCollection = firebaseAdmin.firestore().collection('routines');
    const deletedRoutine = await routinesCollection.doc(id).delete();
    return res.json(deletedRoutine);
}

export default {
    getRoutines,
    addRoutine,
    updateRoutine,
    deleteRoutine
}