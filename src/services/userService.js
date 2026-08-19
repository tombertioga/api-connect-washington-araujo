const fs = require('fs');
const path = require('path');

const caminhoArquivo = path.join(__dirname, '../data/users.json');

const carregarUsuarios = () => {
    const dados = fs.readFileSync(caminhoArquivo, 'utf-8');
    return JSON.parse(dados);
};

const salvarUsuarios = (usuarios) => {
    fs.writeFileSync(
        caminhoArquivo,
        JSON.stringify(usuarios, null, 4)
    );
};

const gerarNovoId = (usuarios) => {
    if (usuarios.length === 0) {
        return 1;
    }

    const maiorId = Math.max(
        ...usuarios.map(usuario => usuario.id)
    );

    return maiorId + 1;
};

const listarUsuarios = () => {
    return carregarUsuarios();
};

const criarUsuario = (nome, email) => {
    const usuarios = carregarUsuarios();

    const novoUsuario = {
        id: gerarNovoId(usuarios),
        nome,
        email
    };

    usuarios.push(novoUsuario);
    salvarUsuarios(usuarios);

    return novoUsuario;
};

const buscarUsuarioPorId = (id) => {
    const usuarios = carregarUsuarios();

    return usuarios.find(usuario => usuario.id === Number(id));
};

const atualizarUsuario = (id, dados) => {
    const usuarios = carregarUsuarios();

    const indice = usuarios.findIndex(
        usuario => usuario.id === Number(id)
    );

    if (indice === -1) {
        return null;
    }

    usuarios[indice] = {
        ...usuarios[indice],
        ...dados,
        id: usuarios[indice].id
    };

    salvarUsuarios(usuarios);

    return usuarios[indice];
};

const removerUsuario = (id) => {
    const usuarios = carregarUsuarios();

    const indice = usuarios.findIndex(
        usuario => usuario.id === Number(id)
    );

    if (indice === -1) {
        return null;
    }

    const usuarioRemovido = usuarios.splice(indice, 1)[0];

    salvarUsuarios(usuarios);

    return usuarioRemovido;
};

module.exports = {
    carregarUsuarios,
    salvarUsuarios,
    gerarNovoId,
    listarUsuarios,
    criarUsuario,
    buscarUsuarioPorId,
    atualizarUsuario,
    removerUsuario
};