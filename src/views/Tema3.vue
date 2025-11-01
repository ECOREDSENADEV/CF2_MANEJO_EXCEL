<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Gráficos
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/1.png')})`}"
      )(data-aos="zoom-in")
      .bloque-texto-g__texto.p-4
        p.mb-0 Seleccionar el tipo de gráfico adecuado depende de la naturaleza de los datos y del mensaje que se desea transmitir. Elegir correctamente el gráfico permite enfocar la atención del lector en la información clave y evitar confusiones. A continuación, se describen los gráficos de barras y columnas, dos de los más utilizados para análisis comparativo.
    
    separador
    
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Gráficos de barras y columnas
    
    p.mb-5 Los gráficos de barras y columnas se utilizan para comparar valores entre distintas categorías. Aunque ambos representan la misma idea, la diferencia radica en la orientación:

    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4(titulo="Barras")
        .row.p-5
          .col-md-7.mb-4.mb-md-0.order-2
            h4 Barras
            p Orientación horizontal. Son más apropiadas cuando hay muchas categorías o los nombres de las mismas son largos.
          .col-md-5.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema3/2.png', alt='Texto que describa la imagen')
      .py-3.py-md-4(titulo="Columnas")
        .row.p-5
          .col-md-7.mb-4.mb-md-0.order-2
            h4 Columnas
            p Orientación vertical. Funcionan mejor con pocas categorías o cuando se desea destacar comparaciones verticales.
          .col-md-5.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema3/3.png', alt='Texto que describa la imagen')
    
    p.mb-5 Estos tipos de gráficos son especialmente útiles en los siguientes casos:

    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5
        .row.mb-5.justify-content-center.align-items-center
          .col-lg-4.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema3/4.svg", data-aos="zoom-in")
          .col-lg-6.order-lg-1
            .bg-color-18.bg.tarjeta.p-4.mb-3(data-aos="fade-left")
              ul.lista-ul--color.mb-0
                li.mb-2.d-flex.bg-color-white.p-1.tarjeta
                  i.fas.fa-circle-arrow-right.bg-color-12
                  p.mb-0 Comparar ventas por producto
                li.mb-2.d-flex.bg-color-white.p-1.tarjeta
                  i.fas.fa-circle-arrow-right.bg-color-12
                  p.mb-0 Mostrar la distribución de respuestas en una encuesta
                li.mb-0.d-flex.bg-color-white.p-1.tarjeta
                  i.fas.fa-circle-arrow-right.bg-color-12
                  p.mb-0 Contrastar métricas por región, segmento o período de tiempo

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Mejores prácticas para gráficos de barras y columnas
        
        p.mb-5 Para que la visualización sea efectiva y clara, se recomienda seguir las siguientes buenas prácticas:

        .row.mb-5.align-items-center
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/5.png", data-aos="zoom-in")
          .col-lg-7
            .bg-color-13.bg.tarjeta.p-4.mb-3(data-aos="fade-left")
              ul.lista-ul--color.mb-0
                li.mb-2.d-flex.bg-color-white.p-2.tarjeta
                  i.fas.fa-circle-arrow-right.bg-color-12
                  p.mb-0 Ordenar las barras o columnas por valor, de forma descendente o ascendente, si las categorías no tienen un orden natural.
                li.mb-2.d-flex.bg-color-white.p-2.tarjeta
                  i.fas.fa-circle-arrow-right.bg-color-12
                  p.mb-0 Iniciar el eje de valores en cero, para evitar distorsionar visualmente las diferencias.
                li.mb-2.d-flex.bg-color-white.p-2.tarjeta
                  i.fas.fa-circle-arrow-right.bg-color-12
                  p.mb-0 Limitar el número de categorías entre 7 y 10, para evitar sobrecargar la visualización.
                li.mb-0.d-flex.bg-color-white.p-2.tarjeta
                  i.fas.fa-circle-arrow-right.bg-color-12
                  p.mb-0 Usar colores estratégicamente, por ejemplo, destacando un valor específico con un color distinto.

        p.mb-5 A continuación, se presentan ejemplos que evidencian la diferencia entre ambos tipos de gráficos.

        .row
          .col-lg-6.mb3.mb-lg-0
            .titulo-sexto.color-acento-contenido
              h5 Figura 10.
              span Ejemplo de gráfico de columnas
            figure
              img(src="@/assets/curso/tema3/6.png", data-aos="zoom-in", alt='Gráfico vertical en Excel donde cada barra representa una categoría con su valor correspondiente, utilizado para visualizar comparaciones directas entre elementos. ')
          .col-lg-6.mb3.mb-lg-0
            .titulo-sexto.color-acento-contenido
              h5 Figura 11.
              span Ejemplo de gráfico de barras
            figure
              img(src="@/assets/curso/tema3/7.png", data-aos="zoom-in", alt='Gráfico vertical en Excel donde cada barra representa una categoría con su valor correspondiente, utilizado para visualizar comparaciones directas entre elementos. ')

        separador
        
        #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 3.2 Gráficos de líneas
        
        p.mb-5 Los gráficos de líneas son ideales para mostrar la evolución de datos a lo largo del tiempo. La continuidad visual de la línea facilita la percepción de tendencias, fluctuaciones y posibles relaciones causa-efecto en series temporales.

        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/8.png", data-aos="zoom-in")
          .col-lg-8
            p(data-aos="fade-left") Este tipo de gráfico es especialmente útil cuando se desea analizar el comportamiento de una o más variables durante distintos períodos. A continuación, se presentan algunos usos comunes:
            .bg-color-25.bg.tarjeta.p-4.mb-3(data-aos="fade-left")
              ul.lista-ul--color.mb-0
                li.mb-2.d-flex.bg-color-white.p-2.tarjeta
                  i.fas.fa-circle-arrow-right.bg-color-12
                  p.mb-0 Seguimiento de <b>ventas mensuales</b> o acumuladas.
                li.mb-2.d-flex.bg-color-white.p-2.tarjeta
                  i.fas.fa-circle-arrow-right.bg-color-12
                  p.mb-0 Análisis de la <b>evolución de precios</b> o costos.
                li.mb-2.d-flex.bg-color-white.p-2.tarjeta
                  i.fas.fa-circle-arrow-right.bg-color-12
                  p.mb-0 Comparación de <b>tendencias simultáneas</b> entre productos, departamentos o regiones.
                li.mb-0.d-flex.bg-color-white.p-2.tarjeta
                  i.fas.fa-circle-arrow-right.bg-color-12
                  p.mb-0 Representación de <b>relaciones temporales</b> en contextos experimentales o económicos.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Mejores prácticas para gráficos de líneas
        
        p.mb-5 Para garantizar una visualización clara y efectiva, se recomienda seguir estas buenas prácticas:

        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema3/9.svg", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            .bg-color-5.bg.tarjeta.p-4.mb-3(data-aos="fade-left")
              ul.lista-ul--color.mb-0
                li.mb-2.d-flex.bg-color-white.p-2.tarjeta
                  i.fas.fa-circle-arrow-right.bg-color-12
                  p.mb-0 <b>Limitar el número de líneas</b> a un máximo de 3 a 5 para evitar sobrecarga visual.
                li.mb-2.d-flex.bg-color-white.p-2.tarjeta
                  i.fas.fa-circle-arrow-right.bg-color-12
                  p.mb-0 Utilizar <b>diferentes estilos de línea</b> (sólida, punteada) además de colores, para facilitar la diferenciación.
                li.mb-2.d-flex.bg-color-white.p-2.tarjeta
                  i.fas.fa-circle-arrow-right.bg-color-12
                  p.mb-0 <b>Etiquetar las líneas directamente</b>, en lugar de depender únicamente de la leyenda.
                li.mb-0.d-flex.bg-color-white.p-2.tarjeta
                  i.fas.fa-circle-arrow-right.bg-color-12
                  p.mb-0 Mantener la <b>escala temporal constante</b> en el eje horizontal, para facilitar la comparación entre series.

        p.mb-5 A continuación, se presenta un ejemplo de gráfico de líneas que presenta cómo representar correctamente una serie temporal, destacando la evolución de los datos a lo largo del tiempo:  

        .row.justify-content-center
          .col-lg-7.mb3.mb-lg-0
            .titulo-sexto.color-acento-contenido
              h5 Figura 12.
              span Ejemplo de gráfico de líneas
            figure
              img(src="@/assets/curso/tema3/10.png", data-aos="zoom-in", alt='Visualización con líneas conectadas entre puntos sobre un eje temporal, utilizada para mostrar la evolución de una variable a lo largo del tiempo, destacando fluctuaciones y patrones. ')

        separador
        
        #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 3.3 Gráficos circulares (pastel)

    p.mb-5 Los gráficos circulares, también conocidos como gráficos de pastel, son útiles cuando se desea mostrar cómo se distribuyen proporciones dentro de un todo, especialmente cuando se trabaja con pocas categorías y se desea destacar su contribución relativa al 100 %. Este tipo de gráfico es adecuado para representar porcentajes de forma visual y atractiva, aunque presenta limitaciones importantes en cuanto a legibilidad y comparación precisa de valores. A continuación, se presentan algunos de los usos más comunes:

    .row.mb-5.justify-content-center
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/11.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        .bg-color-23.bg.tarjeta.p-4(data-aos="fade-left")
          ul.lista-ul--color.mb-0
            li.mb-3.d-flex.bg-color-white.p-1.tarjeta
              i.fas.fa-circle-arrow-right.bg-color-12
              p.mb-0 Distribución del presupuesto por departamento
            li.mb-3.d-flex.bg-color-white.p-1.tarjeta
              i.fas.fa-circle-arrow-right.bg-color-12
              p.mb-0 Participación de mercado por competidor
            li.mb-0.d-flex.bg-color-white.p-1.tarjeta
              i.fas.fa-circle-arrow-right.bg-color-12
              p.mb-0 Composición porcentual de una cartera de inversión
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Limitaciones de los gráficos circulares
    
    p.mb-5 Aunque son visualmente atractivos, presentan ciertas debilidades que deben tenerse en cuenta:

    .bg-full-width.bg-fondo-1.mb-5
      .px-4.px-md-5
        .row.mb-5.justify-content-center
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/12.svg", data-aos="zoom-in")
          .col-lg-7
            .bg-color-5.bg.tarjeta.p-4.mb-3(data-aos="fade-left")
              ul.lista-ul--color.mb-0
                li.mb-2.d-flex.bg-color-white.p-2.tarjeta
                  i.fas.fa-circle-arrow-right.bg-color-12
                  p.mb-0 Dificultad de lectura con más de 5 segmentos.
                li.mb-2.d-flex.bg-color-white.p-2.tarjeta
                  i.fas.fa-circle-arrow-right.bg-color-12
                  p.mb-0 Comparación imprecisa de valores similares (el ojo humano no distingue bien ángulos cercanos).
                li.mb-2.d-flex.bg-color-white.p-2.tarjeta
                  i.fas.fa-circle-arrow-right.bg-color-12
                  p.mb-0 Menor efectividad que los gráficos de barras para comparaciones exactas.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Mejores prácticas para gráficos circulares
        
        p.mb-5 Para que la visualización sea efectiva y fácil de interpretar, se recomienda:

        .row.mb-5.justify-content-center.align-items-center
          .col-lg-5.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema3/12-1.svg", data-aos="zoom-in")
          .col-lg-7.order-lg-1
            .bg-color-13.bg.tarjeta.p-4.mb-3(data-aos="fade-left")
              ul.lista-ul--color.mb-0
                li.mb-2.d-flex.bg-color-white.p-2.tarjeta
                  i.fas.fa-circle-arrow-right.bg-color-12
                  p.mb-0 Ordenar los segmentos de mayor a menor valor, dejando "Otros" al final.
                li.mb-2.d-flex.bg-color-white.p-2.tarjeta
                  i.fas.fa-circle-arrow-right.bg-color-12
                  p.mb-0 Colocar el segmento más grande a las 12 en punto (posición superior).
                li.mb-2.d-flex.bg-color-white.p-2.tarjeta
                  i.fas.fa-circle-arrow-right.bg-color-12
                  p.mb-0 Incluir porcentajes dentro de las etiquetas para facilitar la lectura.
                li.mb-2.d-flex.bg-color-white.p-2.tarjeta
                  i.fas.fa-circle-arrow-right.bg-color-12
                  p.mb-0 Considerar usar un gráfico de barras si se requiere precisión en la comparación.

        p.mb-5 A continuación, se presenta  un ejemplo de gráfico circular que representa correctamente la distribución porcentual de un conjunto de categorías:

        .row.justify-content-center
          .col-lg-7.mb3.mb-lg-0
            .titulo-sexto.color-acento-contenido
              h5 Figura 13.
              span Ejemplo de gráfico circular (pastel)
            figure
              img(src="@/assets/curso/tema3/13.png", data-aos="zoom-in", alt='Gráfico de pastel donde cada segmento representa una categoría con su proporción respecto al total del 100 %, ideal para destacar contribuciones relativas de pocas variables. ')

        separador
        
        #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 3.4 Gráficos de dispersión
        
        .row.mb-5.align-items-center
          .col-lg-5.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema3/14.png", data-aos="zoom-in")
          .col-lg-7.order-lg-1
            p(data-aos="fade-left") Los gráficos de dispersión son herramientas eficaces para explorar la relación entre dos variables numéricas continuas. Su uso permite identificar correlaciones, observar patrones, y detectar valores atípicos que podrían no ser evidentes en tablas o gráficos más simples. Este tipo de gráfico es especialmente útil en análisis exploratorios, estudios estadísticos y contextos donde se analizan datos cuantitativos a nivel individual. A continuación, se presentan algunos de los usos más comunes:
            .bg-color-17.bg.tarjeta.p-4.mb-3(data-aos="fade-left")
              ul.lista-ul--color.mb-0
                li.mb-2.d-flex.bg-color-white.p-2.tarjeta
                  i.fas.fa-circle-arrow-right.bg-color-12
                  p.mb-0 Analizar la relación entre precio y demanda de un producto
                li.mb-2.d-flex.bg-color-white.p-2.tarjeta
                  i.fas.fa-circle-arrow-right.bg-color-12
                  p.mb-0 Identificar correlación entre años de experiencia y salario
                li.mb-2.d-flex.bg-color-white.p-2.tarjeta
                  i.fas.fa-circle-arrow-right.bg-color-12
                  p.mb-0 Detectar agrupaciones naturales o clústeres en los datos

    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Mejores prácticas para gráficos de dispersión
        
        p.mb-5 Para asegurar que la información visual sea clara y significativa, se recomienda aplicar las siguientes prácticas:

        .row.mb-5.align-items-center.justify-content-center
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/15.svg", data-aos="zoom-in")
          .col-lg-7
            .bg-color-13.bg.tarjeta.p-4.mb-3(data-aos="fade-left")
              ul.lista-ul--color.mb-0
                li.mb-2.d-flex.bg-color-white.p-2.tarjeta
                  i.fas.fa-circle-arrow-right.bg-color-12
                  p.mb-0 <b>Añadir una línea de tendencia</b> si se desea mostrar visualmente una correlación entre variables.
                li.mb-2.d-flex.bg-color-white.p-2.tarjeta
                  i.fas.fa-circle-arrow-right.bg-color-12
                  p.mb-0 <b>Utilizar color o tamaño</b> de los puntos como una tercera dimensión (gráfico de burbujas).
                li.mb-2.d-flex.bg-color-white.p-2.tarjeta
                  i.fas.fa-circle-arrow-right.bg-color-12
                  p.mb-0 <b>Etiquetar puntos relevantes</b> que representen casos particulares o extremos.
                li.mb-0.d-flex.bg-color-white.p-2.tarjeta
                  i.fas.fa-circle-arrow-right.bg-color-12
                  p.mb-0 <b>Usar escalas logarítmicas</b> si los datos tienen una gran variación en magnitud.

        p.mb-5 A continuación, se presenta un ejemplo de gráfico de dispersión que permite visualizar la relación entre dos variables continuas y detectar patrones o anomalías:

        .row.justify-content-center
          .col-lg-7.mb3.mb-lg-0
            .titulo-sexto.color-acento-contenido
              h5 Figura 14.
              span Ejemplo de gráfico de dispersión
            figure
              img(src="@/assets/curso/tema3/16.png", data-aos="zoom-in", alt='Representación de puntos distribuidos en un plano cartesiano, donde cada punto refleja un par de valores, permitiendo identificar relaciones, tendencias o valores atípicos.  ')
        
        separador
        
        #t_3_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 3.5 Gráficos de área 

        .row.mb-5.align-items-center
          .col-lg-5.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema3/17.png", data-aos="zoom-in")
          .col-lg-7.order-lg-1
            p(data-aos="fade-left") Los gráficos de área son una variante de los gráficos de líneas que permiten visualizar tendencias en el tiempo, pero con un enfoque adicional en la magnitud acumulada. Al rellenar el espacio bajo la línea, enfatizan tanto el cambio temporal como el peso relativo de cada componente. Este tipo de gráfico es especialmente útil cuando se busca mostrar cómo varios elementos contribuyen a un total, a lo largo de un período.
            p A continuación, se enumeran algunos casos en los que su uso es apropiado:
            .bg-color-14.bg.tarjeta.p-4.mb-3(data-aos="fade-left")
              ul.lista-ul--color.mb-0
                li.mb-2.d-flex.bg-color-white.p-2.tarjeta
                  i.fas.fa-circle-arrow-right.bg-color-12
                  p.mb-0 Mostrar <b>cambios en la composición de un total</b> a través del tiempo.
                li.mb-2.d-flex.bg-color-white.p-2.tarjeta
                  i.fas.fa-circle-arrow-right.bg-color-12
                  p.mb-0 Enfatizar la <b>magnitud total acumulada</b>, además de la tendencia.
                li.mb-2.d-flex.bg-color-white.p-2.tarjeta
                  i.fas.fa-circle-arrow-right.bg-color-12
                  p.mb-0 Usar gráficos de <b>área apilada</b> para mostrar partes de un todo en evolución (por ejemplo, participación de ventas por categoría en un mercado creciente).

    .bg-full-width.bg-fondo-1.mb-5
      .px-4.px-md-5
        p.mb-5 A continuación, se presenta un gráfico de área que representa el crecimiento total y la contribución relativa de distintos componentes a lo largo del tiempo:

        .row.justify-content-center
          .col-lg-7.mb3.mb-lg-0
            .titulo-sexto.color-acento-contenido
              h5 Figura 15.
              span Ejemplo de gráfico de área
            figure
              img(src="@/assets/curso/tema3/18.png", data-aos="zoom-in", alt='Gráfico con áreas coloreadas bajo líneas que representan series temporales, utilizado para visualizar la contribución acumulada de distintos elementos a un total general en el tiempo. ')
        
        separador
        
        #t_3_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 3.6 Gráficos combinados
        
        p.mb-5 Excel permite crear gráficos combinados, que integran dos o más tipos de gráficos en una misma visualización. Esto resulta útil cuando se desea representar múltiples medidas que tienen diferentes escalas o naturalezas, como por ejemplo:

        .row.mb-5.align-items-center
          .col-lg-4.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/19.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            .row.justify-content-center.align-items-center
              .col-lg-3.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/tema3/20.svg", data-aos="zoom-in")
              .col-lg-9
                .bg-color-5.bg.tarjeta.p-4(data-aos="fade-left")
                  ul.lista-ul--color.mb-0
                    li.mb-1.d-flex.bg-color-white.p-1.tarjeta
                      i.fas.fa-circle-arrow-right.bg-color-12
                      p.mb-0 Comparar ventas (columna) con porcentaje de crecimiento (línea).
                    li.mb-1.d-flex.bg-color-white.p-1.tarjeta
                      i.fas.fa-circle-arrow-right.bg-color-12
                      p.mb-0 Visualizar volumen de producción y costos asociados en un mismo gráfico.
                    li.mb-0.d-flex.bg-color-white.p-1.tarjeta
                      i.fas.fa-circle-arrow-right.bg-color-12
                      p.mb-0 Mostrar un indicador principal junto con su descomposición secundaria.
    
    p.mb-5 Este tipo de gráfico mejora la comprensión del contexto general al permitir contrastar datos relacionados pero distintos, en una sola vista. La siguiente tabla presenta una síntesis de los principales tipos de gráficos en Excel, su uso recomendado y ejemplos típicos:

    .titulo-sexto.color-acento-contenido
      h5 Tabla 10.
      span Resumen de tipos de gráfico
    .tabla-a.color-acento-contenido.mb-5
      table
        thead
          tr
            th.bg-color-17 Tipo de gráfico
            th.bg-color-17 Uso principal
            th.bg-color-17 Ejemplo
        tbody
          tr.bg-color-sintesis
            td Gráfico de Columnas/Barras
            td Comparar valores entre diferentes categorías.
            td Ventas por producto, población por ciudad.
          tr
            td Gráfico de Líneas
            td Mostrar tendencias o cambios a lo largo del tiempo.
            td Evolución de la temperatura, precios de acciones.
          tr.bg-color-sintesis
            td Gráfico Circular (o de Torta)
            td Mostrar la proporción de cada categoría respecto a un total (100 %). Usar con pocas categorías.
            td Distribución de cuota de mercado, composición de un presupuesto.
          tr
            td Gráfico de Dispersión (XY)
            td Mostrar la relación o correlación entre dos variables numéricas.
            td Relación entre horas de estudio y calificación.
          tr.bg-color-sintesis
            td Gráfico de Área
            td Enfatizar el volumen acumulado o la composición a lo largo del tiempo.
            td Participación de ventas por categoría a lo largo del año.
          tr
            td Gráfico Combinado
            td Representar múltiples variables con distintas escalas o unidades en una sola vista.
            td Ventas (columna) y porcentaje de crecimiento (línea).


    separador
    
    #t_3_7.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.7 Elementos de diseño

    p.mb-5 Al momento de crear gráficos en Excel, no solo es importante elegir el tipo adecuado, sino también cuidar los elementos visuales que lo componen. Estos elementos son clave para que la información sea clara, precisa y efectiva. A continuación, se detallan los principales elementos que deben considerarse para un diseño de gráfico profesional:

    .row.align-items-center.mb-5
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/21.png", alt="").mb-4.mb-lg-0
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-5")
          .div(titulo="Título del gráfico")
            p Es lo primero que ve la audiencia al visualizar un gráfico. Debe ser claro, conciso y descriptivo, resumiendo la idea principal que se desea comunicar. Un buen título responde a la pregunta: ¿Qué estoy viendo?
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fa-solid.fa-circle-check.bg-color-27
                p.mb-0 <b>Ejemplo malo</b>: "Ventas"
              li.mb-0.d-flex
                i.fa-solid.fa-circle-check.bg-color-27
                p.mb-0 <b>Ejemplo bueno</b>: "Evolución de Ventas Mensuales por Región - Primer Semestre"

          .div(titulo="Ejes (Eje X y Eje Y)")
            p Proporcionan el contexto y la escala para los datos representados.

            p <b>Títulos de eje</b>: Son etiquetas que explican qué representa cada eje (por ejemplo: "Meses", "Ventas en millones de COP"). Son fundamentales, especialmente cuando las unidades no son obvias.

            p <b>Escala</b>: Se recomienda iniciar el eje de valores en cero para evitar distorsionar las diferencias entre categorías. Además, usar intervalos lógicos facilita la interpretación (por ejemplo: 0, 10, 20, 30).

          .div(titulo="Leyenda")
            p Es la clave para interpretar el gráfico cuando hay múltiples series de datos. Explica qué representa cada color, línea o símbolo utilizado.

            p <b>Recomendaciones</b>: Ubicarla en un lugar donde no interfiera con los datos, preferiblemente en la parte superior o derecha del gráfico. Usar nombres claros en las series para facilitar la comprensión.

          .div(titulo="Etiquetas de datos")
            p Son los valores numéricos que se pueden mostrar directamente sobre las barras, líneas, puntos o secciones del gráfico.

            p Son útiles para visualizar cifras exactas sin necesidad de interpretar los ejes, pero deben usarse con moderación. Un exceso de etiquetas puede saturar el gráfico y dificultar la lectura. Es preferible etiquetar únicamente los datos más importantes (por ejemplo, el valor más alto o el más bajo).
          .div(titulo="Colores y estilo")
            p El color no es simplemente decorativo; cumple una función comunicativa importante.
            h5 Usos recomendados:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fa-solid.fa-circle-check.bg-color-27
                p.mb-0 Diferenciar categorías o series
              li.mb-0.d-flex
                i.fa-solid.fa-circle-check.bg-color-27
                p.mb-0 Destacar valores relevantes
              li.mb-0.d-flex
                i.fa-solid.fa-circle-check.bg-color-27
                p.mb-0 Guiar la atención hacia los puntos clave

                
    .row.justify-content-center
      .col-lg-10
        .bg-color-2.tarjeta.mb-5(data-aos="fade-down")
          .row.justify-content-center.align-items-center
            .col-lg-auto.order-2.p-4
              figure
                img(src='@/assets/curso/tema3/22.png', alt='')
            .col-lg.order-1.mb-3.mb-lg-0
              .p-4
                p.mb-0(data-aos="fade-up") Las buenas prácticas en el uso del color incluyen utilizar paletas consistentes y sobrias que mantengan una armonía visual a lo largo del gráfico, evitar colores excesivamente saturados o de bajo contraste, ya que dificultan la lectura, y considerar opciones accesibles para personas con dificultades de visión del color. En este último caso, se recomienda complementar los colores con patrones o formas distintivas, para asegurar que la información siga siendo comprensible sin depender únicamente del color.
      

    

</template>

<script>
export default {
  name: 'Tema3',
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
