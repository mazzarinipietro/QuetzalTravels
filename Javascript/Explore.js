const iframe = document.querySelector('#Mappa');

// Sezione che controlla lo spostamento della embedded map al click del pulsante
const Destinazioni = {
    CostaRica: { lat: 9.9281, lng: -84.0907, zoom: 7, Sfondo1: '/images/Corcovado-javaimage.jpg', Sfondo2: '/images/Matapalo-surfing-javaimage.jpg', Sfondo3: '/images/Whale-watching-javaimage.jpg', Small1: 'La foresta pluviale con più biodiversita sul pianeta', Small2: 'Paradiso del surf tra onde perfette e natura selvaggia.', Small3: 'Avvistamento di balene megattere nelle acque del Pacifico costaricenze.', Titolo1: 'Corcovado', Titolo2: 'Matapalo', Titolo3: 'Whale Watching', Sito1: 'https://corcovadotours.com/english/', Sito2: 'https://www.psychotours.com/', Sito3: 'https://www.dolphintourcostarica.com/' },
    Guatemala: { lat: 14.6349, lng: -90.5069, zoom: 7, Sfondo1: '/images/Tikal-javaimg.png', Sfondo2: '/images/Akatenando-javaimg.png', Sfondo3: '/images/Atitlan-javaimg.png', Small1: 'Ancient Maya city among the tallest jungle temples.', Small2: 'Volcanic lake surrounded by Maya villages.', Small3: 'Volcano to climb with views of erupting Fuego.', Titolo1: 'Tikal', Titolo2: 'Acatenango Volcano', Titolo3: 'Atitlàn lake', Sito1: 'https://tikalgo.com/it/', Sito2: 'https://acatenangovolcanohiketour.com/it/', Sito3: 'https://growyourowncure.org/' },
    Belize: { lat: 17.2510, lng: -88.7590, zoom: 7, Sfondo1: '/images/Blue-javaimg.png', Sfondo2: '/images/Shark-javaimg.png', Sfondo3: '/images/Iñacio-javaimg.png', Small1: 'Giant underwater sinkhole for world-class diving. ', Small2: 'Coral reef teeming with sharks and stingrays.', Small3: 'Gateway to Maya ruins and Belizean jungle adventures.', Titolo1: 'Great Blue Hole', Titolo2: 'Hol Chan & Shark Ray Alley', Titolo3: 'San-Iñacio', Sito1: 'https://www.tropicair.com/tropic-air-tours/the-great-blue-hole-tour/', Sito2: 'https://www.getyourguide.com/it-it/san-pedro-belize-l117510/san-pedro-tour-di-snorkeling-di-hol-chan-e-shark-ray-alley-t830387/', Sito3: 'https://www.getyourguide.com/it-it/san-ignacio-belize-l32678/' },
    Panama: { lat: 8.9936, lng: -79.5197, zoom: 7, Sfondo1: '/images/PanamaCanal-javaimg.png', Sfondo2: '/images/CascoViejo-javaimg.png', Sfondo3: '/images/SanBlas-javaimg.png', Small1: 'Engineering marvel connecting the Atlantic and Pacific oceans.', Small2: 'Colonial streets and vibrant culture in Panama City s historic heart.', Small3: 'Remote paradise of 365 islands ruled by the indigenous Guna people.', Titolo1: 'Panama Canal', Titolo2: 'Casco Viejo', Titolo3: 'San Blas Islands', Sito1: 'https://www.getyourguide.com/it-it/canale-di-panama-l4737/', Sito2: 'https://www.getyourguide.com/it-it/casco-viejo-l159864/tour-di-quartieri-tipici-tc21/', Sito3: 'https://sanblasdreams.com/it/san-blas-tours/' },
    Mexico: { lat: 19.4326, lng: -99.1332, zoom: 5, Sfondo1: '/images/ChichenItza-javaimg.png', Sfondo2: '/images/Acapulco-javaimg.png', Sfondo3: '/images/Tulum-javaimg.png', Small1: 'Iconic Maya pyramid rising from the Yucatán jungle.', Small2: 'Legendary Pacific resort city famous for its dramatic cliff divers.', Small3: 'Ancient Maya ruins perched above turquoise Caribbean waters.', Titolo1: 'Chichén Itzá', Titolo2: 'Acapulco', Titolo3: 'Tulum', Sito1: 'https://www.chichenitza.com/it/tour', Sito2: 'https://www.getyourguide.com/it-it/acapulco-l307/tour-guidati-tc1144/', Sito3: 'https://www.getyourguide.com/it-it/tulum-l248/' },
    Perù: { lat: -12.0464, lng: -77.0428, zoom: 6, Sfondo1: '/images/Machu-javaimg.png', Sfondo2: '/images/Cutzco-javaimg.png', Sfondo3: '/images/Lima-javaimg.png', Small1: 'Legendary Inca citadel hidden among the Andean clouds.', Small2: 'Ancient Inca capital where cobblestone streets meet colonial grandeur.', Small3: 'Peru s vibrant capital blending colonial history and world-class cuisine.', Titolo1: 'Machu Picchu', Titolo2: 'Cusco', Titolo3: 'Lima', Sito1: 'https://www.getyourguide.com/it-it/machu-picchu-l1570/tour-di-1-giorno-tc172/', Sito2: 'https://www.viator.com/it-IT/Cusco/d937-ttd', Sito3: 'https://www.limatours.com.pe/en' }
}

function SpostaMappaA(Paese) {
    const Dati = Destinazioni[Paese];
    iframe.src = 'https://maps.google.com/maps?q=' + Dati.lat + ',' + Dati.lng + '&z=' + Dati.zoom + '&output=embed';
    window.location.hash = '#' + Paese;                                                                                // -> Permette di usare il "Target" (cambiando il hash della pagina con il nome del paese)
    document.querySelector('.item:nth-child(8)').style.backgroundImage = 'url(' + Dati.Sfondo1 + ')';                  //Permette di cambiare lo sfondo dei .item:childs
    document.querySelector('.item:nth-child(9)').style.backgroundImage = 'url(' + Dati.Sfondo2 + ')';
    document.querySelector('.item:nth-child(10)').style.backgroundImage = 'url(' + Dati.Sfondo3 + ')';
    document.querySelectorAll('.item:nth-child(8), .item:nth-child(9), .item:nth-child(10), .item:nth-child(8) a, .item:nth-child(9) a, .item:nth-child(10) a').forEach(el => el.style.display = 'block');
    document.querySelector('.CountryText').style.display = 'block';
    document.querySelector('.CountryText  span:first-child').textContent = Paese;
    document.querySelector('.item:nth-child(8) p').textContent = Dati.Titolo1;
    document.querySelector('.item:nth-child(9) p').textContent = Dati.Titolo2;
    document.querySelector('.item:nth-child(10) p').textContent = Dati.Titolo3;
    document.querySelector('.item:nth-child(8) small').textContent = Dati.Small1;
    document.querySelector('.item:nth-child(9) small').textContent = Dati.Small2;
    document.querySelector('.item:nth-child(10) small').textContent = Dati.Small3;
    document.querySelector('.item:nth-child(8) a').href = Dati.Sito1;
    document.querySelector('.item:nth-child(9) a').href = Dati.Sito2;
    document.querySelector('.item:nth-child(10) a').href = Dati.Sito3;
}
