// typeWrite = (elemento) => {
//     const textoArray = elemento.innerHTML.split('');
//     elemento.innerHTML = '';
//     textoArray.forEach((letra, i) => {
//         setTimeout(() => {

//             elemento.innerHTML += letra;
//         }, 75 * i)
//     });

//     console.log(textoArray);
// }

// const titulo = document.querySelector('#none');
// typeWrite(titulo);

// let texto = document.querySelector('#info_text')

frase = "Meu nome é João Pedro Silva Antunes.";
frase2 = "Tenho 19 anos.";
frase3 = "Sou Developer Backend trainee.";
frase4 = "Estudante de ADS na Faculdade Impacta.";
frase5 = "Pratico programação desde os 15 anos.";
frase6 = "Meu objetivo é trabalhar com tecnologia e programação.";
frase7 = "Estou disponível para novas experiências e conexões.";
frase8 = "Confira meus projetos no GitHub: github.com/Joaopedro-SA.";

const typeWrite = (elemento) => {
  const palavras = [frase, frase2, frase3, frase4, frase5, frase6, frase7, frase8];
  let palavraIndex = 0;

  const escreverPalavra = () => {
    const palavra = palavras[palavraIndex].split("");
    elemento.innerHTML = "";
    palavra.forEach((letra, i) => {
      setTimeout(() => {
        elemento.innerHTML += letra;
      }, 80 * i);
    });

    setTimeout(apagarPalavra, 80 * palavra.length + 1000); // Espera um pouco antes de começar a apagar
  };

  const apagarPalavra = () => {
    const palavra = palavras[palavraIndex].split("");
    palavra.reverse().forEach((letra, i) => {
      setTimeout(() => {
        elemento.innerHTML = elemento.innerHTML.slice(0, -1);
      }, 50 * i);
    });

    palavraIndex = (palavraIndex + 1) % palavras.length;
    setTimeout(escreverPalavra, 50 * palavra.length + 500); // Espera um pouco antes de começar a escrever a próxima palavra
  };

  escreverPalavra();
};

const nome_html = document.querySelector("#none");
typeWrite(nome_html);

let texto = document.querySelector("#info_text");

escreverPalavra = (texto, elemento) => {
  const palavra = texto.split("");
  elemento.innerHTML = "";
  let buscar_br;
  palavra.forEach((letra, i) => {
    setTimeout(() => {
      buscar_br += letra;
      if (buscar_br.includes("¬")) {
        buscar_br = buscar_br.replace("¬", "");
        elemento.innerHTML += `<br>`;
      } else if (buscar_br.includes("§")) {
        buscar_br = buscar_br.replace("§", "");
        elemento.innerHTML += array_link[index_link];
        index_link += 1;
      } else {
        elemento.innerHTML += letra;
      }
    }, 40 * i);
  });

  setTimeout(apagarPalavra, 80 * palavra.length + 1000); // Espera um pouco antes de começar a apagar
};

let info = document.querySelector(".info_text");

let array_link = [
  [
    '<a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-silva-antunes/">linkedin</a>',
  ],
  ['<a href="https://github.com/JoaoPedro-SA">GitHub</a>'],
];
let index_link = 0;

let frase_info = `   

Sou estudante de Análise e Desenvolvimento de Sistemas (ADS) na Faculdade Impacta e formado em Técnico de
 TI pela ETEC. Tenho habilidades em solucionar problemas por meio da programação e na implementação de 
 ferramentas amplamente utilizadas no mercado. Estou em constante aprendizado para me atualizar e aprimorar
  na área.
        ¬ Atualmente, trabalho como desenvolvedor de suporte técnico na IBsoftware, prestando suporte a sistemas legados feitos em JAVA J2EE. Além disso, desenvolvo projetos pessoais que podem ser conferidos no meu portfólio: github.com/Joaopedro-SA. Estou à disposição para novas experiências e conexões.
        ¬ 
Desde os 15 anos, sou apaixonado por programação e, desde os 12, por informática. Gosto de ver desafios ou ideias sendo aplicados em soluções lógicas através do código. 
        ¬  Estou disponível para novas experiências e
        conexões no linkedin no § e
        Confira meus projetos no GitHub : §. ¬  ¬  
        `;

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
    (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

let info_h1 = document.querySelector(".info_h1");

let time;
let num = 0;

setInterval(() => {
  if (isInViewport(info_h1) && num === 0) {
    num++;
    escreverPalavra(frase_info, info);
  }
}, 1000);

interogacao = () => {
  let interogat = document.querySelector(".button_card_h1");
  interogat.addEventListener("click", () => {
    let interogat = document.querySelector(".button_card_h1");
    let interogat2 = interogat.querySelector("#indentificator");
    if (interogat2) {
      alert(interogat2.namedItem);
    } else {
      alert("Elemento não encontrado");
    }
  });
};

interogacao();

console.log("teste");
