const titulo = document.querySelector('#titulo')
const player = document.querySelector('#player');
const btnPlay = document.querySelector('#btnPlay');
const btnPause = document.querySelector('#btnPause');
const btnStop = document.querySelector('#btnStop');
const rngVolume = document.querySelector('#volume');
const rngTimeSong = document.querySelector('#timeSong')
const songs = document.querySelectorAll('.song')
const progresoCancion = player.duration;
console.dir(player)
console.log(progresoCancion)


function cambiarCancion(evt) {
    let ruta = `./media/${evt.target.id}.mp3`;
    titulo.textContent = evt.target.textContent;
    player.setAttribute('src', ruta);
    player.play();
}
for (let song of songs) {
    song.addEventListener('click', cambiarCancion)
    song.addEventListener('mouseover', (evt) => {
        evt.target.style.cursor = 'pointer';
    })
    song.addEventListener('mouseout', (evt) => {
        evt.target.style.cursor = '';
    })
}

player.volume = rngVolume.value;

btnPlay.addEventListener('click', () => {
    player.play();
});
console.log(progresoCancion)


btnPause.addEventListener('click', () => {
    player.pause();
    console.log(progresoCancion)

});

btnStop.addEventListener('click', () => {
    // player.stop(); no existe el metodo stop, hay que inventarlo:
    player.pause();
    player.currentTime = 0; //lleva el 'cabezal' al inicio.
});

rngVolume.addEventListener('change', (evt) => {
    console.log(evt);
    console.log(evt.target.value);
    player.volume = evt.target.value;
})
rngTimeSong.addEventListener('change', (evt) => {
    player.currentTime = evt.target.value;
})
console.log(progresoCancion)

