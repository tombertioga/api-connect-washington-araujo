const userService = require('../services/userService');

const listarUsuarios = (req, res) => {
    const usuarios = userService.listarUsuarios();

    res.status(200).json(usuarios);
};

const criarUsuario = (req, res) => {
    const { nome, email } = req.body;

    if (!nome || !email) {
        return res.status(400).json({
            mensagem: 'Os campos nome e email sao obrigatorios.'
        });
    }

    const novoUsuario = userService.criarUsuario(nome, email);

    res.status(201).json(novoUsuario);
};
const buscarUsuarioPorId = (req, res) => {
    const usuario = userService.buscarUsuarioPorId(req.params.id);

    if (!usuario) {
        return res.status(404).json({
            mensagem: 'Usuario nao encontrado'
        });
    }

    res.status(200).json(usuario);
};

const atualizarUsuario = (req, res) => {
    const { nome, email } = req.body;

    if (!nome || !email) {
        return res.status(400).json({
            mensagem: 'Os campos nome e email sao obrigatorios.'
        });
    }

    const usuario = userService.atualizarUsuario(
        req.params.id,
        { nome, email }
    );

    if (!usuario) {
        return res.status(404).json({
           mensagem: 'Usuario nao encontrado'
        });
    }

    res.status(200).json(usuario);
};

const removerUsuario = (req, res) => {
    const usuario = userService.removerUsuario(req.params.id);

    if (!usuario) {
        return res.status(404).json({
            mensagem: 'Usuario nao encontrado'
        });
    }

    res.status(200).json({
        mensagem: 'Usuario removido com sucesso',
        usuario
    });
};

module.exports = {
    listarUsuarios,
    criarUsuario,
    buscarUsuarioPorId,
    atualizarUsuario,
    removerUsuario
};