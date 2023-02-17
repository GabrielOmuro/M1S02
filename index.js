window.onload = function exnove(){
    let nome = prompt('Qual o seu nome?');
    let cidade = prompt('Qual a sua cidade?');
    let idade = (prompt('Qual a sua idade?'));
    console.log('Seu nome é ' + (nome) + ' ,sua cidade é ' + (cidade) + ' ,sua idade é ' + (idade) + '.');
    let sobrenome = prompt('Qual seu sobrenome');
    let nome2 = prompt('Qual seu nome?');
    alert('Seu completo nome é ' + nome2 + ' ' + sobrenome) + '.';
}
function cadastro(){
    let nome = document.getElementById('nome').value;
    let gmail = document.getElementById('gmail').value;
    let telefone = document.getElementById('telefone').value;
    let senha = document.getElementById('senha').value;
    let perfil = ( nome, gmail, telefone, txtFeminino, txtMasculino, senha);
     
    confirm('Esse é seu nome? ' + (nome));
    alert('Usuário Cadastrado Com Sucesso!');
    }