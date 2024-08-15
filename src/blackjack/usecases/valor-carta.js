


/**
 * Esta Funcion le de valor númerico a la carta
 * @param {String} carta Recibe un variable String
 * @returns {Number} Retorna un Number valor de carta 
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}