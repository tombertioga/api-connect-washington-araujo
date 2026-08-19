const express = require('express');

const router = express.Router();

const {
    listarUsuarios,
    criarUsuario,
    buscarUsuarioPorId,
    atualizarUsuario,
    removerUsuario
} = require('../controllers/userController');

router.get('/', listarUsuarios);

router.post('/', criarUsuario);

router.get('/:id', buscarUsuarioPorId);

router.put('/:id', atualizarUsuario);

router.delete('/:id', removerUsuario);

module.exports = router;