<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Tablas
    
    p.mb-5 Las tablas en Excel ofrecen múltiples beneficios que van más allá de la simple organización visual de los datos. Entre sus principales ventajas se encuentran:

    .row.mb-5
      .col-lg-5.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        .bg-color-13.bg.tarjeta.p-4.mb-3(data-aos="fade-left")
          ul.lista-ul--color.mb-0
            li.mb-1.d-flex.bg-color-white.p-1.tarjeta
              i.fas.fa-circle-arrow-right.bg-color-12
              p.mb-0 Aplicación automática de filtros para segmentar información relevante
            li.mb-1.d-flex.bg-color-white.p-1.tarjeta
              i.fas.fa-circle-arrow-right.bg-color-12
              p.mb-0 Ordenamiento por criterios diversos para obtener vistas específicas
            li.mb-1.d-flex.bg-color-white.p-1.tarjeta
              i.fas.fa-circle-arrow-right.bg-color-12
              p.mb-0 Uso de referencias estructuradas, que mejoran la claridad y precisión de las fórmulas
            li.mb-1.d-flex.bg-color-white.p-1.tarjeta
              i.fas.fa-circle-arrow-right.bg-color-12
              p.mb-0 Capacidad de adaptarse automáticamente a variaciones en el número de filas o columnas (Microsoft, 2025)
        .bg-color-14.bg.tarjeta.p-3(data-aos="fade-left")
          p.mb-0 Además, las tablas se integran directamente con herramientas de análisis como las tablas dinámicas, facilitando la síntesis y exploración de grandes volúmenes de datos. Esta integración optimiza la toma de decisiones dentro de una organización.
  
    separador
    
    .bg-full-width.bg-color-24.mb-5
      .px-4.px-md-5
        #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 2.1 Rangos
        
        p.mb-5 Para comprender las tablas, primero es necesario dominar el concepto de rango, que es la unidad básica de trabajo en Excel. Un rango es un conjunto de celdas contiguas que pueden abarcar filas, columnas o bloques rectangulares. Los rangos son la base para fórmulas, referencias, formatos condicionales y muchas funciones.

        .row.mb-5
          .col-lg-5.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/2.svg", data-aos="zoom-in")
          .col-lg-7
            p(data-aos="fade-left") A continuación, se presentan ejemplos de notación de rangos:

            .row.mb-3
              .col-lg-5.mb-3.mb-lg-0
                .bg-color-17.p-4.h-100(data-aos="fade-left")
                  p.mb-0 A1:A10 representa una columna de 10 celdas
              .col-lg-5.mb-3.mb-lg-0
                .bg-color-17.p-4.h-100(data-aos="fade-left")
                  p.mb-0 A1:C1 representa una fila de 3 celdas
            .row
              .col-lg-5.mb-3.mb-lg-0
                .bg-color-17.p-4.h-100(data-aos="fade-left")
                  p.mb-0 A1:C10 representa un área rectangular de 30 celdas
              .col-lg-5.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/tema2/3.svg", data-aos="zoom-in")

        p Esta notación permite identificar cualquier subconjunto de celdas dentro de una hoja.

        separador
        
        #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 2.2 Tipos

        p.mb-5 Aunque en el uso cotidiano se suele hablar de “tabla” en sentido amplio, Excel incluye distintas estructuras con funcionalidades específicas. A continuación, se describen tres tipos principales:

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Rangos normales
        
        .row.mb-5
          .col-lg-5.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/4.svg", data-aos="zoom-in")
          .col-lg-7.order-lg-1
            .bg-color-6.tarjeta.p-5(data-aos="fade-left")
              p.mb-0 Son conjuntos de celdas sin formato estructurado. Aunque se pueden utilizar en fórmulas y análisis básicos, requieren gestión manual de fórmulas, formatos y referencias. No ofrecen automatización ni funcionalidades integradas.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Tablas de Excel (formales)
    
    p.mb-5 Las Tablas de Excel, creadas desde Insertar > Tabla o mediante el atajo Ctrl + T, convierten un rango en una estructura dinámica con funcionalidades avanzadas. Estas tablas reconocen encabezados, aplican estilos automáticos y permiten trabajar con referencias estructuradas.

    p.mb-5 Las tablas en Excel ofrecen múltiples beneficios que van más allá de la simple organización visual de los datos. Entre sus principales ventajas se encuentran:

    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/5.png", data-aos="zoom-in")
      .col-lg-7
        .bg-color-13.bg.tarjeta.p-4.mb-3(data-aos="fade-left")
          p Las principales características son:
          ul.lista-ul--color.mb-0
            li.mb-2.d-flex.bg-color-white.p-1.tarjeta
              i.fas.fa-circle-arrow-right.bg-color-12
              p.mb-0 <b>Expansión automática</b> al agregar datos en filas o columnas
            li.mb-2.d-flex.bg-color-white.p-1.tarjeta
              i.fas.fa-circle-arrow-right.bg-color-12
              p.mb-0 <b>Encabezados persistentes</b> que permanecen visibles al desplazarse
            li.mb-2.d-flex.bg-color-white.p-1.tarjeta
              i.fas.fa-circle-arrow-right.bg-color-12
              p.mb-0 <b>Formato automático</b> con bandas alternadas de color
            li.mb-2.d-flex.bg-color-white.p-1.tarjeta
              i.fas.fa-circle-arrow-right.bg-color-12
              p.mb-0 <b>Filtros integrados</b> en cada encabezado
            li.mb-2.d-flex.bg-color-white.p-1.tarjeta
              i.fas.fa-circle-arrow-right.bg-color-12
              p.mb-0 <b>Fila de totales</b> configurable
            li.mb-2.d-flex.bg-color-white.p-1.tarjeta
              i.fas.fa-circle-arrow-right.bg-color-12
              p.mb-0 <b>Referencias estructuradas</b>, que facilitan fórmulas legibles (ej. =[@Cantidad]*[@Precio])

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Tablas dinámicas
    
    p.mb-5 Las tablas dinámicas (PivotTables) no contienen datos, sino que generan resúmenes interactivos a partir de un conjunto de datos origen. Son ideales para el análisis y exploración rápida de información sin necesidad de fórmulas complejas.

    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema2/6.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        .bg-color-18.bg.tarjeta.p-4.mb-3(data-aos="fade-left")
          p Las funciones destacadas son:
          ul.lista-ul--color.mb-0
            li.mb-2.d-flex.bg-color-white.p-1.tarjeta
              i.fas.fa-circle-arrow-right.bg-color-12
              p.mb-0 Agregación automática (suma, promedio, conteo)
            li.mb-2.d-flex.bg-color-white.p-1.tarjeta
              i.fas.fa-circle-arrow-right.bg-color-12
              p.mb-0 Agrupación por períodos (años, trimestres, meses)
            li.mb-2.d-flex.bg-color-white.p-1.tarjeta
              i.fas.fa-circle-arrow-right.bg-color-12
              p.mb-0 Segmentación y filtrado interactivo
            li.mb-2.d-flex.bg-color-white.p-1.tarjeta
              i.fas.fa-circle-arrow-right.bg-color-12
              p.mb-0 Reorganización de campos con drag-and-drop
            li.mb-2.d-flex.bg-color-white.p-1.tarjeta
              i.fas.fa-circle-arrow-right.bg-color-12
              p.mb-0 Actualización dinámica al cambiar los datos de origen
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Comparación entre estructuras
    
    p.mb-5 A continuación, se presenta  una tabla que compara algunas de las características clave entre un rango de datos simple y una Tabla de Excel formal:

    .row.justify-content-center
      .col-lg-9
        .titulo-sexto.color-acento-contenido
          h5 Tabla 5.
          span Comparación entre tipos de tabla
        .tabla-a.color-acento-contenido.mb-5
          table
            thead
              tr
                th.bg-color-17 Característica
                th.bg-color-17 Rango de datos (simple)
                th.bg-color-17 Tabla de Excel (formal)
            tbody
              tr.bg-color-sintesis
                td Expansión
                td Manual
                td Automática al agregar datos
              tr
                td Fórmulas
                td Referencias de celda (ej. B2*C2)
                td Referencias estructuradas (ej. [@Cant]*[@Precio])
              tr.bg-color-sintesis
                td Formato
                td Manual y estático
                td Aplicación de estilos dinámicos
              tr
                td Filtro y orden
                td Se aplican manualmente
                td Integrados en los encabezados
              tr.bg-color-sintesis
                td Totales
                td Se crean con fórmulas (ej. =SUMA)
                td Fila de totales integrada y configurable

    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Tablas de Power Pivot
    
    p.mb-5 Excel también cuenta con una tecnología avanzada para análisis de grandes volúmenes de datos: Power Pivot. Esta herramienta permite importar y modelar millones de registros mediante un motor de base de datos en memoria. Power Pivot extiende Excel con funcionalidades similares a las de una base de datos relacional, permitiendo:

    .row.mb-5.align-items-center
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/7.png", data-aos="zoom-in")
      .col-lg-8
        .row.mb-3
          .col-lg-6.mb-3.mb-lg-0
            .bg-color-5.p-3.tarjeta(data-aos="fade-left")
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema2/8.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0.text-bold Crear modelos de datos con múltiples tablas relacionadas
          .col-lg-6.mb-3.mb-lg-0
            .bg-color-5.p-3.tarjeta(data-aos="fade-left")
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema2/9.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0.text-bold Conectar tablas mediante claves primarias y externas
        .row
          .col-lg-6.mb-3.mb-lg-0
            .bg-color-5.p-3.tarjeta(data-aos="fade-left")
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema2/10.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0.text-bold Usar funciones DAX (Data Analysis Expressions) para cálculos complejos
          .col-lg-6.mb-3.mb-lg-0
            .bg-color-5.p-3.tarjeta(data-aos="fade-left")
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema2/11.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0.text-bold Mejorar el rendimiento en el análisis de datos corporativos

    p.mb-5 Este entorno es ideal para usuarios que necesitan trabajar con información proveniente de distintas fuentes y realizar análisis de alto nivel sin salir de Excel.

    separador
    
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Referencias estructuradas y fila de totales

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/12.png')})`}"
      )(data-aos="zoom-in")
      .bloque-texto-g__texto.p-4
        p.mb-0 Una de las funcionalidades más potentes al trabajar con Tablas de Excel es el uso de referencias estructuradas, las cuales reemplazan las referencias tradicionales de celda (como B2 o E5) por nombres de columna. Esto mejora la legibilidad de las fórmulas, facilita su mantenimiento y permite que se adapten automáticamente cuando se agregan o eliminan filas.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Referencias estructuradas
    
    p.mb-5 Las referencias estructuradas utilizan el nombre de la columna entre corchetes y se adaptan automáticamente a la fila correspondiente utilizando el prefijo @.

    .row.mb-5.align-items-center
      .col-lg-3.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/13.png", data-aos="zoom-in")
      .col-lg-9.order-lg-1
        .bg-color-23.tarjeta.p-4.text-white(data-aos="fade-left")
          h5 Sintaxis general:
          p.mb-0 = [@NombreColumna]
          p.mb-0 Por ejemplo, para calcular una comisión del 5 % sobre el salario, la fórmula tradicional sería =E2*0.05. En una Tabla de Excel, la fórmula equivalente y más legible sería:
          p.mb-0 = [@Salario]*0.05
          p.mb-0 Al escribir esta fórmula en una sola celda de la columna "Comisión", Excel la aplicará automáticamente a toda la columna, extendiendo el cálculo sin necesidad de copiar y pegar.

    h3.bg-color-14.d-md-inline.p-3.tarjeta Actividad práctica: uso de referencias estructuradas
    
    p.mb-5.mt-5 Calcular el subtotal para cada producto de forma legible y dinámica, de modo que la fórmula se actualice automáticamente al agregar más filas. A continuación, se presenta el conjunto de datos de ejemplo:

    .row.mb-5.justify-content-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/14.svg", data-aos="zoom-in")
      .col-lg-7
        .titulo-sexto.color-acento-contenido
          h5 Tabla 6.
          span Registro de productos y precios
        .tabla-a.color-acento-contenido.mb-5
          table
            thead
              tr
                th.p-2.bg-color-17 Producto
                th.p-2.bg-color-17 Cantidad
                th.p-2.bg-color-17 Precio Unitario
            tbody
              tr.bg-color-sintesis
                td.p-2 Monitor LED 24"
                td.p-2 2
                td.p-2 800.000
              tr
                td.p-2 Teclado Mecánico
                td.p-2 5
                td.p-2 250.000
              tr.bg-color-sintesis
                td.p-2 Mouse Inalámbrico
                td.p-2 5
                td.p-2 90.000
              tr
                td.p-2 Diadema Gamer
                td.p-2 3
                td.p-2 320.000


    .row.mb-5.align-items-center
      .col-lg-3.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema2/15.png", data-aos="zoom-in")
      .col-lg-9.order-lg-1
        .bg-color-18.bg.tarjeta.p-4.mb-3(data-aos="fade-left")
          p Siga los siguientes pasos para calcular el subtotal automáticamente dentro de la tabla:
          ol.lista-ol--cuadro.mb-0
            li.d-flex.bg-color-white.p-1
              .lista-ol--cuadro__vineta
                span a
              | Añada una nueva columna a la derecha de la tabla. Escriba el encabezado "Subtotal" y presione Enter. La tabla se expandirá automáticamente.
            li.d-flex.bg-color-white.p-1
              .lista-ol--cuadro__vineta
                span b
              | Haga clic en la primera celda vacía debajo de "Subtotal" (por ejemplo, <b>D2</b>).
            li.d-flex.bg-color-white.p-1
              .lista-ol--cuadro__vineta
                span c
              | Escriba el signo igual = para comenzar la fórmula.
            li.d-flex.bg-color-white.p-1
              .lista-ol--cuadro__vineta
                span d
              | Haga clic en la celda que contiene la cantidad. Excel insertará automáticamente [@Cantidad].
            li.d-flex.bg-color-white.p-1
              .lista-ol--cuadro__vineta
                span e
              | Escriba el operador *.
            li.d-flex.bg-color-white.p-1
              .lista-ol--cuadro__vineta
                span f
              | Haga clic en la celda que contiene el precio unitario. Excel insertará [@Precio Unitario].
            li.d-flex.bg-color-white.p-1
              .lista-ol--cuadro__vineta
                span g
              | La fórmula final será:
            li.d-flex.bg-color-white.p-1
              .lista-ol--cuadro__vineta
                span h
              | =[@Cantidad]*[@Precio Unitario]
            li.d-flex.bg-color-white.p-1
              .lista-ol--cuadro__vineta
                span i
              | Presione Enter. La fórmula se replicará en todas las filas de la tabla.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Fila de totales
    
    .row.mb-5
      .col-lg-5.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/16.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        .bg-color-5.tarjeta.p-5(data-aos="fade-left")
          p.mb-0 Otra ventaja importante de las Tablas de Excel es la opción de activar la fila de totales, una herramienta que agrega una fila especial al final de la tabla para calcular sumas, promedios, conteos u otras funciones de agregación sin necesidad de fórmulas adicionales. Al habilitar esta opción desde la pestaña Diseño de tabla, aparece una nueva fila con menús desplegables en cada celda. Esto permite elegir qué tipo de operación aplicar sobre cada columna de forma rápida y personalizada.

    h3.bg-color-14.d-md-inline.p-3.tarjeta Actividad práctica: uso de la fila de totales
    
    p.mb-5.mt-5 Calcular rápidamente el total de subtotales y la suma de cantidades sin escribir fórmulas manualmente. Siga los pasos a continuación para agregar una fila de totales al final de la tabla:

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/17.png", data-aos="zoom-in")
      .col-lg-6
        .bg-color-25.tarjeta.p-4(data-aos="fade-left")
          ol.lista-ol--cuadro.mb-0
            li.d-flex.bg-color-white.p-1
              .lista-ol--cuadro__vineta
                span a
              | Haga clic en cualquier celda dentro de la tabla.
            li.d-flex.bg-color-white.p-1
              .lista-ol--cuadro__vineta
                span b
              | En la cinta de opciones, aparecerá la pestaña contextual "Diseño de tabla". Haga clic en ella.
            li.d-flex.bg-color-white.p-1.mb-0
              .lista-ol--cuadro__vineta
                span c
              | En el grupo "Opciones de estilo de tabla", marque la casilla "Fila de totales".
    
    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5
        .row.justify-content-center.mb-5
          .col-lg-9
            .titulo-sexto.color-acento-contenido
              h5 Figura 9.
              span Activación de la fila de totales desde la pestaña diseño de tabla en Excel 
            figure
              img(src="@/assets/curso/tema2/18.png", data-aos="zoom-in", alt='Captura de pantalla de la pestaña Diseño de tabla con la opción "Fila de totales" seleccionada, lo cual habilita una fila adicional en la parte inferior de la tabla para realizar cálculos automáticos.')
        
        p.mb-5 Al completar el procedimiento, el resultado obtenido será el siguiente:

        .row.mb-5
          .col-lg-5.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema2/19.svg", data-aos="zoom-in")
          .col-lg-7.order-lg-1
            .bg-color-18.bg.tarjeta.p-4.mb-3(data-aos="fade-left")
              ul.lista-ul--color.mb-0
                li.mb-2.d-flex.bg-color-white.p-1.tarjeta
                  i.fas.fa-circle-arrow-right.bg-color-12
                  p.mb-0 Se añadirá una nueva fila al final de la tabla.
                li.mb-2.d-flex.bg-color-white.p-1.tarjeta
                  i.fas.fa-circle-arrow-right.bg-color-12
                  p.mb-0 La celda bajo la columna "Subtotal" mostrará automáticamente la suma total (por ejemplo: 4.260.000).
                li.mb-2.d-flex.bg-color-white.p-1.tarjeta
                  i.fas.fa-circle-arrow-right.bg-color-12
                  p.mb-0 Al hacer clic en esa celda, verá un menú desplegable con opciones como: Promedio, Recuento, Máx, Mín, etc.
                li.mb-2.d-flex.bg-color-white.p-1.tarjeta
                  i.fas.fa-circle-arrow-right.bg-color-12
                  p.mb-0 Puede aplicar una función diferente en cualquier columna. Por ejemplo, en la columna "Cantidad", seleccione Suma para conocer el número total de productos vendidos.

        separador
        
        #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 2.4 Funciones de agregación
        
        .row.mb-5
          .col-lg-3.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/20.png", data-aos="zoom-in")
          .col-lg-9.order-lg-1
            p(data-aos="fade-left") En el contexto de las tablas, Excel incluye funciones específicas llamadas funciones de agregación, que permiten resumir y analizar datos numéricos de manera eficiente. Estas funciones son fundamentales para interpretar tendencias, realizar informes y tomar decisiones basadas en datos. Funciones como SUMA, PROMEDIO, MAX, MIN o CONTAR.SI se combinan perfectamente con herramientas como filtrado y segmentación, facilitando análisis personalizados. Estas funciones se clasifican generalmente en cuatro categorías, según su propósito:
            .row.mb-5.align-items-center
              .col-lg-4.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/tema2/21.png", data-aos="zoom-in")
              .col-lg-8
                .row.mb-3
                  .col-lg-6.mb-3.mb-lg-0
                    .bg-color-5.p-3.tarjeta(data-aos="fade-left")
                      .row.align-items-center
                        .col-lg-auto
                          img(src="@/assets/curso/tema2/22.svg", style="max-width: 90px").mx-auto
                        .col-lg
                          p.mb-0.text-bold Funciones estadísticas básicas
                  .col-lg-6.mb-3.mb-lg-0
                    .bg-color-5.p-3.tarjeta(data-aos="fade-left")
                      .row.align-items-center
                        .col-lg-auto
                          img(src="@/assets/curso/tema2/23.svg", style="max-width: 90px").mx-auto
                        .col-lg
                          p.mb-0.text-bold Funciones de agregación condicional
                .row
                  .col-lg-6.mb-3.mb-lg-0
                    .bg-color-5.p-3.tarjeta(data-aos="fade-left")
                      .row.align-items-center
                        .col-lg-auto
                          img(src="@/assets/curso/tema2/24.svg", style="max-width: 90px").mx-auto
                        .col-lg
                          p.mb-0.text-bold Funciones de agregación avanzada
                  .col-lg-6.mb-3.mb-lg-0
                    .bg-color-5.p-3.tarjeta(data-aos="fade-left")
                      .row.align-items-center
                        .col-lg-auto
                          img(src="@/assets/curso/tema2/25.svg", style="max-width: 90px").mx-auto
                        .col-lg
                          p.mb-0.text-bold Agregación en tablas dinámicas

    p.mb-5 Estas funciones permiten realizar cálculos simples sobre conjuntos de datos numéricos. Son las más utilizadas en informes estándar.

    .titulo-sexto.color-acento-contenido
      h5 Tabla 7.
      span Funciones estadísticas básicas
    .tabla-a.color-acento-contenido.mb-5
      table
        thead
          tr
            th.bg-color-17 Función
            th.bg-color-17 Descripción
            th.bg-color-17 Ejemplo
        tbody
          tr.bg-color-sintesis
            td SUMA()
            td Suma todos los valores numéricos de un rango. Ignora texto y valores lógicos.
            td =SUMA(A2:A100)
          tr
            td PROMEDIO()
            td Calcula la media aritmética de los valores numéricos.
            td =PROMEDIO(Ventas[Monto])
          tr.bg-color-sintesis
            td MAX()
            td Devuelve el valor máximo de un rango.
            td =MAX(Inventario[Stock])
          tr
            td MIN()
            td Devuelve el valor mínimo de un rango.
            td =MIN(Precios[Precio_Unitario])
          tr.bg-color-sintesis
            td CONTAR()
            td Cuenta cuántas celdas contienen números.
            td =CONTAR(A1:A50)
          tr
            td CONTARA()
            td Cuenta celdas no vacías, incluyendo texto, fechas y errores.
            td =CONTARA(Empleados[Nombre])


    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Funciones de agregación condicional
    
    p.mb-5 Este grupo de funciones permite realizar cálculos solo si se cumplen ciertos criterios. Son útiles para comparar categorías, regiones, estados, entre otros.

    .titulo-sexto.color-acento-contenido
      h5 Tabla 8.
      span Funciones de agregación condicional
    .tabla-a.color-acento-contenido.mb-5
      table
        thead
          tr
            th.bg-color-17 Función
            th.bg-color-17 Descripción
            th.bg-color-17 Ejemplo
        tbody
          tr.bg-color-sintesis
            td SUMAR.SI()
            td Suma los valores que cumplen un solo criterio.
            td =SUMAR.SI(Región, "Norte", Ventas)
          tr
            td SUMAR.SI.CONJUNTO()
            td Suma valores que cumplen múltiples condiciones.
            td =SUMAR.SI.CONJUNTO(Ventas, Región, "Norte", Mes, "Enero")
          tr.bg-color-sintesis
            td PROMEDIO.SI()
            td Calcula el promedio de valores que cumplen una condición.
            td =PROMEDIO.SI(Categoría, "Electrónica", Precio)
          tr
            td CONTAR.SI()
            td Cuenta celdas que cumplen un criterio.
            td =CONTAR.SI(Estado, "Completado")
          tr.bg-color-sintesis
            td CONTAR.SI.CONJUNTO()
            td Cuenta celdas que cumplen múltiples criterios.
            td =CONTAR.SI.CONJUNTO(Región, "Sur", Estado, "Activo")


    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Funciones de agregación avanzada
    
    p.mb-5 Estas funciones ofrecen un control más preciso, especialmente cuando se trabaja con datos filtrados o con valores ocultos y errores.

    .titulo-sexto.color-acento-contenido
      h5 Tabla 9.
      span Funciones de agregación avanzada
    .tabla-a.color-acento-contenido.mb-5
      table
        thead
          tr
            th.bg-color-17 Función
            th.bg-color-17 Descripción
            th.bg-color-17 Ejemplo
        tbody
          tr.bg-color-sintesis
            td SUBTOTALES()
            td Realiza agregaciones (suma, promedio, contar, etc.) solo sobre filas visibles (respetando filtros).
            td =SUBTOTALES(9, Ventas[Monto])
          tr
            td AGREGAR()
            td Similar a SUBTOTALES, pero con más opciones: puede ignorar errores, valores ocultos y subtotales anidados.
            td =AGREGAR(9, 6, Datos[Valores])


    .bg-full-width.bg-fondo-1.mb-5
      .px-4.px-md-5
        p.mb-5 En ambas funciones, el primer número indica el tipo de operación:

        .row.mb-5.justify-content-center.align-items-center
          .col-lg-3.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/26.svg", data-aos="zoom-in")
          .col-lg-3.order-lg-1
            .bg-color-23.text-white.p-4.tarjeta(data-aos="fade-left")
              p.mb-0 1 = Promedio
              p.mb-0 2 = Contar
              p.mb-0 9 = Suma

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Agregación en tablas dinámicas
        
        p.mb-5 Las tablas dinámicas permiten realizar agregaciones de forma visual y sin necesidad de fórmulas. Al arrastrar un campo numérico al área de valores, Excel aplica automáticamente una función de agregación, que puede personalizarse según sea necesario.

        .row.mb-5.align-items-center.justify-content-center
          .col-lg-6.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema2/27.png", data-aos="zoom-in")
          .col-lg-4.order-lg-1
            .bg-color-10.bg.tarjeta.p-4.mb-3(data-aos="fade-left")
              p.text-white Entre las funciones disponibles se encuentran:
              ul.lista-ul--color.mb-0
                li.mb-2.d-flex.bg-color-white.p-1.tarjeta
                  i.fas.fa-circle-arrow-right.bg-color-12
                  p.mb-0 Suma de valores
                li.mb-2.d-flex.bg-color-white.p-1.tarjeta
                  i.fas.fa-circle-arrow-right.bg-color-12
                  p.mb-0 Recuento
                li.mb-2.d-flex.bg-color-white.p-1.tarjeta
                  i.fas.fa-circle-arrow-right.bg-color-12
                  p.mb-0 Promedio
                li.mb-2.d-flex.bg-color-white.p-1.tarjeta
                  i.fas.fa-circle-arrow-right.bg-color-12
                  p.mb-0 Máximo / Mínimo
                li.mb-2.d-flex.bg-color-white.p-1.tarjeta
                  i.fas.fa-circle-arrow-right.bg-color-12
                  p.mb-0 Producto
                li.mb-2.d-flex.bg-color-white.p-1.tarjeta
                  i.fas.fa-circle-arrow-right.bg-color-12
                  p.mb-0 Desviación estándar
                li.mb-2.d-flex.bg-color-white.p-1.tarjeta
                  i.fas.fa-circle-arrow-right.bg-color-12
                  p.mb-0 Varianza

        .row.mb-5.align-items-center.justify-content-center
          .col-lg-6.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/28.png", data-aos="zoom-in")
          .col-lg-4
            .bg-color-26.bg.tarjeta.p-4.mb-3(data-aos="fade-left")
              p.text-white Además, las tablas dinámicas permiten:
              ul.lista-ul--color.mb-0
                li.mb-2.d-flex.bg-color-white.p-1.tarjeta
                  i.fas.fa-circle-arrow-right.bg-color-12
                  p.mb-0 <b>Agrupar datos</b> por categorías o fechas (años, trimestres, meses)
                li.mb-2.d-flex.bg-color-white.p-1.tarjeta
                  i.fas.fa-circle-arrow-right.bg-color-12
                  p.mb-0 <b>Aplicar filtros</b> y segmentaciones visuales
                li.mb-2.d-flex.bg-color-white.p-1.tarjeta
                  i.fas.fa-circle-arrow-right.bg-color-12
                  p.mb-0 <b>Insertar campos calculados</b>, combinando varias columnas con operaciones personalizadas

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
