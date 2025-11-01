<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Tablas y gráficos.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar el conocimiento adquirido sobre los tablas y gráficos en Excel',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            "Para aplicar el formato de 'Tabla' en Excel, primero se debe seleccionar el rango de celdas que se desea convertir.",
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: true },
            { id: 'b', texto: 'Falso.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Si no se selecciona un rango, Excel intentará adivinarlo, pero siempre es mejor seleccionar para asegurar la precisión.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            'Los gráficos de líneas son los más adecuados para mostrar la proporción de cada categoría con respecto a un total.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: false },
            { id: 'b', texto: 'Falso.', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Los gráficos circulares (o de pastel) son los más adecuados para mostrar proporciones de un todo.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'Una ventaja clave de las Tablas de Excel es que las fórmulas con referencias estructuradas se expanden automáticamente al añadir nuevas filas.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: true },
            { id: 'b', texto: 'Falso.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Las referencias absolutas usan el símbolo $ precisamente para evitar que se ajusten y mantener la referencia fija.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            'El filtrado de datos oculta temporalmente las filas que no cumplen con un criterio, pero no las elimina permanentemente.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: true },
            { id: 'b', texto: 'Falso.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. El operador ^ se utiliza para la exponenciación (elevar a una potencia), no para la multiplicación, que se realiza con el operador *.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            'Un gráfico combinado permite representar múltiples series de datos con diferentes escalas de forma efectiva.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: true },
            { id: 'b', texto: 'Falso.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. La Barra de Fórmulas muestra y permite editar el contenido de la celda activa. Las hojas se gestionan desde sus pestañas en la parte inferior.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            'La "Fila de totales" en una Tabla de Excel solo puede calcular la suma de los valores de una columna.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: false },
            { id: 'b', texto: 'Falso.', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Excel los almacena como números de serie, lo que permite sumarlos, restarlos y realizar otros cálculos de tiempo.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            'Los gráficos de dispersión son ideales para mostrar tendencias de datos a lo largo del tiempo.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: false },
            { id: 'b', texto: 'Falso.', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. La principal característica de las referencias relativas es que se ajustan automáticamente a su nueva posición.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            'Una segmentación de datos (Slicer) es una herramienta de filtrado visual más interactiva que los autofiltros tradicionales.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: true },
            { id: 'b', texto: 'Falso.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Para concatenar texto se debe usar el operador &. El uso del operador + con texto arrojará un error de valor.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            'En una ordenación multinivel, el segundo criterio se aplica solo cuando hay valores duplicados en el primer criterio.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: true },
            { id: 'b', texto: 'Falso.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Esta es la definición precisa de una función. Por ejemplo, SUMA() es una función que simplifica una fórmula de sumas largas.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            'El título de un gráfico debe ser siempre lo más breve posible, incluso si esto sacrifica la claridad.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: false },
            { id: 'b', texto: 'Falso.', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Ambos se utilizan para el mismo fin: unir o concatenar cadenas de texto. Son dos métodos distintos para lograr el mismo resultado.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            'Los rangos de datos en Excel tienen la capacidad de expandirse automáticamente cuando se agrega una nueva fila o columna adyacente.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: false },
            { id: 'b', texto: 'Falso.', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. La multiplicación y división tienen mayor precedencia y se ejecutan primero, a menos que se usen paréntesis.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            'La leyenda de un gráfico siempre es necesaria, incluso si solo hay una serie de datos.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: false },
            { id: 'b', texto: 'Falso.', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo La opción "Ajustar texto" hace que el texto se muestre en múltiples líneas para que sea visible; no altera el tamaño de la fuente.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            'Los gráficos de área son útiles para mostrar el volumen acumulado o la contribución de componentes a un total.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: true },
            { id: 'b', texto: 'Falso.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. La tecla F4 es un atajo fundamental para trabajar eficientemente con los distintos tipos de referencias.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            'Las etiquetas de datos en un gráfico deben usarse siempre para cada punto de datos, sin importar la cantidad.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: false },
            { id: 'b', texto: 'Falso.', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. CONTAR() solo cuenta celdas con números, mientras que CONTARA() cuenta todas las celdas que no están vacías, sin importar el tipo de dato.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            'La principal diferencia entre un rango de datos y una Tabla de Excel formal radica en sus propiedades y funcionalidades dinámicas.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: true },
            { id: 'b', texto: 'Falso.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. La prueba lógica 15<10 es falsa, por lo que la función devolverá el segundo valor, "Incorrecto".',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            'Un gráfico de barras horizontales es preferible cuando las categorías tienen nombres largos.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: true },
            { id: 'b', texto: 'Falso.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Una diferencia clave es que el formato "Contabilidad" alinea los símbolos de moneda y los puntos decimales en una columna, mientras que "Moneda" no.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            'Las Tablas Dinámicas se utilizan principalmente para registrar y organizar grandes volúmenes de datos brutos.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: false },
            { id: 'b', texto: 'Falso.', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Debido a la jerarquía de operadores, Excel primero calcula 5*2=10 y luego 10+10=20. Para obtener 30, la fórmula debería ser =(10+5)*2.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            'Al ordenar datos por una columna de texto, Excel solo permite ordenar de la A a la Z, no al revés.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: false },
            { id: 'b', texto: 'Falso.', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Una referencia de celda (ej. B4) identifica una única celda en la intersección de una fila y una columna.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            'Los filtros de texto permiten buscar valores que "contienen", "comienzan por" o "terminan con" una palabra específica.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: true },
            { id: 'b', texto: 'Falso.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. La función LARGO() cuenta el número de caracteres en la cadena de texto proporcionada, y la palabra "Excel" tiene 5 letras.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            'Un diseño de gráfico con muchos efectos 3D, sombras y fondos complejos siempre mejora la comunicación de los datos.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: false },
            { id: 'b', texto: 'Falso.', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. La función MIN() se utiliza para encontrar el valor mínimo. Para encontrar el valor máximo, se debe usar la función MAX().',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
