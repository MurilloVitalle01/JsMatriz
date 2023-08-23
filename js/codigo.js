const caixa = document.querySelector("#caixa");

//Incluindo cursos

let cursos = [];//Criando a matriz

let resposta = "";

//Incluindo curso na matriz curso

while (resposta != "N") {
    let curso = prompt("Digite o nome do curso");
    cursos.push(curso.toUpperCase());
    resposta = prompt("Cadastrar outro Curso S/N");

    if (resposta.toUpperCase() == "N") {
        cursos.forEach((aula) => {
            let p = document.createElement("p");
            p.innerHTML = aula + "<br>-----------------<br>";
            caixa.appendChild(p);
        })
        break;
    }
}

//Excluir
let reposta = prompt("Excluir curso S/N");

if (reposta.toUpperCase() == "S") {

    let curso = prompt("digite o nome do curso para excluir")

    //pegando a posição do elemento dentro da matriz
    alert("posicao do curso dentro da matriz"
        + cursos.indexOf(curso.toUpperCase(), 1));
    let posicao = cursos.indexOf(curso.toUpperCase(), 1);

    //apagando o curso com método .splice
    cursos.splice(posicao);

    cursos.forEach((aula) => {
        let p = document.createElement("p");
        p.innerHTML = "<br>------Lista Excluido-------<br>" + aula + "<br>-----------------<br>";
        caixa.appendChild(p);
    })
}



