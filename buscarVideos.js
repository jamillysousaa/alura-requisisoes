import {conectaApi} from "./conectaApi.js";

async function buscarVideos(evento){
    evento.preventDefault();

    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value; 
    const busca = await conectaApi.buscarVideos(dadosDePesquisa);

    console.log(busca);
}
const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");

botaoDePesquisa.addEventListener("click", evento => buscarVideos(evento))
