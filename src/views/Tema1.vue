<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Gestión de datos tabulares
    
    .bg-color-15.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema1/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") La gestión eficiente de datos es el núcleo de cualquier análisis significativo. En el contexto empresarial, esta capacidad puede ser la diferencia entre el éxito y el fracaso de un proyecto. Excel ofrece una herramienta poderosa, aunque a menudo subutilizada, que permite transformar un simple rango de celdas en una base de datos estructurada y dinámica: las Tablas.   

    separador
    
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Procedimientos de conversión 
    
    .row.mb-5.align-items-center
      .col-lg-3.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/2.svg", data-aos="zoom-in")
      .col-lg-9.order-lg-1
        .bg-color-16.tarjeta.p-5(data-aos="fade-left")
          p.mb-0 La conversión de datos consiste en transformar la información de un formato a otro para facilitar su análisis y manipulación dentro de Excel. En entornos corporativos, los datos provienen con frecuencia de sistemas heterogéneos, lo que hace necesario un proceso de normalización previo a su procesamiento.
    
    p.mb-5 En este contexto, es fundamental diferenciar entre un rango de datos y una Tabla de Excel, como se presenta a continuación:

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/3.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        TabsA.color-acento-botones.mb-5
          .tarjeta.color-acento-botones--borde.p-4(titulo="Rango de datos")
            h4 Rango de datos
            p Conjunto de celdas contiguas en una hoja. No tiene propiedades adicionales ni herramientas específicas de análisis.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Tabla de Excel")
            h4 Tabla de Excel
            p Objeto estructurado con nombre propio, encabezados identificables y funcionalidades como filtrado, ordenación, cálculos y actualización dinámica (Walkenbach, 2013).

    
    p.mb-5 Aunque un conjunto de datos organizado en filas y columnas parezca una tabla, no lo es hasta que Excel lo reconozca como tal. Por ejemplo, el siguiente bloque de información puede parecer una tabla por su forma, pero solo constituye un rango de celdas:

    .row.mb-5.justify-content-center
      .col-lg-6.mb-3.mb-lg-0
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span Ejemplo de rango de datos sin estructurar
        
        .tabla-a.color-acento-contenido.mb-5 
          table
            thead
              tr
                th.p-2.bg-color-17 Nombre
                th.p-2.bg-color-17 Apellido1
                th.p-2.bg-color-17 Apellido2
            tbody
              tr.bg-color-sintesis
                td.p-2 Juan
                td.p-2 Pérez
                td.p-2 Garcia
              tr
                td.p-2 María
                td.p-2 López
                td.p-2 Rodríguez
              tr.bg-color-sintesis
                td.p-2 Carlos
                td.p-2 Florez
                td.p-2 Silva
              tr
                td.p-2 Ana
                td.p-2 Ramirez
                td.p-2 López
              tr.bg-color-sintesis
                td.p-2 Pedro
                td.p-2 González
                td.p-2 Castro
      .col-lg-4
        .bg-color-10.text-white.tarjeta.p-5(data-aos="fade-left")
          img(src="@/assets/curso/tema1/4.svg", style="max-width: 90px").mb-3
          p.mb-0 Para que este conjunto pueda ser tratado como una Tabla de Excel, debe convertirse mediante el siguiente procedimiento.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Creación de una Tabla en Excel

    p Para transformar un rango en una tabla, siga estos pasos:

    ol.lista-ol--cuadro.mb-5
      li.d-flex
        .lista-ol--cuadro__vineta
          span a
        | Seleccione cualquier celda dentro del conjunto de datos. 
      li.d-flex
        .lista-ol--cuadro__vineta
          span b
        | Vaya a la pestaña Insertar y haga clic en Tabla, o utilice el atajo de teclado Ctrl + T.

    .bg-full-width.bg-fondo-1.mb-5
      .px-4.px-md-5
        .row.justify-content-center.mb-5
          .col-lg-8
            .titulo-sexto.color-acento-contenido
              h5 Figura 1.
              span Ventana Crear tabla en Excel

            figure
              img(src="@/assets/curso/tema1/5.png", data-aos="zoom-in", alt="Imagen de la interfaz emergente que aparece al insertar una tabla, donde se visualiza el rango seleccionado automáticamente y la opción para indicar si la tabla contiene encabezados. ")
    
        ol.lista-ol--cuadro.mb-5
          li.d-flex
            .lista-ol--cuadro__vineta
              span c
            | Excel seleccionará automáticamente el rango contiguo.
          li.d-flex
            .lista-ol--cuadro__vineta
              span d
            p Verifique que la selección sea correcta y asegúrese de marcar la casilla <b>"La tabla tiene encabezados"</b>, si la primera fila contiene los títulos de las columnas.
          li.d-flex
            .lista-ol--cuadro__vineta
              span e
            | Haga clic en Aceptar.


        .row.justify-content-center.mb-5
          .col-lg-8
            .titulo-sexto.color-acento-contenido
              h5 Figura 2.
              span Tabla creada en Excel con formato aplicado y encabezados definidos

            figure
              img(src="@/assets/curso/tema1/6.png", data-aos="zoom-in", alt="Captura de una tabla creada en Excel que muestra filas con bandas de color, encabezados visibles y diseño aplicado, evidenciando la conversión desde un rango plano a una tabla formal. ")
        
        p.mb-5 Una vez completado este proceso, el rango se convierte en una tabla con funcionalidades mejoradas como:

        .row
          .col-lg-4.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/7.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            .bg-color-18.tarjeta.p-4(data-aos="fade-left")
              .row.align-items-start
                .col-lg-auto.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema1/8.svg").mx-auto
                .col-lg
                  div.bg-color-white.p-4.tarjeta
                    ul.lista-ul--color.mb-0
                      li.mb-1.d-flex
                        i.fas.fa-circle-arrow-right.bg-color-12
                        p.mb-0 Filtrado automático en los encabezados.
                      li.mb-1.d-flex
                        i.fas.fa-circle-arrow-right.bg-color-12
                        p.mb-0 Aplicación de estilos predefinidos.
                      li.mb-1.d-flex
                        i.fas.fa-circle-arrow-right.bg-color-12
                        p.mb-0 Referencias estructuradas en fórmulas.
                      li.mb-1.d-flex
                        i.fas.fa-circle-arrow-right.bg-color-12
                        p.mb-0 Expansión automática al agregar nuevos registros.
    
    separador
    
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Ventajas de usar tablas en Excel
    
    p.mb-5 El uso de <b>Tablas de Excel</b> ofrece múltiples beneficios frente al manejo de rangos simples, especialmente en contextos donde se requiere eficiencia, claridad y actualización dinámica. A continuación, se enumeran algunas de las principales ventajas:
    
    .row.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/9.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-5")
          .div(titulo="Formato y estilo automático")
            p Las tablas aplican automáticamente un formato de bandas de colores a las filas, lo cual mejora la legibilidad. Este estilo puede personalizarse desde la pestaña contextual Diseño de tabla.
          .div(titulo="Expansión automática")
            p Al agregar una nueva fila o columna contigua, la tabla se expande automáticamente para incluir los nuevos datos, manteniendo tanto el formato como las fórmulas (Frye, 2013).
          .div(titulo="Encabezados visibles")
            p Al desplazarse verticalmente en una tabla grande, los encabezados sustituyen temporalmente las letras de las columnas, manteniendo siempre el contexto de los datos.
          .div(titulo="Fila de totales")
            p Con un solo clic, se puede añadir una fila al final de la tabla para calcular totales, promedios, recuentos u otras funciones de agregación de forma automática.

    separador
    
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Otros tipos de conversión de datos
    
    p.mb-5 Además de la conversión de rangos en tablas, Excel permite realizar otros tipos de conversión que resultan fundamentales al trabajar con datos provenientes de fuentes externas o mal estructurados:

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/10.svg", data-aos="zoom-in")
      .col-lg-6
        .row.mb-3
          .col-lg-6.mb-3.mb-lg-0
            .bg-color-17.p-3.tarjeta(data-aos="fade-left")
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema1/12.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0.text-bold Conversión de texto a columnas
          .col-lg-6.mb-3.mb-lg-0
            .bg-color-17.p-3.tarjeta(data-aos="fade-left")
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema1/11.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0.text-bold Conversión de formatos de datos
        .row
          .col-lg-6.mb-3.mb-lg-0
            .bg-color-17.p-3.tarjeta(data-aos="fade-left")
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema1/13.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0.text-bold Conversión de texto a columnas
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Conversión de texto a columnas
    
    p.mb-5 Una de las operaciones más comunes en Excel consiste en separar datos consolidados en una sola celda. Para ello, se utiliza la herramienta Texto en columnas, que permite dividir el contenido con base en:

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/14.png", data-aos="zoom-in")
      .col-lg-6.order-lg-1
        .bg-color-10.tarjeta.p-4(data-aos="fade-left")
          div.bg-color-white.p-4.tarjeta.mb-3
            ul.lista-ul--color.mb-0
              li.mb-1.d-flex
                i.fas.fa-circle-arrow-right.bg-color-12
                p.mb-0 Delimitadores (como espacios, comas o tabuladores)
              li.mb-1.d-flex
                i.fas.fa-circle-arrow-right.bg-color-12
                p.mb-0 Ancho fijo (posición específica de corte)
              
          p.mb-0.text-white Este procedimiento es esencial, por ejemplo, cuando se importan datos desde sistemas externos o archivos CSV que no respetan la estructura tabular. Un caso típico es una columna con nombres completos que se desea dividir en nombre, primer apellido y segundo apellido.

    h3.bg-color-14.d-lg-inline.p-3.tarjeta Ejemplo 1. Separación de nombres completos usando delimitador "espacio"
    
    p.mb-5.mt-5 En este ejemplo, se presenta cómo dividir una columna que contiene nombres completos en tres columnas: Nombre, Primer Apellido y Segundo Apellido.

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/15.png", data-aos="zoom-in")
      .col-lg-6
        .titulo-sexto.color-acento-contenido
          h5 Figura 3.
          span Columna combinada en Excel con el encabezado “Nombre Completo”

        figure
          img(src="@/assets/curso/tema1/16.png", data-aos="zoom-in", alt="Columna única en una hoja de Excel con registros combinados bajo el encabezado “Nombre Completo”, donde cada celda incluye nombre y apellidos en una sola línea de texto. ")
  
    p.mb-5 Los pasos del procedimiento son:

    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5
        .row.mb-5
          .col-lg-6.order-lg-2.mb-3.mb-lg-0
            .titulo-sexto.color-acento-contenido
              h5 Figura 4.
              span Columna combinada en Excel con el encabezado “Nombre Completo”

            figure
              img(src="@/assets/curso/tema1/17.png", data-aos="zoom-in", alt="Resultado de aplicar la herramienta “Texto en columnas” en Excel, donde los nombres completos han sido divididos en tres columnas distintas: Nombre, Primer Apellido y Segundo Apellido.  ")
          .col-lg-6.order-lg-1
            .bg-color-5.tarjeta.p-4(data-aos="fade-left")
              ol.lista-ol--cuadro.mb-0
                li.d-flex.bg-color-white.p-1
                  .lista-ol--cuadro__vineta
                    span a
                  | Seleccionar el rango A2:A6 (solo los datos).
                li.d-flex.bg-color-white.p-1
                  .lista-ol--cuadro__vineta
                    span b
                  | Ir a la pestaña Datos y hacer clic en Texto en columnas.
                li.d-flex.bg-color-white.p-1
                  .lista-ol--cuadro__vineta
                    span c
                  | Seleccionar Delimitado y hacer clic en Siguiente.
                li.d-flex.bg-color-white.p-1
                  .lista-ol--cuadro__vineta
                    span d
                  | Marcar únicamente la opción Espacio como delimitador.
                li.d-flex.bg-color-white.p-1
                  .lista-ol--cuadro__vineta
                    span e
                  | Hacer clic en Siguiente y verificar que la vista previa muestre tres columnas.
                li.d-flex.bg-color-white.p-1
                  .lista-ol--cuadro__vineta
                    span f
                  | En el campo Destino, dejar $A$2 si se desea sobrescribir, o cambiar a $B$2 si se desea conservar los datos originales.
                li.d-flex.bg-color-white.p-1
                  .lista-ol--cuadro__vineta
                    span g
                  | Hacer clic en Finalizar.

        h3.bg-color-14.d-lg-inline.p-3.tarjeta Ejemplo 2. Separación de datos con delimitador punto y coma
    
        p.mb-5.mt-5 En muchos casos, los sistemas ERP exportan información en formato CSV utilizando el punto y coma (;) como delimitador. Para analizar estos datos correctamente en Excel, es necesario separarlos en columnas individuales mediante la herramienta Texto en columnas.

        .row.mb-5.justify-content-center.align-items-center
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/18.png", data-aos="zoom-in")
          .col-lg-6
            .titulo-sexto.color-acento-contenido
              h5 Figura 5.
              span Columna “Datos_Cliente” en Excel

            figure
              img(src="@/assets/curso/tema1/19.png", data-aos="zoom-in", alt="Columna en Excel titulada “Datos_Cliente”, con registros que contienen múltiples campos (ID, nombre, email y teléfono) separados por punto y coma, antes de aplicar la separación en columnas. ")

        p.mb-5 Los pasos del procedimiento son:

        .row.mb-5.align-items-center
          .col-lg-6.order-lg-2.mb-3.mb-lg-0
            .titulo-sexto.color-acento-contenido
              h5 Figura 6.
              span Resultado del uso de la herramienta “Texto en columnas” en Excel

            figure
              img(src="@/assets/curso/tema1/20.png", data-aos="zoom-in", alt="Resultado en Excel después de usar “Texto en columnas”, mostrando los campos ID, nombre, correo electrónico y teléfono distribuidos en columnas distintas con formato textual. ")
          .col-lg-6.order-lg-1
            .bg-color-8.tarjeta.p-4(data-aos="fade-left")
              ol.lista-ol--cuadro.mb-0
                li.d-flex.bg-color-white.p-1
                  .lista-ol--cuadro__vineta
                    span a
                  | Seleccionar el rango A2:A5.
                li.d-flex.bg-color-white.p-1
                  .lista-ol--cuadro__vineta
                    span b
                  | Ir a la pestaña Datos y hacer clic en Texto en columnas.
                li.d-flex.bg-color-white.p-1
                  .lista-ol--cuadro__vineta
                    span c
                  | Seleccionar la opción Delimitado y hacer clic en Siguiente.
                li.d-flex.bg-color-white.p-1
                  .lista-ol--cuadro__vineta
                    span d
                  | Marcar Punto y coma como delimitador y hacer clic en Siguiente.
                li.d-flex.bg-color-white.p-1
                  .lista-ol--cuadro__vineta
                    span e
                  | Seleccionar el formato de datos para cada columna:
              ol.lista-ol--cuadro.mb-0.ms-3
                li.d-flex.bg-color-white.p-1
                  .lista-ol--cuadro__vineta
                    span a
                  | a.	Columna 1 (ID): General o Texto
                li.d-flex.bg-color-white.p-1
                  .lista-ol--cuadro__vineta
                    span b
                  | b.	Columna 2 (Nombre): Texto
                li.d-flex.bg-color-white.p-1
                  .lista-ol--cuadro__vineta
                    span c
                  | c.	Columna 3 (Email): Texto
                li.d-flex.bg-color-white.p-1
                  .lista-ol--cuadro__vineta
                    span d
                  | d.	Columna 4 (Teléfono): Texto
              ol.lista-ol--cuadro.mb-0
                li.d-flex.bg-color-white.p-1
                  .lista-ol--cuadro__vineta
                    span f
                  | Hacer clic en Finalizar.
    
    h3.bg-color-14.d-inline.p-3.tarjeta Ejemplo 3. Separación por ancho fijo
    
    p.mb-5.mt-5 Cuando los datos provienen de sistemas legacy o antiguos, es común que se generen reportes en formato de texto plano con posiciones fijas, es decir, sin delimitadores visibles como comas o puntos y comas. En estos casos, Excel permite separar la información utilizando la opción Ancho fijo en la herramienta Texto en columnas.

    .titulo-sexto.color-acento-contenido
      h5 Figura 7.
      span Columna “Reporte_Ventas” en Excel antes de aplicar la herramienta “Texto en columnas”
    
    .row.mb-5.align-items-center
      .col-lg-6.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/21.png", data-aos="zoom-in", alt="Resultado en Excel después de usar “Texto en columnas”, mostrando los campos ID, nombre, correo electrónico y teléfono distribuidos en columnas distintas con formato textual. ")
      .col-lg-6
        .bg-color-2.tarjeta.p-4(data-aos="fade-left")
          img(src="@/assets/curso/tema1/22.svg", style="max-width: 90px").mb-3
          p <b>Nota</b>.  Las posiciones de los datos están definidas de la siguiente manera:
          ul.lista-ul--color.mb-0
            li.mb-1.d-flex
              i.fas.fa-circle-arrow-right.bg-color-12
              p.mb-0 <b>Código</b>: 3 caracteres
            li.mb-1.d-flex
              i.fas.fa-circle-arrow-right.bg-color-12
              p.mb-0 <b>Nombre</b>: 13 caracteres
            li.mb-1.d-flex
              i.fas.fa-circle-arrow-right.bg-color-12
              p.mb-0 <b>Cantidad</b>: 4 caracteres
            li.mb-1.d-flex
              i.fas.fa-circle-arrow-right.bg-color-12
              p.mb-0 <b>Monto</b>: 7 caracteres
    
    p.mb-5 Los pasos del procedimiento son:

    .bg-full-width.bg-color-19.mb-5
      .px-4.px-md-5
        .row.mb-5.align-items-center.justify-content-center
          .col-lg-3.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/23.png", data-aos="zoom-in")
          .col-lg-7.order-lg-1
            .bg-color-13.bg.tarjeta.p-4(data-aos="fade-left")
              ol.lista-ol--cuadro.mb-0
                li.d-flex.bg-color-white.p-1
                  .lista-ol--cuadro__vineta
                    span a
                  | Seleccionar el rango A2:A5.
                li.d-flex.bg-color-white.p-1
                  .lista-ol--cuadro__vineta
                    span b
                  | Ir a la pestaña Datos y hacer clic en Texto en columnas.
                li.d-flex.bg-color-white.p-1
                  .lista-ol--cuadro__vineta
                    span c
                  | Seleccionar la opción Ancho fijo y hacer clic en Siguiente.
                li.d-flex.bg-color-white.p-1
                  .lista-ol--cuadro__vineta
                    span d
                  | Hacer clic para colocar las líneas divisorias en las posiciones correspondientes:
              ul.lista-ul--color.ms-3
                li.mb-1.d-flex.bg-color-white.p-1.tarjeta
                  i.fas.fa-circle-arrow-right.bg-color-12
                  p.mb-0 Después del carácter 3 (código)
                li.mb-1.d-flex.bg-color-white.p-1.tarjeta
                  i.fas.fa-circle-arrow-right.bg-color-12
                  p.mb-0 Después del carácter 16 (nombre)
                li.mb-1.d-flex.bg-color-white.p-1.tarjeta
                  i.fas.fa-circle-arrow-right.bg-color-12
                  p.mb-0 Después del carácter 20 (cantidad)
              ol.lista-ol--cuadro.mb-0
                li.d-flex.bg-color-white.p-1
                  .lista-ol--cuadro__vineta
                    span e
                  | Ajustar las líneas si es necesario, arrastrándolas manualmente.
                li.d-flex.bg-color-white.p-1
                  .lista-ol--cuadro__vineta
                    span f
                  | Asignar el formato adecuado para cada columna:
              ul.lista-ul--color.ms-3
                li.mb-1.d-flex.bg-color-white.p-1.tarjeta
                  i.fas.fa-circle-arrow-right.bg-color-12
                  p.mb-0 <b>Columna 1</b>: Texto (para conservar ceros iniciales)
                li.mb-1.d-flex.bg-color-white.p-1.tarjeta
                  i.fas.fa-circle-arrow-right.bg-color-12
                  p.mb-0 <b>Columna 2</b>: Texto
                li.mb-1.d-flex.bg-color-white.p-1.tarjeta
                  i.fas.fa-circle-arrow-right.bg-color-12
                  p.mb-0 <b>Columna 3</b>: General
                li.mb-1.d-flex.bg-color-white.p-1.tarjeta
                  i.fas.fa-circle-arrow-right.bg-color-12
                  p.mb-0 <b>Columna 4</b>: General
              ol.lista-ol--cuadro.mb-
                li.d-flex.bg-color-white.p-1
                  .lista-ol--cuadro__vineta
                    span g
                  | Hacer clic en Finalizar.

        p.mb-3 Los datos se separan correctamente en columnas individuales, conservando el formato y las posiciones originales:

        .row.mb-5.justify-content-center.align-items-center
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/24.png", data-aos="zoom-in")
          .col-lg-8
            .titulo-sexto.color-acento-contenido
              h5 Figura 8.
              span Resultado del uso de la herramienta “Texto en columnas” en Excel

            figure
              img(src="@/assets/curso/tema1/25.png", data-aos="zoom-in", alt="Columna en Excel titulada “Datos_Cliente”, con registros que contienen múltiples campos (ID, nombre, email y teléfono) separados por punto y coma, antes de aplicar la separación en columnas. ")

        p.mb-5 El proceso realizado con los tres ejemplos presentados lo pueden conocer en el siguiente video:

        figure
          .video.mb-2
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video: Leyenda del video
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Conversión de formatos de datos
    
    p.mb-5 Excel almacena internamente diferentes tipos de datos: texto, números, fechas, booleanos (valores lógicos) y errores. La conversión entre estos tipos es fundamental para asegurar que las operaciones matemáticas y lógicas funcionen correctamente. Entre los problemas más comunes se encuentran:

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/26.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        TabsA.color-acento-botones.mb-5
          .tarjeta.color-acento-botones--borde.p-4(titulo="Números almacenados como texto")
            h4 Números almacenados como texto
            p Impiden su uso en fórmulas y se identifican por el triángulo verde en la esquina superior izquierda de la celda.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Fechas mal interpretadas")
            h4 Fechas mal interpretadas
            p Surgen por diferencias en configuraciones regionales, como el uso de formatos distintos entre dd/mm/aaaa y mm/dd/aaaa.
    
    p.mb-5 Para abordar estos problemas, Excel ofrece varias funciones específicas que permiten convertir los datos al tipo adecuado según el contexto:

    .row.mb-5
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/27.png", data-aos="zoom-in")
      .col-lg-9
        .row.justify-content-center
          .col-md-6.col-lg-4.mb-4.mb-lg-0
            .tarjeta--boton.bg-color-20.p-4.h-100
              .row.justify-content-center.mb-3
                .col-5
                  figure
                    img(src='@/assets/curso/tema1/28.svg', alt='Texto que describa la imagen')
              h3.text-center.mb-5 TEXTO()
              p.text-center Convierte números a texto con un formato específico.
          .col-md-6.col-lg-4.mb-4.mb-lg-0
            .tarjeta--boton.bg-color-20.p-4.h-100
              .row.justify-content-center.mb-3
                .col-5
                  figure
                    img(src='@/assets/curso/tema1/29.svg', alt='Texto que describa la imagen')
              h3.text-center.mb-5 VALOR()
              p.text-center Convierte texto que representa números a valores numéricos reales.
          .col-md-6.col-lg-4.mb-4.mb-lg-0
            .tarjeta--boton.bg-color-20.p-4.h-100
              .row.justify-content-center.mb-3
                .col-5
                  figure
                    img(src='@/assets/curso/tema1/30.svg', alt='Texto que describa la imagen')
              h3.text-center.mb-5 FECHANUMERO()
              p.text-center Transforma texto con formato de fecha en número de serie válido para Excel.

    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Conversión de formatos de archivo
      
        p.mb-5 Excel permite importar datos desde diversas fuentes, como:

        .row.mb-5.justify-content-center
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/31.png", data-aos="zoom-in")
          .col-lg-7
            .bg-color-5.tarjeta.p-4(data-aos="fade-left")
              ul.lista-ul--color.mb-0
                li.mb-1.d-flex.bg-color-white.p-1.tarjeta
                  i.fas.fa-circle-arrow-right.bg-color-12
                  p.mb-0 Archivos de texto plano: .txt, .csv
                li.mb-1.d-flex.bg-color-white.p-1.tarjeta
                  i.fas.fa-circle-arrow-right.bg-color-12
                  p.mb-0 Bases de datos: Access, SQL Server
                li.mb-1.d-flex.bg-color-white.p-1.tarjeta
                  i.fas.fa-circle-arrow-right.bg-color-12
                  p.mb-0 Páginas web: .html
                li.mb-1.d-flex.bg-color-white.p-1.tarjeta
                  i.fas.fa-circle-arrow-right.bg-color-12
                  p.mb-0 Archivos estructurados: .xml, .json

        p.mb-5 Para estos casos, la herramienta Obtener datos (basada en Power Query) proporciona funciones avanzadas que permiten:

        .row.mb-5.justify-content-center
          .col-lg-4.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema1/32.png", data-aos="zoom-in")
          .col-lg-7.order-lg-1
            .bg-color-18.tarjeta.p-4(data-aos="fade-left")
              ul.lista-ul--color.mb-0
                li.mb-2.d-flex.bg-color-white.p-1
                  i.fas.fa-circle-arrow-right.bg-color-12
                  p.mb-0 <b>Limpiar</b> datos innecesarios.
                li.mb-2.d-flex.bg-color-white.p-1
                  i.fas.fa-circle-arrow-right.bg-color-12
                  p.mb-0 <b>Filtrar</b> registros.
                li.mb-2.d-flex.bg-color-white.p-1
                  i.fas.fa-circle-arrow-right.bg-color-12
                  p.mb-0 <b>Reestructurar</b> columnas y tipos antes de cargar los datos en la hoja de trabajo.

        p.mb-5 A continuación, se presenta un ejemplo práctico de conversión usando un archivo en formato CSV.

        figure
          .video.mb-2
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video: Leyenda del video

    separador
    
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4 Estructuración de datos

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/33.png')})`}"
      )(data-aos="zoom-in")
      .bloque-texto-g__texto.p-4
        p.mb-0 Para maximizar la eficiencia del análisis en Excel, es fundamental contar con una correcta estructuración de los datos. Una estructura bien diseñada facilita la aplicación de fórmulas, la creación de tablas dinámicas, la automatización de procesos y la implementación de controles de validación. <br><br> Uno de los enfoques recomendados es seguir los principios de datos tabulares, también conocidos como tidy data.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Principios de datos tabulares
    
    p.mb-5 Este enfoque propone organizar la información de acuerdo con el modelo de base de datos relacional. A continuación, se describen sus elementos fundamentales:

    .row.mb-5.justify-content-center
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/34.svg", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        .bg-color-17.tarjeta.p-4(data-aos="fade-left")
          ul.lista-ul--color.mb-0
            li.mb-2.d-flex.bg-color-white.p-1
              i.fas.fa-circle-arrow-right.bg-color-12
              p.mb-0 Cada <b>columna</b> representa un atributo o variable.
            li.mb-2.d-flex.bg-color-white.p-1
              i.fas.fa-circle-arrow-right.bg-color-12
              p.mb-0 Cada <b>fila</b> representa una observación o registro.
            li.mb-2.d-flex.bg-color-white.p-1
              i.fas.fa-circle-arrow-right.bg-color-12
              p.mb-0 Cada <b>celda</b> contiene un único valor.
    
    p.mb-5 Este formato facilita la limpieza, análisis y visualización de los datos, y constituye un estándar en entornos de análisis profesional.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Características de una tabla bien estructurada
    
    p.mb-5 Una tabla bien estructurada cumple con una serie de condiciones que permiten que Excel interprete y analice los datos de manera eficiente. En la siguiente tabla se resumen esas características clave:

    .bg-full-width.bg-fondo-2
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5.align-items-center.p-lg-5
          .col-lg-8.mb-3.mb-lg-0.order-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/36.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Encabezados claros y únicos
                p.text-center La primera fila debe contener nombres descriptivos, sin duplicados.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/37.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Sin celdas combinadas
                p.text-center Las celdas combinadas dificultan la lectura por parte de Excel y deben evitarse.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/38.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Sin filas o columnas vacías
                p.text-center No debe haber espacios en blanco dentro del rango de datos.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/39.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Columnas con un solo tipo de dato
                p.text-center Cada columna debe mantener homogeneidad en el tipo de información (texto, número, fecha, etc.).
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/40.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Sin totales o cálculos intermedios
                p.text-center Estos elementos deben ubicarse fuera del rango de datos principal, especialmente si se usarán tablas dinámicas.
          .col-lg-4.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/35.png', alt='')
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Normalización de datos
    
    .bg-color-21.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.order-2
          figure
            img(src='@/assets/curso/tema1/41.png', alt='')
        .col-lg.order-1.mb-3.mb-lg-0
          .p-4.text-white
            p.mb-0(data-aos="fade-up") Además de estructurar correctamente una tabla, es importante aplicar principios básicos de normalización, especialmente cuando se manejan grandes volúmenes de información. Aunque Excel no es una base de datos relacional, incorporar estas prácticas permite mantener los archivos ordenados, fáciles de mantener y menos propensos a errores.

    h3.bg-color-14.d-inline.p-3.tarjeta Ejemplo práctico
    
    p.mb-5.mt-5 La siguiente situación ejemplifica cómo aplicar la normalización en un entorno de ventas. En lugar de repetir información del cliente en cada transacción, se recomienda separarla en una tabla diferente vinculada por un identificador único:

    .row.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/42.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-22.tarjeta.p-4(data-aos="fade-left").mb-2
          .row.align-items-start
            .col-lg-auto.order-lg-2
              img(src="@/assets/curso/tema1/43.svg").mx-auto
            .col-lg.order-lg-1
              div.bg-color-white.p-4.tarjeta
                ul.lista-ul--color.mb-0
                  li.mb-0.d-flex
                    i.fas.fa-circle-arrow-right.bg-color-12
                    p.mb-0 <b>Tabla de ventas</b>: contiene el ID del cliente y los detalles de la transacción.
                  li.mb-0.d-flex
                    i.fas.fa-circle-arrow-right.bg-color-12
                    p.mb-0 <b>Tabla de clientes</b>: contiene los datos del cliente asociados al ID.
                  li.mb-0.d-flex
                    i.fas.fa-circle-arrow-right.bg-color-12
                    p.mb-0 Las funciones BUSCARV() o XLOOKUP() permiten recuperar los datos cuando se necesiten.
        p.mb-0 Este enfoque mejora la escalabilidad del archivo, reduce errores y facilita la actualización de datos.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Nomenclatura y consistencia
    
    p.mb-5 Una parte esencial de una estructura ordenada es la convención de nombres en los encabezados de columnas. Esta práctica permite que otros usuarios comprendan rápidamente el contenido y que las fórmulas funcionen correctamente. A continuación, se presentan las principales recomendaciones para nombrar campos de forma clara y consistente:

    .row
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/44.svg", data-aos="zoom-in")
      .col-lg-9
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span Buenas prácticas de nomenclatura
        .tabla-a.color-acento-contenido.mb-5
          table
            thead
              tr
                th.p-2.bg-color-17  Recomendación
                th.p-2.bg-color-17  Ejemplo / Justificación
            tbody
              tr.bg-color-sintesis
                td.p-2 Usar nombres descriptivos pero concisos
                td.p-2 Ventas, Fecha_Pago, Cliente_ID
              tr
                td.p-2 Evitar caracteres especiales y espacios
                td.p-2 Preferir Total_Anual en lugar de Total anual o Total@anual
              tr.bg-color-sintesis
                td.p-2 Mantener consistencia en mayúsculas
                td.p-2 Elegir entre nombre_cliente o Nombre_Cliente, pero no mezclarlos
              tr
                td.p-2 Incluir unidades de medida si aplica
                td.p-2 Peso_KG, Precio_USD, Duración_Horas
 
    separador
    
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.5 Ordenamiento de datos

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/45.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Ordenar datos es una de las tareas más comunes en Excel y resulta fundamental para organizar la información de forma alfabética, numérica o cronológica. Esta funcionalidad no solo mejora la legibilidad, sino que también permite detectar patrones, errores o valores atípicos en grandes conjuntos de datos.
    
        .bg-color-18.tarjeta.p-4(data-aos="fade-left")
          div.bg-color-white.p-3.tarjeta
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema1/46.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Las tablas de Excel incorporan controles de ordenación directamente en los encabezados. Al hacer clic en las flechas desplegables de cada columna, es posible aplicar diferentes tipos de ordenamiento según el tipo de dato.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Tipos de ordenamiento

    .bg-color-3.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.order-2
          figure
            img(src='@/assets/curso/tema1/47.png', alt='')
        .col-lg.order-1.mb-3.mb-lg-0
          .p-4
            p.mb-0(data-aos="fade-up") Existen principalmente dos tipos de ordenamiento en Excel: ordenación simple y ordenación multinivel. A continuación, se describen ambos con ejemplos prácticos.
    
    h3.bg-color-14.d-inline.p-3.tarjeta Ordenación simple
    
    p.mb-5.mt-5 Este tipo de ordenamiento organiza los datos según una sola columna, ya sea en orden ascendente o descendente. Es útil cuando se desea visualizar los valores más altos o más bajos de un campo específico, como ventas, fechas o cantidades. A continuación, se presenta un conjunto de datos sin ordenar, seguido del resultado luego de aplicar un orden ascendente por la columna Unidades Vendidas:

    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5
        .row.justify-content-center
          .col-lg-9
            .titulo-sexto.color-acento-contenido
              h5 Tabla 3.
              span Datos sin ordenar
            .tabla-a.color-acento-contenido.mb-5
              table
                thead
                  tr
                    th.bg-color-17 ID Vendedor
                    th.bg-color-17 Vendedor
                    th.bg-color-17 Región
                    th.bg-color-17 Producto
                    th.bg-color-17 Unidades Vendidas
                    th.bg-color-17 Fecha Venta
                tbody
                  tr.bg-color-sintesis
                    td 101
                    td Ana
                    td Sur
                    td Laptop
                    td 95
                    td 15/05/2025
                  tr.bg-color-white
                    td 102
                    td Luis
                    td Norte
                    td Teclado
                    td 80
                    td 12/05/2025
                  tr.bg-color-sintesis
                    td 103
                    td Carlos
                    td Norte
                    td Monitor
                    td 92
                    td 18/05/2025
                  tr.bg-color-white
                    td 101
                    td Ana
                    td Norte
                    td Laptop
                    td 75
                    td 20/05/2025
                  tr.bg-color-sintesis
                    td 104
                    td Sofía
                    td Sur
                    td Teclado
                    td 88
                    td 14/05/2025
                  tr.bg-color-white
                    td 102
                    td Luis
                    td Sur
                    td Monitor
                    td 65
                    td 19/05/2025
                  tr.bg-color-sintesis
                    td 103
                    td Carlos
                    td Norte
                    td Teclado
                    td 50
                    td 21/05/2025

            .titulo-sexto.color-acento-contenido
              h5 Tabla 4.
              span Resultado después del ordenamiento (Unidades Vendidas, descendente)
            .tabla-a.color-acento-contenido.mb-5
              table
                thead
                  tr
                    th.bg-color-17  ID Vendedor
                    th.bg-color-17  Vendedor
                    th.bg-color-17  Región
                    th.bg-color-17  Producto
                    th.bg-color-17  Unidades Vendidas
                    th.bg-color-17  Fecha Venta
                tbody
                  tr.bg-color-sintesis
                    td 101
                    td Ana
                    td Sur
                    td Laptop
                    td 95
                    td 15/05/2025
                  tr.bg-color-white
                    td 103
                    td Carlos
                    td Norte
                    td Monitor
                    td 92
                    td 18/05/2025
                  tr.bg-color-sintesis
                    td 104
                    td Sofía
                    td Sur
                    td Teclado
                    td 88
                    td 14/05/2025
                  tr.bg-color-white
                    td 102
                    td Luis
                    td Norte
                    td Teclado
                    td 80
                    td 12/05/2025
                  tr.bg-color-sintesis
                    td 101
                    td Ana
                    td Norte
                    td Laptop
                    td 75
                    td 20/05/2025
                  tr.bg-color-white
                    td 102
                    td Luis
                    td Sur
                    td Monitor
                    td 65
                    td 19/05/2025
                  tr.bg-color-sintesis
                    td 103
                    td Carlos
                    td Norte
                    td Teclado
                    td 50
                    td 21/05/2025

        p.mb-5 Este tipo de ordenación se aplica directamente desde los botones de flecha en los encabezados de las columnas.

        h3.bg-color-14.d-inline.p-3.tarjeta Ordenación multinivel
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/48.svg", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Cuando se necesita ordenar por más de un criterio jerárquico, se utiliza la ordenación multinivel. Por ejemplo, se puede ordenar primero por Departamento y luego, dentro de cada departamento, por Salario.
        p Este tipo de ordenación se configura desde el cuadro de diálogo Ordenar, y permite agregar múltiples niveles según se requiera.
        .bg-color-18.bg.tarjeta.p-4(data-aos="fade-left")
          p.mb-5 Los pasos para aplicar ordenación multinivel son:
          ol.lista-ol--cuadro.mb-0
            li.d-flex.bg-color-white.p-1
              .lista-ol--cuadro__vineta
                span a
              | Ir a la pestaña Datos y hacer clic en Ordenar.
            li.d-flex.bg-color-white.p-1
              .lista-ol--cuadro__vineta
                span b
              | En el cuadro de diálogo, seleccionar la primera columna por la cual ordenar (ejemplo: Departamento).
            li.d-flex.bg-color-white.p-1
              .lista-ol--cuadro__vineta
                span c
              | Hacer clic en Agregar nivel.
            li.d-flex.bg-color-white.p-1
              .lista-ol--cuadro__vineta
                span d
              | Seleccionar el segundo criterio (ejemplo: Salario) y el orden (ascendente o descendente).
            li.d-flex.bg-color-white.p-1
              .lista-ol--cuadro__vineta
                span e
              | Repetir el proceso si se desea agregar más niveles.
    
    p.mb-5 Se pueden agregar tantos criterios como sea necesario para refinar el análisis y garantizar un orden lógico y coherente de la información (Winston, 2019). Para reforzar lo aprendido, a continuación, se presenta un video que explica paso a paso cómo aplicar la ordenación simple y la ordenación multinivel en Excel.

    figure
      .video.mb-2
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video

    separador
    
    #t_1_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.6 Filtrado de datos
    
    .bloque-texto-g.color-acento-contenido.bg-color-6.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/49.png')})`}"
      )(data-aos="zoom-in")
      .bloque-texto-g__texto.p-4
        p.mb-0 El filtrado en Excel permite visualizar subconjuntos específicos de datos sin modificar ni eliminar los registros originales. Esta funcionalidad resulta esencial para realizar análisis focalizados, responder preguntas concretas o explorar tendencias y patrones dentro de conjuntos de datos amplios.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Autofiltro: herramienta de filtrado básico
    
    .row.mb-5
      .col-lg-5.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/50.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        p(data-aos="fade-left") Una de las formas más directas de aplicar filtros es mediante el autofiltro, que agrega menús desplegables a cada encabezado de columna en una tabla. Desde allí, el usuario puede seleccionar o deseleccionar elementos específicos de manera rápida e intuitiva. Esta opción es ideal para análisis exploratorios o consultas ad hoc. A continuación se enumeran sus principales capacidades:
        .bg-color-22.bg.tarjeta.p-4(data-aos="fade-left")
          ul.lista-ul--color.mb-0
            li.mb-1.d-flex.bg-color-white.p-1.tarjeta
              i.fas.fa-circle-arrow-right.bg-color-12
              p.mb-0 Selección múltiple de valores discretos.
            li.mb-1.d-flex.bg-color-white.p-1.tarjeta
              i.fas.fa-circle-arrow-right.bg-color-12
              p.mb-0 Filtros de texto: contiene, comienza con, termina con.
            li.mb-1.d-flex.bg-color-white.p-1.tarjeta
              i.fas.fa-circle-arrow-right.bg-color-12
              p.mb-0 Filtros numéricos: mayor que, menor que, entre.
            li.mb-1.d-flex.bg-color-white.p-1.tarjeta
              i.fas.fa-circle-arrow-right.bg-color-12
              p.mb-0 Filtros de fecha: incluye opciones relativas como "mes pasado", "esta semana", "este año".

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Filtros avanzados: condiciones complejas
    
    p.mb-5 Cuando se requiere mayor precisión, Excel ofrece la opción de aplicar filtros avanzados, los cuales permiten trabajar con múltiples criterios y lógica combinada (AND/OR). A diferencia del autofiltro, estos requieren definir un rango de criterios independiente, en el que se especifican las condiciones a aplicar. Los filtros avanzados son útiles cuando se necesita automatizar búsquedas complejas o generar subconjuntos que cumplan con reglas específicas. Las características de los filtros avanzados son: 


    .row.justify-content-center.mb-5
      .col-md-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.bg-color-20.p-4.h-100
          .row.justify-content-center.mb-3
            .col-5
              figure
                img(src='@/assets/curso/tema1/51.svg', alt='Texto que describa la imagen')
          h3.text-center.mb-5 Criterios complejos con comodines (*, ?)
          p.text-center Permiten búsquedas parciales o patrones definidos
      .col-md-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.bg-color-20.p-4.h-100
          .row.justify-content-center.mb-3
            .col-5
              figure
                img(src='@/assets/curso/tema1/52.svg', alt='Texto que describa la imagen')
          h3.text-center.mb-5 Extracción de resultados a otra ubicación
          p.text-center Se pueden copiar los datos filtrados en un rango distinto
      .col-md-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.bg-color-20.p-4.h-100
          .row.justify-content-center.mb-3
            .col-5
              figure
                img(src='@/assets/curso/tema1/53.svg', alt='Texto que describa la imagen')
          h3.text-center.mb-5 Eliminación de duplicados
          p.text-center Durante el proceso de filtrado, se puede excluir registros repetidos
      .col-md-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.bg-color-20.p-4.h-100
          .row.justify-content-center.mb-3
            .col-5
              figure
                img(src='@/assets/curso/tema1/54.svg', alt='Texto que describa la imagen')
          h3.text-center.mb-5 Uso de fórmulas como criterios
          p.text-center Uso de fórmulas como criterios

    .bg-full-width.bg-color-19.mb-5
      .px-4.px-md-5
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Segmentaciones de datos: filtrado visual
        
        p.mb-5 Las segmentaciones de datos (Slicers) son controles visuales diseñados para aplicar filtros con un solo clic. Aunque inicialmente fueron creadas para tablas dinámicas, hoy también se pueden aplicar a Tablas de Excel normales. Son especialmente útiles en paneles (dashboards) o reportes interactivos. A continuación, se presentan algunas de sus ventajas clave:

        .row.mb-5
          .col-lg-5.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/55.png", data-aos="zoom-in")
          .col-lg-7.order-lg-1
            .bg-color-23.bg.tarjeta.p-4(data-aos="fade-left")
              ul.lista-ul--color.mb-0
                li.mb-1.d-flex.bg-color-white.p-1.tarjeta
                  i.fas.fa-circle-arrow-right.bg-color-12
                  p.mb-0 Claridad visual del estado actual del filtro aplicado.
                li.mb-1.d-flex.bg-color-white.p-1.tarjeta
                  i.fas.fa-circle-arrow-right.bg-color-12
                  p.mb-0 Facilidad para seleccionar y deseleccionar múltiples elementos.
                li.mb-1.d-flex.bg-color-white.p-1.tarjeta
                  i.fas.fa-circle-arrow-right.bg-color-12
                  p.mb-0 Posibilidad de conectar una misma segmentación a varias tablas o gráficos.
                li.mb-1.d-flex.bg-color-white.p-1.tarjeta
                  i.fas.fa-circle-arrow-right.bg-color-12
                  p.mb-0 Opciones de formato personalizables que permiten integrarse al diseño corporativo.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Actividad práctica
        
        p.mb-5 Siga los pasos de esta actividad práctica para crear y analizar una tabla de recursos humanos en Excel, aplicando ordenamientos, filtros y segmentaciones que facilitan la interpretación de los datos.

        .row.mb-5.justify-content-center
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/56.svg", data-aos="zoom-in")
          .col-lg-8
            LineaTiempoD.color-secundario
              p(numero="1" titulo="Crear tabla base") Ingrese los campos: Nombre, Departamento, Cargo, FechaContratación y Salario. Luego, escriba algunos registros de ejemplo (mínimo 8 empleados).
              p(numero="2" titulo="Convertir a tabla") Seleccione el rango con los datos. En la pestaña Insertar, elija Tabla y confirme que la casilla “La tabla tiene encabezados” esté activada.
              div(numero="3" titulo="Ordenar datos") 
                ol.lista-ol
                  li.d-flex 
                    span.text-bold 1. 
                    | Haga clic en cualquier celda dentro de la columna Departamento y ordene de A a Z.
                  li.d-flex 
                    span.text-bold 2. 
                    | Luego, ordene la columna Salario de mayor a menor dentro de cada departamento.
              div(numero="4" titulo="Aplicar filtros") 
                ol.lista-ol
                  li.d-flex 
                    span.text-bold 1. 
                    | Active los filtros desde la pestaña Datos > Filtro.
                  li.d-flex 
                    span.text-bold 2. 
                    | En la columna Departamento, seleccione solo Ventas.
                  li.d-flex 
                    span.text-bold 3. 
                    | En la columna FechaContratación, elija Posterior a 01/01/2022.
              div(numero="4" titulo="Insertar segmentación de datos") 
                ol.lista-ol
                  li.d-flex 
                    span.text-bold 1. 
                    | Seleccione cualquier celda de la tabla.
                  li.d-flex 
                    span.text-bold 2. 
                    | Vaya a Herramientas de tabla > Insertar segmentación de datos.
                  li.d-flex 
                    span.text-bold 3. 
                    | Marque Cargo y haga clic en Aceptar.
                  li.d-flex 
                    span.text-bold 4. 
                    | Use la segmentación para filtrar visualmente los empleados según su cargo.



           






</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
