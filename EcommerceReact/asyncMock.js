
const products = [
    {
        id: "1",
        title: "Red Dead Redemtion 2",
        price: 60,
        category: "Steam",
        Img: "../red-dead-redemption-Portada.jpg",
        stock: 10,
        description: "Red Dead Redemption 2 es un juego de acción y aventuras desarrollado por Rockstar Games. Lanzado en 2018, es la secuela de Red Dead Redemption. Ambientado en el salvaje oeste en 1899, sigue la historia de Arthur Morgan, miembro de la banda Van der Linde."
    },
    {
        id: "2",
        title: "Elden Ring",
        price: 60,
        category: "Steam",
        Img: "../EldenRingPortada.jpg",
        stock: 10,
        description: "Elden Ring es un videojuego de acción y rol desarrollado por FromSoftware en colaboración con el autor George R. R. Martin. Lanzado en 2022, destaca por su mundo abierto, combate desafiante y narrativa envolvente. El juego fusiona la habilidad característica de FromSoftware con un vasto mundo de fantasía oscuro, lleno de criaturas imponentes y secretos por descubrir."
    },
    {
        id: "3",
        title: "The Witcher 3: Wild Hunt",
        price: 60,
        category: "Steam",
        Img: "../TheWitcher.Portada.webp",
        stock: 10,
        description: "The Witcher 3: Wild Hunt es un videojuego de rol desarrollado por CD Projekt. Lanzado en 2015, es la tercera entrega de la serie. La historia sigue a Geralt de Rivia, un cazador de monstruos, en su búsqueda para encontrar a su hija adoptiva. Con un extenso mundo abierto, el juego ofrece una narrativa profunda, decisiones morales impactantes, un sistema de combate complejo y misiones envolventes."
    },
    {
        id: "4",
        title: "Sekiro Shadow Die Twice",
        price: 45,
        category: "Xbox",
        Img: "../Sekiro.Portada.jpg",
        stock: 10,
        description: "Sekiro: Shadows Die Twice es un juego de acción y aventuras desarrollado por FromSoftware. Lanzado en 2019, presenta un enfoque en combate de espadas y sigilo. Los jugadores asumen el papel de Sekiro, un ninja con la misión de rescatar a su señor secuestrado."
    },
    {
        id: "5",
        title: "Hollow Knight",
        price: 40,
        category: "Xbox",
        Img: "../hollow_knight-Portada.jpg",
        stock: 10,
        description: "Hollow Knight es un juego de acción y plataformas desarrollado por Team Cherry, lanzado en 2017. Este título indie destaca por su estética encantadora y su jugabilidad metroidvania."
    },
    {
        id: "6",
        title: "Hades",
        price: 20,
        category: "Xbox",
        Img: "../Hades_Pack_Portada.webp",
        stock: 10,
        description: "Hades es un juego de acción roguelike desarrollado por Supergiant Games, lanzado en 2020. Ambientado en la mitología griega, los jugadores asumen el papel de Zagreus, el hijo de Hades, en un intento por escapar del Inframundo."
    },
    {
        id: "7",
        title: "Residen evil 4 Remake",
        price: 60,
        category: "Play",
        Img: "../RE4.Portada.webp",
        stock: 10,
        description: "Resident Evil 4 es un juego de survival horror desarrollado por Capcom, lanzado en 2005. La trama sigue a Leon S. Kennedy, quien es enviado a rescatar a la hija del presidente de los Estados Unidos, Ashley Graham, de una aldea europea plagada de infectados.",
    },
    {
        id: "8",
        title: "BloodBorne",
        price: 45,
        category: "Play",
        Img: "../Bloodborne.portada.webp",
        stock: 10,
        description: "Bloodborne es un juego de acción y rol desarrollado por FromSoftware, lanzado en 2015. Ambientado en una ciudad gótica y surrealista llamada Yharnam, los jugadores asumen el papel de un cazador en busca de respuestas y enfrentándose a criaturas grotescas y horrores cósmicos"
    },
    {
        id: "9",
        title: "Grand Theft Auto V",
        price: 30,
        category: "Play",
        Img: "../gtaV-portada.jpg",
        stock: 10,
        description: "Grand Theft Auto V (GTA V) es un juego de acción y aventuras desarrollado por Rockstar North, lanzado en 2013. Ambientado en la ficticia ciudad de Los Santos, inspirada en Los Ángeles, el juego sigue las historias entrelazadas de tres criminales: Michael De Santa, Franklin Clinton y Trevor Philips"
    },
]

export const getProducts = () =>{
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}