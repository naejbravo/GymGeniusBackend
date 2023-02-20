import routineService from '../services/routine.js';

export async function getRoutines(req, res, next){
    try {
        const routines = await routineService.getRoutines(req, res);
        res.status(200).json(routines);
    } catch (error) {
        res.status(400).json({error: error});
    }
}

export async function addRoutine(req, res, next){
    try {
        const routine = await routineService.addRoutine(req, res);
        res.status(200).json(routine);
    } catch (error) {
        res.status(400).json({error: error});
    }
}

export async function updateRoutine(req, res, next){
    try {
        const routine = await routineService.updateRoutine(req, res);
        res.status(200).json(routine);
    } catch (error) {
        res.status(400).json({error: error});
    }
}

export async function deleteRoutine(req, res, next){
    try {
        const routine = await routineService.deleteRoutine(req, res);
        res.status(200).json(routine);
    } catch (error) {
        res.status(400).json({error: error});
    }
}



export default {
    getRoutines,
    addRoutine,
    updateRoutine,
    deleteRoutine,
}