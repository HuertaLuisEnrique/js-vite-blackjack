import { pedirCarta } from "./";
import { valorCarta } from "./";

/**
 *  turno de la computadora
 * @param {Number} puntosMinimos Puntos minimos que la computadora necesita para ganar. 
 * @param {HTMLElement} puntosHTML Elementos HTML para mostrar los puntos
 * @param {Array<String>} deck 
 */
export const turnoComputadora = ( puntosMinimos, divCartasComputadora, puntosHTML, deck ) => {
    if(!puntosMinimos) throw new Error('Puntos mínimos son necesario')
    if(!deck) throw new Error('El deck es necesario')
    if(!puntosHTML) throw new Error('Argumentos PuntosHTML es necesario')
    if(!divCartasComputadora) throw new Error('Argumentos divCartasComputadora es necesario')

        let puntosComputadora = 0;

    do {
        const carta = pedirCarta( deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
        imgCarta.classList.add('carta');
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}