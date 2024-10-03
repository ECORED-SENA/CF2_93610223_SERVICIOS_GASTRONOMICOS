<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.pb-4.pb-md-4
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Servicio de #[em catering]
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.bloque-texto-p-1.mb-5(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/14.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El #[em catering] es la prestación de alimentos en un sitio remoto. Este servicio se refiere a la alimentación institucional o colectiva que provee comida y bebida para fiestas, eventos y presentaciones de diversa índole. En algunos casos, salones de fiestas, hoteles o empresas del sector ofrecen este servicio junto con el alquiler de sus instalaciones; en otros, existen empresas especializadas en elaborar y trasladar los alimentos al lugar que el cliente determine. 
    
    p.mb-5(data-aos="fade-right") El servicio gastronómico puede abarcar desde la comida y bebida hasta la mantelería, los cubiertos, y el personal, como cocineros, camareros y personal de limpieza tras el evento.

    Separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Aspectos fundamentales para la calidad del servicio de #[em catering]
    
    .row.mb-5(data-aos="fade-left")
      .col-lg-7
        p.mb-0 Cuando un cliente contrata un servicio gastronómico para un evento, suele centrarse en aspectos como el diseño del menú, la originalidad de los platos o las cantidades a servir. No obstante, hay aspectos que la empresa de #[em catering] debe cubrir, los cuales son esenciales para garantizar la calidad del servicio, aunque muchas veces permanecen "detrás de escena" y pasan desapercibidos.
      .col-lg-5.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/15.png",style="max-width: 506px;")
    
    .fondo-personalizado-1.f4.mb-4
      .fondo-personalizado-1__contenido.py-5
        .bg-white.borde-20.p-4(data-aos="zoom-in-out")
          SlyderA.slider-personalizado-2.pt-lg-3(tipo="b")
            .row.justify-content-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-5 Asesoramiento, planificación y dirección
                p.mb-0 El servicio debe comenzar con un análisis detallado del evento, planificando cada etapa y ofreciendo asesoramiento en la elección del menú y otros detalles.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/17.png",style="max-width: 412px;")
            .row.justify-content-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-5 Relevamiento del espacio
                p.mb-0 Personal calificado debe revisar el lugar del evento, verificando la infraestructura, maquinaria y espacio de trabajo para evitar imprevistos.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/19.png",style="max-width: 412px;")
            .row.justify-content-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-5 Armado, desarme y limpieza
                p.mb-0 Al finalizar el evento, la empresa de catering debe encargarse del desmontaje y limpieza del área, especialmente si hay más eventos el mismo día.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/20.png",style="max-width: 412px;")
            .row.justify-content-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-5 Equipamiento
                p.mb-0 El proveedor debe garantizar el suministro y transporte de mantelería, cristalería, cubiertos, vajilla, hielo y bebidas no alcohólicas.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/21.png",style="max-width: 412px;")
            .row.justify-content-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-5 Personal capacitado
                p.mb-0 El servicio gastronómico debe contar con suficiente personal capacitado, desde coordinadores hasta personal de cocina y meseros.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/22.png",style="max-width: 412px;")
            .row.justify-content-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-5 Seguros del personal
                p.mb-0 El cliente comparte responsabilidad en caso de accidentes del personal durante el evento, por lo que se requiere que el personal esté asegurado.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/23.png",style="max-width: 412px;")
            .row.justify-content-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-5 Transporte de la gastronomía
                p.mb-0 Mantener la cadena de frío es esencial. Algunos servicios de catering limitan el transporte de platos y componentes a un radio determinado de kilómetros.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/24.png",style="max-width: 412px;")
    
    Separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 2.2 Tipos de servicio de #[em catering]
    
    .row.align-items-center.mb-3(data-aos="fade-up")
      .col-md-auto.d-none.d-lg-block
        figure
          img.mx-auto(src="@/assets/curso/temas/25.svg",style="max-width: 85px;")
      .col
        p.mb-0 Existen varios tipos de servicio de #[em catering] según el tipo de evento o celebración. A continuación, se describen las características de cada uno:
    
    .fondo-personalizado-1.f1.mb-4
      .fondo-personalizado-1__contenido.pb-2.pt-5
        .row
          .col-lg-4(data-aos="fade-right")
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/26.png",style="max-width: 301px;")
          .col-lg-8(data-aos="fade-left")
            SlyderF.slider-personalizado-1(columnas="col-lg-6 py-lg-4",data-aos="flip-up")
              .borde-14.bg-white.h-100.text-center.p-4.p-lg-5.sombra-p-1
                figure.mb-4
                  img.mx-auto(src="@/assets/curso/temas/27.svg",style="max-width: 91px;")
                h4.fondo-color-sistema-n.py-1.px-4.mb-4.d-inline-flex Aperitivo
                p.mb-4 Duración: 15 a 30 minutos. 
                p.mb-0 Se calculan 2 bocados por persona.
              .borde-14.bg-white.h-100.text-center.p-4.p-lg-5.sombra-p-1
                figure.mb-4
                  img.mx-auto(src="@/assets/curso/temas/28.svg",style="max-width: 91px;")
                h4.fondo-color-sistema-n.py-1.px-4.mb-4.d-inline-flex Cóctel
                p.mb-4 Realizado entre las 11:00 y 13:00 horas, o de 19:00 a 21:00 horas. 
                p.mb-0 Se ofrecen 15 a 20 bocados por persona (dos tercios salados, un tercio dulces).
              .borde-14.bg-white.h-100.text-center.p-4.p-lg-5.sombra-p-1
                figure.mb-4
                  img.mx-auto(src="@/assets/curso/temas/29.svg",style="max-width: 91px;")
                h4.fondo-color-sistema-n.py-1.px-4.mb-4.d-inline-flex Recepción
                p.mb-4 Duración: 3 horas.
                p.mb-4 Comienza alrededor de las 20:00 horas.
                p.mb-0 Se calculan entre 18 y 20 bocados por persona.
              .borde-14.bg-white.h-100.text-center.p-4.p-lg-5.sombra-p-1
                figure.mb-4
                  img.mx-auto(src="@/assets/curso/temas/30.svg",style="max-width: 91px;")
                h4.fondo-color-sistema-n.py-1.px-4.mb-4.d-inline-flex #[em Buffet]
                p.mb-4 Duración: 3 horas.
                p.mb-0 Organizado a las 20:00 horas. Incluye variedad de platos fríos, calientes y guarniciones. 
              .borde-14.bg-white.h-100.text-center.p-4.p-lg-5.sombra-p-1
                figure.mb-4
                  img.mx-auto(src="@/assets/curso/temas/31.svg",style="max-width: 91px;")
                h4.fondo-color-sistema-n.py-1.px-4.mb-4.d-inline-flex Banquete
                p.mb-4 Duración: 6 a 8 horas.
                p.mb-0 Comienza a las 22:00 horas. Incluye aperitivos, entrada, plato principal, postre, café, brindis, mesa de dulces y cierre de fiesta.
              .borde-14.bg-white.h-100.text-center.p-4.p-lg-5.sombra-p-1
                figure.mb-4
                  img.mx-auto(src="@/assets/curso/temas/32.svg",style="max-width: 91px;")
                h4.fondo-color-sistema-n.py-1.px-4.mb-4.d-inline-flex Desayuno de trabajo
                p.mb-4 Puede ser continental o americano.
                p.mb-0 Se estiman 3 a 5 piezas por persona, por hora.
              .borde-14.bg-white.h-100.text-center.p-4.p-lg-5.sombra-p-1
                figure.mb-4
                  img.mx-auto(src="@/assets/curso/temas/33.svg",style="max-width: 91px;")
                h4.fondo-color-sistema-n.py-1.px-4.mb-4.d-inline-flex #[em Brunch]
                p.mb-4 Combinación de desayuno y almuerzo.
                p.mb-0 Generalmente servido entre las 11:00 y 14:00 horas.
              .borde-14.bg-white.h-100.text-center.p-4.p-lg-5.sombra-p-1
                figure.mb-4
                  img.mx-auto(src="@/assets/curso/temas/34.svg",style="max-width: 91px;")
                h4.fondo-color-sistema-n.py-1.px-4.mb-4.d-inline-flex #[em Vernissage]
                p.mb-4 Se realiza en inauguraciones de muestras pictóricas.
                p.mb-0 Se ofrece champagne, vino y 2 bocados por persona.
              .borde-14.bg-white.h-100.text-center.p-4.p-lg-5.sombra-p-1
                figure.mb-4
                  img.mx-auto(src="@/assets/curso/temas/35.svg",style="max-width: 91px;")
                h4.fondo-color-sistema-n.py-1.px-4.mb-4.d-inline-flex Vino de honor
                p.mb-4 Celebrado entre las 11:30 y 12:30 horas o de 18:00 a 19:00 horas.
                p.mb-0 Se ofrecen vinos dulces (como oporto o jerez) y 2 bocados por persona.
              .borde-14.bg-white.h-100.text-center.p-4.p-lg-5.sombra-p-1
                figure.mb-4
                  img.mx-auto(src="@/assets/curso/temas/36.svg",style="max-width: 91px;")
                h4.fondo-color-sistema-n.py-1.px-4.mb-4.d-inline-flex #[em Coffee break]
                p.mb-4 Pausa de 15 a 30 minutos.
                p.mb-0 Se ofrecen café, té, jugos, y bocados salados y dulces.
              .borde-14.bg-white.h-100.text-center.p-4.p-lg-5.sombra-p-1
                figure.mb-4
                  img.mx-auto(src="@/assets/curso/temas/37.svg",style="max-width: 91px;")
                h4.fondo-color-sistema-n.py-1.px-4.mb-4.d-inline-flex Servicio infantil
                p.mb-4 Adaptado a fiestas infantiles con alimentos tradicionales.
                p.mb-0 Se cuida la presentación, calidad, limpieza y se incluyen actividades según lo requerido por el cliente.

    Separador

    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 2.3 Componentes del servicio de #[em catering]
    
    .row.mb-5(data-aos="flip-up")
      .col-lg-8
        p.mb-0 El director de banquetes, conocido como #[em Maître], es responsable de la organización y dirección del evento. Debe prever todo lo necesario en cuanto a personal, material y mobiliario, y establecer planos o croquis para la disposición de las mesas. También se encarga de dirigir el montaje #[em (mise en place)], la recepción de invitados y el servicio.
      .col-lg-4.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/38.png",style="max-width: 400px;")

    .fondo-personalizado-1.f4.mb-5
      .fondo-personalizado-1__contenido.py-5
        .bg-white.borde-20.p-4(data-aos="zoom-in-out")
          PasosB.pasos-personalizado-1
            .row.justify-content-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-5 Búsqueda de banquetes y eventos
                p.mb-0 Esta tarea recae en el responsable de relaciones públicas, quien mantiene una red de contactos en el mundo de los negocios y busca constantemente nuevos clientes, utilizando cartas o circulares que ofrezcan servicios, menús e invitaciones al establecimiento.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/39.png",style="max-width: 400px;")
            .row.justify-content-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-5 Personal
                p.mb-0 Las empresas de catering cuentan con personal fijo y empleados eventuales. El director de eventos es responsable de presentar y vender los servicios del negocio y asegurar la disponibilidad de personal adecuado para cada evento, incluyendo camareros y cocineros.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/41.png",style="max-width: 400px;")
            .row.justify-content-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-5 Material y lencería
                p.mb-0 Se utiliza el mismo material que en los restaurantes, como platería, vajilla y cristalería, con excepción de platos de servicio más grandes. También se requieren bandejas para aperitivos, café, consomé o crema, además de accesorios decorativos como candelabros y paneras de fruta.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/42.png",style="max-width: 400px;")
            .row.justify-content-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-5 Mobiliario
                p.mb-0 El tipo de mobiliario varía según el evento. Pueden utilizarse tableros de 1.80 m por 90 cm, mesas redondas de 1.20 a 1.40 m de diámetro o tableros ovalados para mesas de prestigio. Si no se cuenta con suficiente mobiliario, puede ser alquilado.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/43.png",style="max-width: 400px;")
            .row.justify-content-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-5 Previsión del personal
                p.mb-0 El número de empleados varía según el evento:
                ul.lista-ul
                  li.d-flex.mb-1
                    i.fas.fa-circle.c-color-sistema-o
                    span Banquete tradicional: un #[em Maître] por cada 40 o 50 comensales, un jefe de rango o camarero por cada 10 o 15 personas, y un #[em sommelier] por cada 20 o 25 personas.
                  li.d-flex.mb-1
                    i.fas.fa-circle.c-color-sistema-o
                    span #[em Lunch] clásico con canapés: un jefe de rango por cada 35 personas.
                  li.d-flex.mb-1
                    i.fas.fa-circle.c-color-sistema-o
                    span #[em Buffet] asistido: un jefe de rango o camarero por cada 20 o 25 personas.

              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/44.png",style="max-width: 400px;")
    
    p.mb-5(data-aos="fade-left") Una vez determinada la composición del equipo, es importante registrar los nombres y salarios de los extras contratados, ya que estos se pagan al final del servicio.

    Separador

    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 2.4 Confección de menús
    
    .fondo-personalizado-1.top-2.bottom-1.f3
      .fondo-personalizado-1__contenido
        .row.mb-5
          .col-lg-7(data-aos="fade-right")
            p.mb-4 La creación de menús para banquetes es fundamental, ya que la elección y precio de estos menús influyen directamente en el éxito de la contratación del servicio. Contar con menús estándar es una excelente estrategia para presentar opciones a los clientes cuando solicitan información sobre el servicio.

            p.mb-0 La variedad de menús estándar es:
          .col-lg-5.order-first.order-lg-last(data-aos="fade-left")
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/45.png",style="max-width: 506px;")
        
        .row.justify-content-center.align-items-center.pt-4(data-aos="zoom-in-out")
          .col-lg-4
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/50.png",style="max-width: 402px;")
          .col-lg-3
            .fondo-color-secundario.borde-27.p-3.px-5.mb-2
              .d-flex.align-items-center
                i.fas.fa-circle.texto-p-2.c-color-acento-contenido.me-2
                span #[em Coffee break]
            .fondo-color-sistema-j.borde-27.p-3.px-5.mb-2
              .d-flex.align-items-center
                i.fas.fa-circle.texto-p-2.c-color-acento-contenido.me-2
                span Desayunos
            .fondo-color-secundario.borde-27.p-3.px-5.mb-2
              .d-flex.align-items-center
                i.fas.fa-circle.texto-p-2.c-color-acento-contenido.me-2
                span Menú emplatados
            .fondo-color-sistema-j.borde-27.p-3.px-5.mb-2
              .d-flex.align-items-center
                i.fas.fa-circle.texto-p-2.c-color-acento-contenido.me-2
                span Menú #[em buffet]
            .fondo-color-secundario.borde-27.p-3.px-5.mb-2
              .d-flex.align-items-center
                i.fas.fa-circle.texto-p-2.c-color-acento-contenido.me-2
                span Menú de bocadillos o picada
            .fondo-color-sistema-j.borde-27.p-3.px-5.mb-2
              .d-flex.align-items-center
                i.fas.fa-circle.texto-p-2.c-color-acento-contenido.me-2
                span Menú temático

        .titulo-decorativo.my-5(data-aos="fade-right")
          .cont-figura
            img(src="@/assets/curso/temas/img-tit-dec.svg")
          .cont-text 
            h3 Consideraciones importantes
        
        .row.mb-4
          .col-lg-7(data-aos="fade-right")
            p.mb-4 La confección de menús tipo estándar es responsabilidad del Encargado de Banquetes, quien trabajará en conjunto con el jefe de cocina para analizar el costo, la viabilidad de ejecución y el potencial del servicio. Juntos, deben evaluar qué productos son más rentables según su precio, disponibilidad en el mercado o porque requieren ser utilizados antes de que se prolongue su almacenamiento.
            p.mb-0 Si los menús estándar no se ajustan a las necesidades o gustos del cliente en términos de calidad o precio, es recomendable ajustarlos en colaboración directa con el cliente, asegurando así su satisfacción.

          .col-lg-5.order-first.order-lg-last(data-aos="fade-left")
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/46.png",style="max-width: 506px;")
    
    .fondo-personalizado-1.f3
      .fondo-personalizado-1__contenido.pb-5.pt-2
        p.mb-5(data-aos="fade-right") Las normas para la confección de menús son:
        
        .row(data-aos="fade-left")
          .col-lg-4.mb-4
            .borde-23.fondo-color-sistema-j.p-4.h-100.text-center
              figure.mb-4
                img.mx-auto(src="@/assets/curso/temas/47.svg",style="max-width: 90px;")
              h4.fondo-color-secundario.py-1.px-3.d-inline-flex Buscar equilibrio
              p.mb-5 Ofrecer una selección que sea aceptada por todos los asistentes, considerando la diversidad en gustos, edades y condiciones de salud.
          .col-lg-4.mb-4
            .borde-23.fondo-color-sistema-m.p-4.h-100.text-center
              figure.mb-4
                img.mx-auto(src="@/assets/curso/temas/48.svg",style="max-width: 90px;")
              h4.fondo-color-sistema-p.py-1.px-3.d-inline-flex Considerar religión y nacionalidad
              p.mb-5 Incluir platos típicos del país anfitrión en eventos internacionales, pero evitando opciones demasiado fuertes o que puedan afectar la salud de los invitados.
          .col-lg-4.mb-4
            .borde-23.fondo-color-sistema-m.p-4.h-100.text-center
              figure.mb-4
                img.mx-auto(src="@/assets/curso/temas/49.svg",style="max-width: 90px;")
              h4.fondo-color-sistema-p.py-1.px-3.d-inline-flex Evitar platos complejos de última hora
              p.mb-5 Preparar los platos con suficiente antelación para que lleguen a la mesa en su punto adecuado, evitando la necesidad de elaborarlos en el momento del servicio, lo que garantiza un servicio eficiente.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
