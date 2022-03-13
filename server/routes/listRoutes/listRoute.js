import express from 'express';

import { allComplete, deleteList, getTodoLists, postTodoLists, updateList, allUnComplete, clearComplete } from '../../controllers/todoLists.js';

const router = express.Router();

router.get('/', getTodoLists);

router.get('/allComplete', allComplete);

router.post('/', postTodoLists);

router.post('/update', updateList);

router.post('/delete', deleteList);

router.get('/allUnComplete', allUnComplete);

router.get('/clearComplete', clearComplete);

export default router;