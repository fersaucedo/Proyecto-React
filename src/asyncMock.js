const productos = [

    {

        id: '1',
        name: 'MISERY - STEPHEN KING',
        price: 17000,
        category: 'terror',
        img: "https://www.tematika.com/media/catalog/Ilhsa/Imagenes/661391.jpg",
        stock: 10,
        description: "Misery Chastain ha muerto. Paul Sheldon la ha matado. Con alivio y hasta con alegría. Misery lo ha hecho rico. Porque Misery es la heroína que ha protagonizado sus exitosos libros. Paul quiere volver a escribir. Algo diferente;algo auténtico. Pero entonces sufre un accidente y despierta inmóvil y atravesado por el dolor en una cama que no es la suya; tampoco la de un hospital. Annie Wilkes lo ha recogido y lo ha traído a su remota casa de la montaña. La buena noticia es que Annie ha sido enfermera y tiene m edicamentos analgésicos. La mala es que ha sido durante mucho tiempo la fan número uno de Paul. Y cuando descubre lo que le ha hecho a Misery Chastain; no le gusta. No le gusta en absoluto."

    },

    {
        id: '2',
        name: 'EL IMPERIO FINAL - BRANDON SANDERSON',
        price: 23000,
        category: 'fantasia',
        img: "https://www.tematika.com/media/catalog/Ilhsa/Imagenes/661388.jpg",
        stock: 12,
        description: "Durante mil años han caído cenizas del cielo. Durante mil años nada ha florecido. Durante mil años los skaa han sido esclavizados y viven en la miseria; sumidos en un miedo inevitable. Durante mil años el Lord Legislador ha reinado con poder absoluto; dominando gracias al terror; a sus poderes y a su inmortalidad; ayudado por «obligadores» e «inquisidores»; junto a la poderosa magia de la alomancia. Pero los nobles a menudo han tenido trato sexual con jóvenes skaa y; aunque la ley lo prohíbe; algunos de sus bastardos han sobrevivido y heredado los poderes alománticos: son los «nacidos de la bruma» (mistborn). Ahora; Kelsier; el «superviviente»; el único que ha logrado huir de los Pozos de Hathsin; ha encontrado a Vin; una pobre chica skaa con mucha suerte... Tal vez los dos; con el mejor equipo criminal jamás reunido; unidos a la rebelión que los skaa intentan desde hace mil años; logren cambiar el mundo y acabar con la atroz mano de hierro del Lord Legislador. Pero; ¿qué pasa si el héroe de la profecía falla?"
    },

    {
        id: '3',
        name: 'EL FARO DE LOS AMORES DORMIDOS - ANDREA LONGARELA',
        price: 13000,
        category: 'romance',
        img: "https://www.tematika.com/media/catalog/Ilhsa/Imagenes/703241.jpg",
        stock: 20,
        description: "Varela de Mar es un pueblo pequeño y tranquilo. Doscientos treinta y tres habitantes. Una playa que desaparece cuando sube la marea. Un faro abandonado.Por eso Alba no lo visita desde hace cinco años. Bueno; por eso y porque allí fue donde aprendió lo que duele el amor y la herida aún escuece.Sin embargo; en Varela también está Pelayo; su abuelo; que ha comenzado a olvidar y que ahora la necesita. Y también los recuerdos que dejó en sus calles cuando se marchó sin mirar atrás. Y Enol. El chico de las conversaciones raras; la obsesión por las mareas y que parece haber nacido en la época equivocada. Un regreso inesperado; un faro lleno de secretos y dos historias inacabadas que; quizá; se merecen la oportunidad de un nuevo final. «Alba; vive el presente. Porque un día será pasado y te atormentará no haberte dado cuenta antes de que todo acaba; incluso lo que creías que era para siempre.»"
    },

    {
        id: '4',
        name: 'LOS SIETE MARIDOS DE EVELYN HUGO - TAYLOR JENKINS REID',
        price: 13200,
        category: 'novela',
        img: "https://www.tematika.com/media/catalog/Ilhsa/Imagenes/679908.jpg",
        stock: 7,
        description: "Evelyn Hugo, el ícono de Hollywood que se ha recluido en su edad madura, decide al fin contar la verdad sobre su vida llena de glamour y de escándalos. Pero cuando elige para ello a Monique Grant, una periodista desconocida, nadie se sorprende más que la misma Monique. ¿Por qué ella? ¿Por qué ahora?   Monique no está precisamente en su mejor momento. Su marido la abandonó, y su vida profesional no avanza. Aun ignorando por qué Evelyn la ha elegido para escribir su biografía, Monique está decidida a aprovechar esa oportunidad para dar impulso a su carrera.        Convocada al lujoso apartamento de Evelyn, Monique escucha fascinada mientras la actriz le cuenta su historia. Desde su llegada a Los Ángeles en los años 50 hasta su decisión de abandonar su carrera en el espectáculo en los 80 -y, desde luego, los siete maridos que tuvo en ese tiempo- Evelyn narra una historia de ambición implacable, amistad inesperada, y un gran amor prohibido. Monique empieza a sentir una conexión muy real con la actriz legendaria, pero cuando el relato de Evelyn se acerca a su fin, resulta evidente que su vida se cruza con la de Monique de un modo trágico e irreversible."
    }

]

export const getProductos = () => {

    return new Promise ((resolve) =>{

        setTimeout (() => {

            resolve(productos)
        }, 500)

    })
}

export const getProductById = (productoId) => {
    return new Promise ((resolve) =>{
        setTimeout (() =>{
            resolve(productos.find(producto=> producto.id === productoId))
        },100)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise ((resolve) =>{
        setTimeout (() =>{
            resolve(productos.filter(producto=> producto.category === categoryId))
        },100)
    })
}