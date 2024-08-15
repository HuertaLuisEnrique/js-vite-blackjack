
import _ from 'underscore';

import {crearDeck, pedirCarta, valorCarta, turnoComputadora, crearCartaHTML} from './usecases/index'


const tipos      = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];



let puntosJugador = 0;
    

// Referencias del HTML
const btnPedir   = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo   = document.querySelector('#btnNuevo');

const divCartasJugador     = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');

const puntosHTML = document.querySelectorAll('small');




export let deck = crearDeck(tipos, especiales );







// Eventos
btnPedir.addEventListener('click', () => {

     const carta = pedirCarta( deck );
    
    puntosJugador = puntosJugador + valorCarta( carta );
    puntosHTML[0].innerText = puntosJugador;
    

    // TODO crearCartaHTML 
    const imgCarta = crearCartaHTML(carta);

    divCartasComputadora.append( imgCarta );
    divCartasJugador.append( imgCarta );
    
    
    if ( puntosJugador > 21 ) {
        console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador, divCartasComputadora, puntosHTML[1], deck );

    } else if ( puntosJugador === 21 ) {
        console.warn('21, genial!');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador, divCartasComputadora, puntosHTML[1], deck );;
    }

});


btnDetener.addEventListener('click', () => {
    btnPedir.disabled   = true;
    btnDetener.disabled = true;

    turnoComputadora( puntosJugador, divCartasComputadora, puntosHTML[1], deck );;
});

btnNuevo.addEventListener('click', () => {

    console.clear();
    deck = [];
    deck = crearDeck(tipos, especiales);

    puntosJugador     = 0;
    
    
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';

    btnPedir.disabled   = false;
    btnDetener.disabled = false;

});

