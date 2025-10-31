<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p En este componente, ha permitido una evolución de un manejo básico de celdas a una gestión de datos estructurada y profesional. Aprendió a transformar rangos en tablas de Excel, aprovechando sus ventajas para la automatización del formato, la ordenación y el filtrado avanzado de información. Esto permitio el dominio del uso de referencias estructuradas, lo que hace sus fórmulas más legibles y robustas.
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Síntesis sobre gestión de gráficos en Excel que incluye conceptos clave relacionados con datos tabulares, tablas y gráficos. Contiene temas como conversión de rangos, texto en columnas, estructuración, ordenamiento, filtrado, tipos de tabla (incluyendo Power Pivot), referencias estructuradas, fila de totales, funciones de agregación, y tipos de gráficos como columnas, líneas, circulares, dispersión, área y combinados, junto con elementos de diseño como título, ejes, leyenda, etiquetas y color. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
