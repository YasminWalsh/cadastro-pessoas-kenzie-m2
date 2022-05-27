export class Pessoa {
    constructor(elementoPai){
        this.lista=[]
        this.elementoPai=elementoPai;
    }

    adicionarALista(pessoa){
        for (let item of this.lista) {
            if(item.email===pessoa.email){
                alert(`Esse email já existe!`);
                return;
            }
        }
        if(this.calcularIdade(pessoa.dataNascimento)<18) {
            alert(`Idade não permitida para cadastro!`);
            return;
        }
        this.lista.push(pessoa);

    }

    static mostrarLista(lista, elementoPai){
        elementoPai.innerHTML='';
        lista.forEach((pessoa) => {
            const li=document.createElement('li');
            const nome= document.createElement('span');
            const email=document.createElement('span');
            const cargo=document.createElement('span');

            nome.innerText=`${pessoa.nome} ${pessoa.sobrenome}`;
            email.innerText=pessoa.email;
            cargo.innerText=pessoa.cargo;

            li.append(nome,email,cargo);
            elementoPai.appendChild(li);
        });
    }

    static totalCadastrado(numero){
        const totalAlunos= document.querySelector('#total-alunos');
        totalAlunos.innerText=numero;
    }

    calcularIdade(data){
        let dataAtual = new Date();
        let anoAtual= dataAtual.getFullYear();
        let mesAtual= dataAtual.getMonth()+1;
        let diaAtual= dataAtual.getDate();

        let [anoAniversario,mesAniversario,diaAniversario] = data.split('-');

        let idade= anoAtual-anoAniversario;
        if(mesAtual<mesAniversario || mesAtual===mesAniversario && diaAtual<diaAniversario){
            idade --;
        }
        return idade;
    }
}




