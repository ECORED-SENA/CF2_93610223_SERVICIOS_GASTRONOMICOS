<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.pb-3.pb-md-0
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 El servicio
    
    .fondo-personalizado-1.size-full.med.top-1.f2.mb-5
      .fondo-personalizado-1__contenido
        .row.mb-5
          .col-lg-7(data-aos="fade-right")
            p.mb-4 En la actualidad, en un entorno de alta competitividad, es indiscutible que la calidad del servicio es un factor clave para la fidelización de los clientes. Las empresas se esfuerzan cada día por mejorar este aspecto; sin embargo, las buenas intenciones no son suficientes.
            p.mb-4 El servicio es el conjunto de prestaciones que el cliente espera, además del producto o servicio básico. Va más allá de la amabilidad y cortesía, y se considera #[b un valor agregado para el cliente], quien cada vez es más exigente.
            p.mb-0 Las características del servicio son:
          .col-lg-5.order-first.order-lg-last(data-aos="fade-left")
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/4.png",style="max-width: 506px;")
        
        .row
          .col-lg-4(data-aos="fade-right")
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/6.png",style="max-width: 301px;")
          .col-lg-8(data-aos="fade-left")
            SlyderF.slider-personalizado-1(columnas="col-lg-6",data-aos="flip-up")
              .borde-14.fondo-color-sistema-k.h-100
                figure.d-flex.position-relative.justify-content-center.mb-2
                  img.mx-auto(src="@/assets/curso/temas/7.png")
                  h4.fondo-color-primario.py-1.px-4.position-absolute.mb-0(style="bottom: -5%;") Intangible
                p.mb-0.p-4.text-center No se puede tocar, sentir, escuchar ni oler antes de la compra.
              .borde-14.fondo-color-sistema-k.h-100
                figure.d-flex.position-relative.justify-content-center.mb-2
                  img.mx-auto(src="@/assets/curso/temas/8.png")
                  h4.fondo-color-primario.py-1.px-4.position-absolute.mb-0(style="bottom: -5%;") Inseparable
                p.mb-0.p-4.text-center Se produce y consume al mismo tiempo.
              .borde-14.fondo-color-sistema-k.h-100
                figure.d-flex.position-relative.justify-content-center.mb-2
                  img.mx-auto(src="@/assets/curso/temas/9.png")
                  h4.fondo-color-primario.py-1.px-4.position-absolute.mb-0(style="bottom: -5%;") Variable
                p.mb-0.p-4.text-center Depende de quién, cuándo, cómo y dónde se ofrece.
              .borde-14.fondo-color-sistema-k.h-100
                figure.d-flex.position-relative.justify-content-center.mb-2
                  img.mx-auto(src="@/assets/curso/temas/10.png")
                  h4.fondo-color-primario.py-1.px-4.position-absolute.mb-0(style="bottom: -5%;") Perecedero
                p.mb-0.p-4.text-center No se puede almacenar.

    .row.mb-3(data-aos="fade-up")
      .col-lg-8
        p.mb-4 #[b Es crucial la agilidad en la respuesta] para transmitir profesionalismo. La mejor respuesta es anticiparse a los deseos previsibles de los clientes; aquellos que no se han podido prever deben ser resueltos en el menor tiempo posible, siempre con la satisfacción del cliente como prioridad.

        p.mb-0 El grado de satisfacción del cliente dependerá, en gran medida, de nuestra manera de actuar. Los problemas que puedan surgir deben abordarse con calma, sin titubeos, de forma rápida y evitando que se magnifiquen. Cualquier situación debe resolverse dando la impresión de que sabemos exactamente lo que hacemos.
      .col-lg-4.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/11.svg",style="max-width: 400px;")
    
    Separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 1.1 Aspectos relacionados con un buen servicio

    p.mb-0(data-aos="fade-down") Brindar un buen servicio no es suficiente si el cliente no lo percibe como tal. Estadísticamente, se ha demostrado que los clientes valoran más un buen servicio y una atención de calidad que el precio o la calidad del producto.

    .titulo-decorativo.my-5(data-aos="fade-right")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Cortesía
    
    p.mb-5(data-aos="fade-left") Se pierden muchos clientes si el personal que los atiende es descortés. El cliente siempre desea ser bien recibido, sentirse importante y percibir que se le brinda ayuda.

    figure.mb-4(data-aos="zoom-in-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/SqlRrZ6Aj18?si=v8jmfLACguVHGzeZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
      figcaption Video. Cortesía
    
    Separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-up")
      h2 1.2 Los diez mandamientos del buen servicio
    
    p.mb-5(data-aos="fade") Aunque las empresas suelen ubicar a sus clientes en el centro de su plan estratégico, esta declaración muchas veces no se cumple en la práctica. A continuación, se presentan los principios fundamentales para asegurar un buen servicio.

    .row
      .col-lg-3(data-aos="fade-right")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/12.png",style="max-width: 276px;")
      .col-lg-9(data-aos="flip-down")
        AcordionA.acordion-personalizado-1.mb-0(tipo="a" clase-tarjeta="tarjeta")
          .div(titulo="1. El cliente por encima de todo ")
            .ps-md-5.ms-md-3
              p Los clientes deben ser la prioridad en cualquier situación. 
          .div(titulo="2. No hay nada imposible")
            .ps-md-5.ms-md-3
              p Aunque algunas solicitudes parezcan inalcanzables, con esfuerzo y dedicación es posible cumplir las expectativas del cliente. 
          .div(titulo="3. Cumple todo lo que prometas")
            .ps-md-5.ms-md-3
              p Las promesas deben cumplirse, ya que recurrir al engaño puede destruir la confianza del cliente cuando descubre la verdad.
          .div(titulo="4. Satisface al cliente dando más de lo que espera")
            .ps-md-5.ms-md-3
              p Superar las expectativas del cliente es clave para lograr su satisfacción. Conocer bien sus necesidades y deseos es esencial para alcanzar este objetivo.
          .div.mb-0(titulo="5. Para el cliente, tú marcas la diferencia")
            .ps-md-5.ms-md-3.mb-0
              p El personal de contacto puede crear una experiencia positiva o negativa para el cliente, influyendo en su decisión de regresar o no.

    .fondo-personalizado-1.f3
      .fondo-personalizado-1__contenido.pt-2.pb-5   
        .row.mb-5
          .col-lg-3(data-aos="fade-left")
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/13.png",style="max-width: 295px;")
          .col-lg-9.order-lg-first.order-last(data-aos="flip-up")
            AcordionA.acordion-personalizado-1(tipo="a" clase-tarjeta="tarjeta")
              .div(titulo="6. Fallar en un aspecto significa fallar en todo")
                .ps-md-5.ms-md-3
                  p Un pequeño error puede arruinar toda la experiencia del cliente, incluso si la mayoría de las cosas funcionan correctamente.
              .div(titulo="7. Empleado insatisfecho genera clientes insatisfechos")
                .ps-md-5.ms-md-3
                  p Los empleados son el "primer cliente" de la empresa. Si no están satisfechos, es difícil que puedan satisfacer a los clientes externos. 
              .div(titulo="8. El juicio sobre la calidad del servicio lo hace el cliente")
                .ps-md-5.ms-md-3
                  p Solo el cliente puede evaluar la calidad del servicio, decidiendo si volver o buscar alternativas en función de su experiencia.
              .div(titulo="9. Siempre hay margen para mejorar el servicio ")
                .ps-md-5.ms-md-3
                  p Aunque las metas de satisfacción se hayan alcanzado, siempre existe la posibilidad de mejorar, ya que la competencia nunca se detiene.
              .div(titulo="10. Cuando se trata de satisfacer al cliente, todos somos un equipo")
                .ps-md-5.ms-md-3
                  p La satisfacción del cliente es responsabilidad de toda la organización, y todos deben trabajar en conjunto para resolver cualquier petición o queja.

        p.pb-5(data-aos="fade") La comunicación es clave para el éxito de una estrategia de servicio. Es el medio a través del cual se amplía la clientela, se fomenta la lealtad, se motiva a los empleados y se difunden las normas de calidad que deben seguirse. Además, la comunicación permite destacar las ventajas competitivas de la empresa, ocupando un lugar en la mente de los clientes (posicionamiento).


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
