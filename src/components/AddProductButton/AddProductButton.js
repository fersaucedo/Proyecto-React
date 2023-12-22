import { db } from '../../config/firebase'
import { collection, addDoc } from 'firebase/firestore';

//boton para reabastecer el stock 
const AddProductButton = () => {
    const addProductsToFirestore = async () => {
        try {
            const productos = [

                // Terror

                {
                    name: 'MISERY - STEPHEN KING',
                    price: 17000,
                    category: 'Terror',
                    img: "https://www.tematika.com/media/catalog/Ilhsa/Imagenes/661391.jpg",
                    stock: 10,
                    description: "Misery Chastain ha muerto. Paul Sheldon la ha matado. Con alivio y hasta con alegría. Misery lo ha hecho rico. Porque Misery es la heroína que ha protagonizado sus exitosos libros. Paul quiere volver a escribir. Algo diferente;algo auténtico. Pero entonces sufre un accidente y despierta inmóvil y atravesado por el dolor en una cama que no es la suya; tampoco la de un hospital. Annie Wilkes lo ha recogido y lo ha traído a su remota casa de la montaña. La buena noticia es que Annie ha sido enfermera y tiene m edicamentos analgésicos. La mala es que ha sido durante mucho tiempo la fan número uno de Paul. Y cuando descubre lo que le ha hecho a Misery Chastain; no le gusta. No le gusta en absoluto."
                },

                {

                    name: 'DRACULA - BRAM STOKER',
                    price: 9650,
                    category: 'Terror',
                    img: "https://data.livriz.com/media/MediaSpace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/1507fb38-a7bf-4ac1-aa10-ab9748488547/9789878304397.jpg",
                    stock: 13,
                    description: "El Drácula de Bram Stoker, una de las obras maestras de la novela gótica, refleja la lucha entre el bien y el mal, encarnado este último en la figura de un vampiro, el conde Drácula, sin duda el más conocido y de mayor influencia en la literatura, el cine, el teatro y la televisión. Escrita de manera epistolar y ambientada en Whitby, Transilvania y Londres, supuso un éxito arrollador que ha permitido su circulación continua, edición tras edición, desde el año de su primera publicación (1897) , y su traducción a casi todos los idiomas. Las leyendas de vampiros han fascinado al ser humano en multitud de pueblos y culturas diferentes a lo largo de toda su historia, desde el confín de los tiempos ha sta nuestros días. Ahora podrán disfrutar del vampiro por excelencia: el conde Drácula."

                },

                {

                    name: 'EL PROFETA - AMANDA STEVENS',
                    price: 22199,
                    category: 'Terror',
                    img: "https://data.livriz.com/media/MediaSpace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/cca97616-9f9b-4a5a-9f67-21c212b70dc3/0246a179-1673-4985-bb94-1d8d93af9891.jpg",
                    stock: 17,
                    description: "Amelia ha regresado a Charleston despues de haberselas visto con la muerte en Asher Falls. Se ha dado cuenta de que romper las reglas que su padre le impuso supone pagar un precio muy alto, y que podría tener consecuencias incontrolables.  Su mayor problema ahora es mantenerse alejada de John Devlin, un hombre que la fascina y aterra a partes iguales. Aunque sus sentimientos por el son innegables, no puede tenerle cerca mientras sigan acechándolo los fantasmas de su esposa e hija.  Sin embargo, Amelia pronto se dará cuenta de que ella tiene un problema mucho mayor: esta vez hay un fantasma que la acecha a ella. El fallecido oficial de policía Robert Freemon, a quien asesinaron con un tiro por la espalda, le pide ayuda para encontrar a su asesino?."

                },
                {

                    name: 'LOS CAZADORES - LUCIANA VARISE',
                    price: 9000,
                    category: 'Terror',
                    img: "https://data.livriz.com/media/MediaSpace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/5c6b7099-752c-47eb-ac0e-3daaee88903a/9789878916071.jpg",
                    stock: 13,
                    description: "Los tres hermanos Navarro O`Campo tenían el futuro asegurado. Los más populares en su escuela de San Isidro, prometedores jugadores de rugby y hábiles en la cacería, la tradición familiar… hasta que Alex se mete en sus vidas.No es un caso de bullying que termina mal: es una perversión total que desencadena una carnicería."

                },
                {

                    name: 'CEMENTERIO DE ANIMALES - STEPHEN KING',
                    price: 21499,
                    category: 'Terror',
                    img: "https://data.livriz.com/media/MediaSpace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/272cb3ea-2c8a-4753-b560-24e8c46dc163/9789877253740.jpg",
                    stock: 5,
                    description: "Church estaba allí otra vez, como Louis Creed temía y deseaba. Porque su hijita Ellie le había encomendado que cuidara del gato, y Church había muerto atropellado. Louis lo había comprobado: el gato estaba muerto, incluso lo había enterrado más allá del cementerio de animales. Sin embargo, Chruch había regresado, y sus ojos eran más crueles y perversos que antes. Pero volvía a estar allí y Ellie no lo lamentaría. Louis Creed sí lo lamentaría. Porque más allá del cementerio de animales, incluso más allá de la valla de troncos que nadie se atrevía a traspasar y de los cuarenta y cinco escalones, el maligno poder del antiguo cementerio indio lo reclamaba con macabra avidez…"

                },


                // Fantasia

                {

                    name: 'EL IMPERIO FINAL - BRANDON SANDERSON',
                    price: 23000,
                    category: 'Fantasia',
                    img: "https://www.tematika.com/media/catalog/Ilhsa/Imagenes/661388.jpg",
                    stock: 12,
                    description: "Durante mil años han caído cenizas del cielo. Durante mil años nada ha florecido. Durante mil años los skaa han sido esclavizados y viven en la miseria; sumidos en un miedo inevitable. Durante mil años el Lord Legislador ha reinado con poder absoluto; dominando gracias al terror; a sus poderes y a su inmortalidad; ayudado por «obligadores» e «inquisidores»; junto a la poderosa magia de la alomancia. Pero los nobles a menudo han tenido trato sexual con jóvenes skaa y; aunque la ley lo prohíbe; algunos de sus bastardos han sobrevivido y heredado los poderes alománticos: son los «nacidos de la bruma» (mistborn). Ahora; Kelsier; el «superviviente»; el único que ha logrado huir de los Pozos de Hathsin; ha encontrado a Vin; una pobre chica skaa con mucha suerte... Tal vez los dos; con el mejor equipo criminal jamás reunido; unidos a la rebelión que los skaa intentan desde hace mil años; logren cambiar el mundo y acabar con la atroz mano de hierro del Lord Legislador. Pero; ¿qué pasa si el héroe de la profecía falla?"

                },

                {

                    name: 'HP1PIEDRA FILOSOFAL (CS)(TB)(2020) - J. K. ROWLING',
                    price: 9999,
                    category: 'Fantasia',
                    img: "https://www.tematika.com/media/catalog/Ilhsa/Imagenes/676274.jpg",
                    stock: 20,
                    description: "Harry Potter se ha quedado huérfano y vive en casa de sus abominables tíos y del insoportable primo Dudley. Se siente muy triste y solo; hasta que un buen día recibe una carta que cambiará su vida para siempre. En ella le comunican que ha sido aceptado como alumno en el colegio interno Hogwarts de magia y hechicería. A partir de ese momento; la suerte de Harry da un vuelco espectacular. En esa escuela tan especial aprenderá encantamientos; trucos fabulosos y tácticas de defensa contra las malas artes. Se convertirá en el campeón escolar de quidditch; especie de fútbol aéreo que se juega montado sobre escobas; y hará un puñado de buenos amigos... aunque también algunos temibles enemigos. Pero; sobre todo; conocerá los secretos que le permitirán cumplir con su destino. Pues; aunque no lo parezca a primera vista; Harry no es un chico común y corriente. ¡Es un verdadero mago!."

                },

                {

                    name: 'LA SOMBRA DE LOS DIOSES - JOHN GWYNNE',
                    price: 11000,
                    category: 'Fantasia',
                    img: "https://www.tematika.com/media/catalog/Ilhsa/Imagenes/704839.jpg",
                    stock: 10,
                    description: "The Witcher y Vikingos se funden en esta saga de fantasía inspirada en la civilización nórdica del aclamado escritor inglés John Gwynne que emocionará a sus fans y será un punto de partida perfecto para nuevos lectores.  Ha pasado un siglo desde que los dioses lucharon y se extinguieron. Ahora solo quedan sus huesos; que prometen un gran poder a aquellos lo suficientemente valientes como para buscarlos.  Mientras los susurros de guerra resuenan en la tierra de Vigrið; el destino sigue los pasos de tres guerreros: una cazadora en una búsqueda peligrosa; una mujer noble que busca la fama en la batalla y un esclavo que busca venganza entre los mercenarios conocidos como los Hermanos de Sangre.        Los tres darán forma al destino del mundo; ya que una vez más cae bajo la sombra de los dioses."

                },

                {

                    name: 'MURTAGH EL MUNDO DE ERAGON - PAOLINI CHRISTOPHER',
                    price: 19999,
                    category: 'Fantasia',
                    img: "https://www.tematika.com/media/catalog/Ilhsa/Imagenes/710655.jpg",
                    stock: 9,
                    description: "El mundo ya no es un lugar seguro para Murtagh y su dragón; Thorn. Un malvado rey ha sido derrocado y deben afrontar las consecuencias del papel que ellos desempeñaron en su reinado de terror. Ahora son odiados y están solos; apartados de la sociedad. Por todos los territorios; voces apagadas susurran sobre tierra quebradiza y hay un leve olor a azufre en el aire. Murtagh siente que algo oscuro acecha en las sombras de Alagaësia. Así comienza un viaje épico a tierras familiares y desconocidas; donde Murtagh y Thorn deberán usar todas las armas de su arsenal; desde el ingenio hasta la fuerza física; para encontrar y vencer a una misteriosa bruja que oculta terribles secretos. En esta apasionante novela protagonizada por uno de los personajes más populares de la maravillosa serie de Christopher Paolini; un Jinete de Dragón deberá descubrir lo que él representa en un mundo que lo ha abandonado. Murtagh es el libro perfecto para adentrarse en el universo de Eragon por primera vez... o regresar a él felices."

                },

                {

                    name: 'UNA MAGIA MAS OSCURA - SCHWAB, V. E.',
                    price: 12150,
                    category: 'Fantasia',
                    img: "https://www.tematika.com/media/catalog/Ilhsa/Imagenes/707293.jpg",
                    stock: 10,
                    description: "Kell es uno de los últimos Antari; magos que poseen una extraña y codiciada habilidad para viajar entre varios Londres paralelos: Rojo; Gris; Blanco y; hace mucho tiempo; Negro. Kell creció en Arnes; el Londres Rojo; y sirve de manera oficial al imperio de Maresh como embajador; lo que significa que viaja entre los frecuentes y sangrientos cambios de régimen en el Londres Blanco y en la corte de George III en el Londres más aburrido; el que ya no tiene nada de magia. De manera extraoficial; Kell es un contrabandista que atiende a las personas que están dispuestas a pagar incluso por los atisbos más pequeños de un mundo que nunca verán. Es un pasatiempo desafiante con consecuencias peligrosas; que Kell ahora está sufriendo en carne propia. Cuando un intercambio sale mal; Kell escapa al Londres Gris y se encuentra con Delilah Bard; una ladrona con grandes aspiraciones. Primero le roba; luego lo salva de un enemigo mortal y al final lo obliga a llevarla a otro mundo para vivir una aventura de verdad. Ahora se avecina una magia peligrosa; y la traición acecha en cada rincón. Para salvar todos los mundos; primero deberán hacer todo lo posible para sobrevivir."

                },

                // Romance

                {

                    name: 'EL FARO DE LOS AMORES DORMIDOS - ANDREA LONGARELA',
                    price: 13000,
                    category: 'Romance',
                    img: "https://www.tematika.com/media/catalog/Ilhsa/Imagenes/703241.jpg",
                    stock: 20,
                    description: "Varela de Mar es un pueblo pequeño y tranquilo. Doscientos treinta y tres habitantes. Una playa que desaparece cuando sube la marea. Un faro abandonado.Por eso Alba no lo visita desde hace cinco años. Bueno; por eso y porque allí fue donde aprendió lo que duele el amor y la herida aún escuece.Sin embargo; en Varela también está Pelayo; su abuelo; que ha comenzado a olvidar y que ahora la necesita. Y también los recuerdos que dejó en sus calles cuando se marchó sin mirar atrás. Y Enol. El chico de las conversaciones raras; la obsesión por las mareas y que parece haber nacido en la época equivocada. Un regreso inesperado; un faro lleno de secretos y dos historias inacabadas que; quizá; se merecen la oportunidad de un nuevo final. «Alba; vive el presente. Porque un día será pasado y te atormentará no haberte dado cuenta antes de que todo acaba; incluso lo que creías que era para siempre.»"
                },

                {

                    name: 'LAS PELIGROSAS DAMAS DE LA SOCIEDAD WISTERIA - HOLTON INDIA',
                    price: 8899,
                    category: 'Romance',
                    img: "https://www.tematika.com/media/catalog/Ilhsa/Imagenes/712404.jpg",
                    stock: 10,
                    description: "En este fantástico romance histórico; una ladrona debe salvar a su tía de un pirata enloquecido y de su encantador y peligroso secuaz. Cecilia Bassingthwaite es la dama victoriana ideal.   También es una ladrona. Al igual que las demás peligrosas damas de la sociedad Wisteria; vuela por Inglaterra; bebe té; chantajea a sus amigos y tiene unos métodos particulares para adquirir tesoros. Claro; tiene un pasado oscuro y traumático; y una tía controladora; pero en general lleva una vida agradable. Hasta que aparecen los hombres. Y cuando la sociedad Wisteria está en peligro; Cecilia se verá obligada a trabajar en equipo con un apuesto criminal para salvar a las mujeres que la criaron; con la esperanza de demostrarles; de una vez por todas; que es tan canalla como el resto de ellas y así lograr su merecido ascenso.        Las peligrosas damas de la sociedad Wisteria es una mezcla completamente deliciosa de humor; romance histórico; aventura fantástica y té; mucho té."
                },
                {

                    name: 'REVELACION, LA (ALMAS PERDIDAS 1) - GODOY ARIANA',
                    price: 11799,
                    category: 'Romance',
                    img: "https://www.tematika.com/media/catalog/Ilhsa/Imagenes/704505.jpg",
                    stock: 19,
                    description: "Ella es un vampiro convertido. Él es un vampiro purasangre. Ella aún se aferra a su humanidad; él es un asesino frío. Sus mundos son completamente diferentes; son enemigos naturales. ¿Qué pasará cuando sus caminos se crucen? ¿Y si para ella; él es la clave para descubrir la verdad?"
                },

                {

                    name: 'CORRE, CORAZON - ZIMMERMAN FLORENCIA',
                    price: 7599,
                    category: 'Romance',
                    img: "https://www.tematika.com/media/catalog/Ilhsa/Imagenes/704498.jpg",
                    stock: 10,
                    description: "Malena es una chica tímida; insegura y sin suerte en el amor. Estudia Letras en la universidad con la esperanza de cambiar el rumbo de su vida. En una de sus materias tiene un profesor que ocupa toda su atención: autor best seller; runner y muy; muy encantador. Sin darse cuenta ambos se verán envueltos en un romance fogoso y obsesivo que esconde demasiados secretos."
                },

                {

                    name: 'YO BESE A SHARA WHEELER - MCQUISTON CASEY',
                    price: 6179,
                    category: 'Romance',
                    img: "https://www.tematika.com/media/catalog/Ilhsa/Imagenes/700806.jpg",
                    stock: 10,
                    description: "Chloe Green está a un paso de la victoria. Después de que sus madres la obligaran a mudarse; se ha pasado los últimos cuatro años lidiando con unos compañeros chismosos de la secundaria. ¿La razón? Llegar a ser la primera de su clase. ¿Su única rival? La popular Shara Wheeler; reina del baile e hija ejemplar del director de la escuela. Un mes antes de la graduación; Shara besa a Chloe y desaparece. Y resulta que también besó a Smith; con quien sale desde hace tiempo; y a su vecino Rory; que está loco por ella. No hay nada en común entre ellos; pero juntos tendrán que desentrañar la madeja de pistas para encontrar a Shara. Mientras persigue a un fantasma a través de fiestas; acertijos y misterios; Chloe empieza a sospechar que ese pueblo tal vez esconda algo más. Y quizás (es probable que no; pero puede que sí) también Shara oculte un secreto."
                },

                // Novela

                {

                    name: 'LOS SIETE MARIDOS DE EVELYN HUGO - TAYLOR JENKINS REID',
                    price: 13200,
                    category: 'Novela',
                    img: "https://www.tematika.com/media/catalog/Ilhsa/Imagenes/679908.jpg",
                    stock: 7,
                    description: "Evelyn Hugo, el ícono de Hollywood que se ha recluido en su edad madura, decide al fin contar la verdad sobre su vida llena de glamour y de escándalos. Pero cuando elige para ello a Monique Grant, una periodista desconocida, nadie se sorprende más que la misma Monique. ¿Por qué ella? ¿Por qué ahora?   Monique no está precisamente en su mejor momento. Su marido la abandonó, y su vida profesional no avanza. Aun ignorando por qué Evelyn la ha elegido para escribir su biografía, Monique está decidida a aprovechar esa oportunidad para dar impulso a su carrera.        Convocada al lujoso apartamento de Evelyn, Monique escucha fascinada mientras la actriz le cuenta su historia. Desde su llegada a Los Ángeles en los años 50 hasta su decisión de abandonar su carrera en el espectáculo en los 80 -y, desde luego, los siete maridos que tuvo en ese tiempo- Evelyn narra una historia de ambición implacable, amistad inesperada, y un gran amor prohibido. Monique empieza a sentir una conexión muy real con la actriz legendaria, pero cuando el relato de Evelyn se acerca a su fin, resulta evidente que su vida se cruza con la de Monique de un modo trágico e irreversible."
                },

                {

                    name: 'UNA HERENCIA EN JUEGO - BARNES, JENNIFER LYNN',
                    price: 16299,
                    category: 'Novela',
                    img: "https://www.tematika.com/media/catalog/Ilhsa/Imagenes/698700.jpg",
                    stock: 7,
                    description: "Cuarenta y seis mil doscientos millones de dólares -pensé. El corazón me retumbaba contra las costillas y tenía la boca tan seca como el papel de lija-. Tobias Hawthorne tenía cuarenta y seis mil doscientos millones de dólares. Tobias Hawthorne no se lo había dejado todo a sus nietos. No se lo había dejado todo a sus hijas. Los números de esa ecuación no salían.' Y mi cerebro se paró en seco. Me zumbaban los oídos. ¿Por qué a mí? ¿Por qué era yo la principal heredera de su fortuna? Uno por uno; todos los presentes se voltearon a verme."
                },

                {

                    name: 'BAD BOYS - AVILA LUIS',
                    price: 11799,
                    category: 'Novela',
                    img: "https://www.tematika.com/media/catalog/Ilhsa/Imagenes/709180.jpg",
                    stock: 3,
                    description: "Para Tracy; los días en el instituto son parte de una rutina sin sobresaltos. Las advertencias de su madre para protegerla de los pe ligros que acechan dieron buenos resultados: Tracy es aplicada; responsable y prudente. Hasta esa noche en la que llega por primera vez a una fiesta Craxxxy y conoce a Theo; uno de los líderes del temible grupo Bad Boys. La atracción es instantánea. Y ese fuego inicial pronto se convierte en una hoguera que amenaza con destruir todo a su paso. «Bad Boys es una novela que sin duda pondría a Lulú a abanicarse la cara. Está llena de chicos bellos y sensuales que son perfectos para las amantes de los libros con toques picantes». Eva Muñoz; autora de la saga Pecados placenteros «Bad Boys es un dark romance poco convencional. Parar de leerlo fue prácticamente imposible porque a cada página que leía; la necesidad de saber qué sucedería después se volvió desesperante. Pocas historias me han hecho tener pequeños ataques de ira y frustración seguidos de risas tontas y suspiros indebidos por un protagonista malo e incorrecto. La historia me trasladó a mi juventud; a esa época en la que era una adolescente rebelde encaprichada con un chico que a todas luces no conviene; pero que se te mete debajo de la piel y no puedes dejar de perseguirlo. Las intrigas y los misterios que rodean a este grupo de chicos problemáticos sazonan el romance tóxico de los protagonistas. Es una historia cruda; llena de amistades peligrosas; amores desastrosos y decisiones erradas; como la vida misma. Un sube y baja de sentimientos completamente adictivo». Yoshíe M. C"
                },

                {

                    name: 'LAS AVENTURAS DE TOM SAWYER - MARK TWAIN',
                    price: 7860,
                    category: 'Novela',
                    img: "https://www.tematika.com/media/catalog/Ilhsa/Imagenes/708217.jpg",
                    stock: 30,
                    description: "Las travesuras y el caos abundan donde quiera que vaya Tom Sawyer. Aburrido de la escuela; Tom; junto con sus amigos Huckleberry Finn y Joe Harper; emprenden una vida de aventuras. Desde engañar a sus compañeros locales para que completen sus tareas domésticas hasta adquirir hábilmente un premio de la escuela dominical para impresionar al padre de la chica de su interés; Tom Sawyer encarna el espíritu ingenioso y animado de los jóvenes del siglo XIX. En este libro lleno de acción; emprenderemos un viaje de lo más variado con Tom Sawyer: desde ser testigo de asesinato en un cementerio hasta vivir como piratas; tener un romance con Becky Thatcher e; incluso; asistir a su propio funeral. Las aventuras de Tom Sawyer es un gran clásico estadounidense y una verdadera obra maestra de la literatura americana."
                },

                {

                    name: 'HECHIZOS DE MEDIANOCHE - GRIFFIN RACHEL',
                    price: 10050,
                    category: 'Novela',
                    img: "https://www.tematika.com/media/catalog/Ilhsa/Imagenes/710577.jpg",
                    stock: 7,
                    description: "El destino de Tana Fairchild nunca ha estado en duda. Su vida lleva planeada desde que nació: debe casarse con Landon; el hijo del gobernador; para asegurar una alianza sin precedentes entre los brujos de la isla en la que vive y los habitantes del continente; que la ven como una amenaza. Durante años; el aquelarre de Tana ha apaciguado a quienes temen sus poderes liberando la mayor parte de su magia hacia el océano en cada luna llena. Sin embargo; cuando Tana no puede asistir al ritual de medianoche ¿un error que podría costarle la vida¿ no hay nadie a quien pueda recurrir¿ hasta que conoce a Wolfe. Wolfe afirma formar parte de un aquelarre que practica la magia oscura; lo que lo convierte en una de las pocas personas capaz de ayudarla. Pero se niega a permitir que Tana libere sus poderes hacia el océano y; en su lugar; le enseña su magia prohibida. Una magia que la hace sentirse poderosa; llena de vida. A medida que el mar se vuelve más violento; el aquelarre de Tana pierde el control que tenía sobre las corrientes; un peligro que podría destruir la alianza y acabar con su isla. Entonces deberá escoger entre el amor y el deber; entre la lealtad a su pueblo y a su corazón. Casarse con Landon le aseguraría la paz que su aquelarre necesita; pero perder a Wolfe y a su magia salvaje podría costarle todo lo demás «Terriblemente encantadora y oscura. Hechizos de medianoche ¿con su romance prohibido y su preciosa ambientación¿ sin lugar a dudas te hechizará». KERRI MANISCALCO; autora best seller #1 del New York Times de El reino de los malditos."
                }

            ]

            const productsRef = collection(db, 'productos');

            // Iterar sobre cada producto y agregarlo a Firestore
            for (const product of productos) {
                await addDoc(productsRef, product);
            }

            console.log('Productos agregados correctamente a la colección "productos".');

        } catch (error) {
            console.error('Error al agregar los productos:', error);
        }
    };

    return (
        <div className='cargando'>
            <button className='btn btn-success' onClick={addProductsToFirestore}>Agregar Productos a Firestore</button>
        </div>
    );
};

export default AddProductButton;
