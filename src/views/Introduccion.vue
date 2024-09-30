<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.pb-0.pb-md-0
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .fondo-personalizado-1.size-full.med.pos-bottom.f1
      .fondo-personalizado-1__contenido.pb-5
        p.mb-4(data-aos="fade-up") La misión fundamental de toda empresa debe ser alcanzar el máximo nivel de satisfacción para sus clientes y usuarios. Esto se plantea como una necesidad, ya que muchas empresas aún no lo han comprendido. La época en que se pensaba que los productos se venderían por sí solos ha quedado atrás. El cliente se convierte en el eje central de cualquier estrategia de servicio, orientada tanto a mantener a los clientes actuales como a atraer nuevos. Aquellas empresas que ignoren este principio esencial están condenadas a desaparecer en un periodo relativamente corto.

        .row.align-items-center.mb-4
          .col-lg-7
            .row.mb-4(data-aos="fade-left")
              .col-md-auto.d-none.d-lg-block
                figure.mb-4.mb-md-0
                  img.mx-auto(src="@/assets/curso/temas/2.svg",style="max-width: 85px;")
              .col
                p.mb-0 En el componente formativo se estudiarán los principales aspectos que influyen en la calidad del servicio como un factor clave para la fidelización de los clientes, así como algunos tipos de servicios de alimentos y sus características, según el tipo de evento o celebración.
            .fondo-color-sistema-j.p-4.borde-14(data-aos="fade-right")
              p.mb-0 Asimismo, se explorarán herramientas y metodologías que permiten evaluar y mejorar continuamente la calidad del servicio ofrecido. Este enfoque dinámico es fundamental para ajustarse a las expectativas cambiantes de los clientes y a las nuevas tendencias del mercado. Se destacará la importancia de la retroalimentación constante, no solo como un mecanismo de mejora, sino como una oportunidad para fortalecer las relaciones con los clientes y posicionar a la empresa como líder en su sector. Adaptarse a estas demandas implica no solo ofrecer productos de calidad, sino también proporcionar un servicio excepcional que agregue valor en cada interacción.
          .col-lg-5.order-first.order-lg-last
            figure.mb-4.mb-lg-0(data-aos="fade-left")
              img.mx-auto(src="@/assets/curso/temas/1.png",style="max-width: 506px;")
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
