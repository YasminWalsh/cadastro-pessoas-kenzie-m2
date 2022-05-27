import { Pessoa } from "./Pessoa.js";

const pessoas= new Pessoa(document.querySelector('#lista-de-alunos'))

let cadastro= document.querySelector('#register-button');

cadastro.addEventListener("click", (event)=>{
    
    const campo=document.getElementsByClassName("field");
    let pessoaCadastrada = {
        nome: campo[0].value,
        sobrenome: campo[1].value,
        dataNascimento: campo[2].value,
        email: campo[3].value,
        contato: campo[4].value,
        telefone: campo[5].value,
        cargo: campo[6].value
    }
    console.log(pessoaCadastrada);
    pessoas.adicionarALista(pessoaCadastrada);

    Pessoa.mostrarLista(pessoas.lista, pessoas.elementoPai)
    Pessoa.totalCadastrado(pessoas.lista.length)
});

const botaoFiltro= document.querySelector('#btn');
botaoFiltro.addEventListener('click',(event)=>{
    const cargoSelect= document.querySelector('#cargoOption').value;
    Pessoa.mostrarLista(
        pessoas.lista.filter((item)=>cargoSelect===item.cargo || cargoSelect==="Todos"),
        pessoas.elementoPai
    )
})
