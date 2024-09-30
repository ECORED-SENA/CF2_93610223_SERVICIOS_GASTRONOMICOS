<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Servicio y <em>catering</em>',
      titulo: 'Cuestionario',
      introduccion:
        'Identificar los aspectos clave relacionados con el servicio al cliente, las características del buen servicio, y los componentes y tipos de <em>catering</em>.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el objetivo supremo de una empresa en términos de servicio?',
          imagen: require('@/assets/componentes/pregunta_1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Lograr la mayor satisfacción del cliente.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Aumentar las ventas.', esCorrecta: false },
            { id: 'c', texto: 'Ampliar el mercado.', esCorrecta: false },
            { id: 'd', texto: 'Reducir costos operativos.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Cuál de las siguientes es una característica del servicio?',
          imagen: require('@/assets/componentes/pregunta_2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Intangible.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Acumulable.', esCorrecta: false },
            { id: 'c', texto: 'Permanente.', esCorrecta: false },
            { id: 'd', texto: 'Separado del producto.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué acción es clave para brindar un buen servicio al cliente?',
          imagen: require('@/assets/componentes/pregunta_3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cortesía.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Ignorar al cliente ocupado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Prometer más de lo que puedes cumplir.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Dar información incompleta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Cuál es uno de los diez mandamientos del servicio?',
          imagen: require('@/assets/componentes/pregunta_4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cumple todo lo que prometas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El cliente es importante si es recurrente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'No hay que hacer lo imposible.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El cliente no siempre tiene la razón.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué aspecto fundamental debe garantizar un servicio de catering?',
          imagen: require('@/assets/componentes/pregunta_1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mantener la cadena de frío de los alimentos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La cantidad exacta de invitados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Uso exclusivo de cocinas externas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No ofrecer bebidas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Cuál de los siguientes es un tipo de <em>catering</em>?',
          imagen: require('@/assets/componentes/pregunta_2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Banquete.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reunión de negocio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Fiesta informal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Conferencia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué se debe evitar al confeccionar un menú?',
          imagen: require('@/assets/componentes/pregunta_3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Preparar platos que se confeccionen al momento.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Considerar los gustos de los invitados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ofrecer platos típicos del lugar.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Incluir opciones para dietas especiales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Qué se debe hacer cuando hay un problema en el servicio?',
          imagen: require('@/assets/componentes/pregunta_4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Resolverlo rápidamente y con aplomo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Ignorarlo y continuar.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Delegarlo a otro empleado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Pedir disculpas sin resolverlo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué opción representa un componente del servicio de <em>catering</em>?',
          imagen: require('@/assets/componentes/pregunta_1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Personal, material y mobiliario.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Solo los cocineros y meseros.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Solamente la comida y bebida.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solo el lugar del evento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '<b>¿Qué rol tiene el director de banquetes en el <em>catering</em>?</b>',
          imagen: require('@/assets/componentes/pregunta_2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Coordinar personal, material y la disposición del mobiliario.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reservar los salones para los eventos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Organizar los menús exclusivamente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solo atender a los clientes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
