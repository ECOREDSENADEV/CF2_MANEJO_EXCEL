<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.mb-3
      .col-lg-3.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/intro/1.png", data-aos="zoom-in")
      .col-lg-9.order-lg-1
        p(data-aos="fade-left") Una vez establecidas las bases sobre la estructura de la hoja de cálculo y el uso de fórmulas revisadas en el componente anterior, el siguiente paso lógico en el dominio de Excel consiste en aprender a gestionar conjuntos de datos de manera profesional.

        .bg-color-8.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-xl-auto.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/intro/2.svg', alt='')
            .col-xl
              .p-4
                p.mb-0(data-aos="fade-up") En el entorno actual, la información rara vez es estática o reducida; por el contrario, los datos crecen, se transforman y exigen ser analizados desde distintas perspectivas. En este contexto, las herramientas de gestión y visualización de Excel marcan una diferencia significativa. Por esta razón, Microsoft Excel se ha consolidado como la herramienta de gestión de datos más utilizada en entornos corporativos a nivel mundial. Su versatilidad permite desde la manipulación básica de información hasta la realización de análisis complejos que respaldan la toma de decisiones estratégicas. En el panorama empresarial contemporáneo, donde los datos son considerados un activo esencial, el dominio de Excel trasciende el uso de fórmulas para convertirse en una competencia indispensable para profesionales de múltiples disciplinas.
    
    p.mb-5 Este componente formativo está diseñado para ir más allá de los rangos de celdas tradicionales, introduciendo al estudiante en el potencial de las tablas de Excel: una estructura inteligente que automatiza el formato, facilita la expansión de datos y potencia el análisis. Se aprenderá a ordenar y filtrar grandes volúmenes de información con rapidez, permitiendo identificar exactamente lo que se necesita en cuestión de segundos.

    .row.mb-5.align-items-center
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/intro/3.png", data-aos="zoom-in")
      .col-lg-9
        .bg-color-3.tarjeta.p-4(data-aos="fade-left")
          p.mb-0 Finalmente, se abordará el arte de comunicar a través de los datos. Un gráfico bien diseñado puede transmitir un mensaje con mayor claridad y rapidez que una tabla llena de números. Se explorará cómo seleccionar, crear y personalizar gráficos para convertir los análisis en narrativas visuales precisas y persuasivas, una habilidad esencial para elaborar informes y presentar resultados en cualquier entorno organizacional.
    
        

</template>

<script>
export default {
  name: 'Introduccion',
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
