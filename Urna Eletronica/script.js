let seuVotoPara = document.querySelector('.voto-para span');
let votoCargo = document.querySelector('.voto-cargo span');
let textoVoto = document.querySelector('.texto-voto');
let spansVoto = document.querySelector('.spans-texto-voto');
let fotos = document.querySelector('.foto');
let infosVoto = document.querySelector('.infos-voto');
let numeroCargo = document.querySelector('.numero-cargo');
let nomeCandidato = document.querySelector('.nome');
let nomePartido = document.querySelector('.partido');
let nomeVice = document.querySelector('.vice');
let brancoAviso = document.querySelector('.aviso-branco');
let nuloAviso = document.querySelector('.aviso-nulo');

let etapaAtual = 0;
let numeroAtual = '';
let branco = false;

function comecoEtapa(){
    let etapa = etapas[etapaAtual];
    let numeroHtml = '';
    numeroAtual = '';
    branco = false;

    for(let i=0; i<etapa.numeros; i++){
        if(i === 0){
            numeroHtml += '<div class="numeros pisca"></div>'; 
        }else{
            numeroHtml += '<div class="numeros"></div>';
        }  
    }

    seuVotoPara.style.display = 'none';
    votoCargo.innerHTML = etapa.titulo;
    numeroCargo.innerHTML = numeroHtml;
    
    textoVoto.style.display = 'none';
    fotos.innerHTML = '';
    infosVoto.style.display = 'none';
}

function atualizaTela(){
    let etapa = etapas[etapaAtual];
    let candidato = etapa.candidatos.filter((item)=>{
        if(numeroAtual === item.numeroCandidato){
            return true
        }else{
            return false
        }
    });

    if(candidato.length > 0){
        candidato = candidato[0];
        seuVotoPara.style.display = 'block';
        votoCargo.innerHTML = etapa.titulo;
        textoVoto.style.display = 'block';
        brancoAviso.style.display = 'none';
        spansVoto.style.display = 'flex';
        nuloAviso.style.display = 'none';
        infosVoto.style.display = 'block';
        if(etapa.titulo === 'VEREADOR'){
            nomeCandidato.innerHTML = `<span class="nome">Nome: ${candidato.nome}</span>`;
            nomePartido.innerHTML = `<span class="partido">Partido: ${candidato.partido}</span>`;
            nomeVice.style.display = 'none';
            let fotosHtml = '';
            for(let i in candidato.fotos){
                fotosHtml+= `<div class="foto-candidato">
                                <img src=${candidato.fotos[i].url} alt="">
                                <p style="font-weight: bold;">${candidato.fotos[i].legenda}</p>
                            </div>`
            }
            fotos.innerHTML = fotosHtml;
        }else{
            nomeCandidato.innerHTML = `<span class="nome">Nome: ${candidato.nome}</span>`;
            nomePartido.innerHTML = `<span class="partido">Partido: ${candidato.partido}</span>`;
            nomeVice.style.display = 'block';
            nomeVice.innerHTML = `<span class="vice">Vice-Prefeito: ${candidato.vice}</span>`;
            let fotosHtml = '';
            for(let i in candidato.fotos){
                if(candidato.fotos[i].small){
                    fotosHtml += `<div class="foto-candidato small">
                                    <img src=${candidato.fotos[i].url} alt="">
                                    <p>${candidato.fotos[i].legenda}</p>
                                </div>`;
                }else{
                fotosHtml+= `<div class="foto-candidato">
                                <img src=${candidato.fotos[i].url} alt="">
                                <p style="font-weight: bold;">${candidato.fotos[i].legenda}</p>
                            </div>`
                }
            }
            fotos.innerHTML = fotosHtml;
        }
    }else{
        seuVotoPara.style.display = 'block';
        infosVoto.style.display = 'block';
        textoVoto.style.display = 'block';
        brancoAviso.style.display = 'none';
        spansVoto.style.display = 'none';
        nuloAviso.style.display = 'block';
    }


    /*let candidato = etapa.candidatos.filter((item)=>{
        if(numeroAtual === item.numeroCandidato){
            seuVotoPara.style.display = 'block';
            votoCargo.innerHTML = etapa.titulo;
            textoVoto.style.display = 'flex';
            infosVoto.style.display = 'block';
            if(etapa.titulo === 'VEREADOR'){
                nomeCandidato.innerHTML = `<span class="nome">Nome: ${item.nome}</span>`;
                nomePartido.innerHTML = `<span class="partido">Partido: ${item.partido}</span>`;
                nomeVice.style.display = 'none';
            }else{
                nomeCandidato.innerHTML = `<span class="nome">Nome: ${item.nome}</span>`;
                nomePartido.innerHTML = `<span class="partido">Partido: ${item.partido}</span>`;
                nomeVice.innerHTML = `<span class="vice">Vice-Prefeito: ${item.vice}</span>`;
            }
        }
    });*/
}

function btnNumbers(n){
    let elNumero = document.querySelector('.numeros.pisca');
    if(elNumero !== null){
        elNumero.innerHTML = n;
        numeroAtual = `${numeroAtual}${n}`;
        elNumero.classList.remove('pisca');
        if(elNumero.nextElementSibling !== null){
            elNumero.nextElementSibling.classList.add('pisca');
        }else{
            atualizaTela();
        }    
    }
}

function btnBranco(){
    if(numeroAtual === ''){
        branco = true;
        numeroCargo.innerHTML = '';
        seuVotoPara.style.display = 'block';
        infosVoto.style.display = 'block';
        textoVoto.style.display = 'block';
        brancoAviso.style.display = 'block'
        spansVoto.style.display = 'none';
        nuloAviso.style.display = 'none';
    }
}

function btnCorrige(){
    comecoEtapa();  
}

function btnConfirma(){
    let etapa = etapas[etapaAtual];
    let confirmaVoto = false;
    if(branco === true || numeroAtual.length === etapa.numeros){
        confirmaVoto = true;
        //console.log('confirmando voto como '+numeroAtual);
    }

    if(confirmaVoto){
        etapaAtual++;
        if(etapas[etapaAtual] !== undefined){
            comecoEtapa();
        }else{
            document.querySelector('.tela').innerHTML = '<div class="aviso-fim pisca"><p>FIM</p></div>'
        }
    }
}

comecoEtapa();