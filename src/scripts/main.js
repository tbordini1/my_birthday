AOS.init();

const dataDoEvento = new Date("Dec 12, 2024 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaASHoras = setInterval(function(){
const agora = new Date();
const timeStampAtual = agora.getTime();

const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

const diaEmMs = 1000 * 60 * 60 *24;
const horaEmMs = 1000 * 60 * 60;
const minutoEmMs = 1000 * 60;

const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
const horasAteOEvento = Math.floor((diasAteOEvento % diaEmMs) / horaEmMs);
const minutosAteOEvento = Math.floor((diasAteOEvento % horaEmMs) / minutoEmMs);
const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);

document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

if (distanciaAteOEvento < 0) {
    clearInterval(contaASHoras);
    document.getElementById('contador').innerHTML = 'Evento expirado'
}
},1000);