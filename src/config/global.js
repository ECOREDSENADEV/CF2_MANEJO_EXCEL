export default {
  global: {
    Name: 'Gestión de gráficos en Excel',
    Description:
      'Este componente aborda la conversión de rangos estáticos en tablas dinámicas de Excel para optimizar la gestión y el análisis de datos. Incluye el uso de herramientas de ordenación, filtrado y representación gráfica, fomentando competencias para crear y personalizar gráficos que comuniquen información relevante y respalden decisiones estratégicas en entornos organizacionales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Gestión de datos tabulares',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Procedimientos de conversión',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Ventajas de usar tablas en Excel',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Otros tipos de conversión de datos',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Estructuración de datos',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Ordenamiento de datos',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: '1.6.	Filtrado de datos',
            hash: 't_1_6',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Tablas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Rangos ',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Tipos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Referencias estructuradas y fila de totales ',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Funciones de agregación',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Gráficos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Gráficos de barras y columnas',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Gráficos de líneas',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Gráficos circulares (pastel)',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Gráficos de dispersión',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Gráficos de área',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Gráficos combinados',
            hash: 't_3_6',
          },
          {
            numero: '3.7',
            titulo: 'Elementos de diseño',
            hash: 't_3_7',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Gestión de datos tabulares',
      referencia:
        'Ecosistema de Recursos Educativos SENA. (2022). <em>Recursos y herramientas para el análisis efectivo de datos: introducción</em> [Video]. YouTube',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=BP8OeszBSCc',
    },
    {
      tema: 'Gestión de datos tabulares',
      referencia:
        'Ecosistema de Recursos Educativos SENA. (2022). <em>Manipular los datos</em>. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=nIHKG1B9hQY',
    },
    {
      tema: 'Gestión de datos tabulares',
      referencia:
        'Ecosistema de Recursos Educativos SENA. (2022). <em>Proceso de normalización de datos</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=hKwuc-JJisI&t=63s',
    },
  ],
  glosario: [
    {
      termino: 'Filtrar',
      significado:
        'proceso de mostrar únicamente las filas de un conjunto de datos que cumplen con un criterio específico, ocultando temporalmente el resto.',
    },
    {
      termino: 'Gráfico',
      significado:
        'representación visual de datos numéricos que tiene como objetivo facilitar la comprensión de la información, mostrando tendencias, patrones o comparaciones.',
    },
    {
      termino: 'Ordenar',
      significado:
        'proceso de organizar las filas de un conjunto de datos en un orden específico, ya sea alfabético, numérico o cronológico.',
    },
    {
      termino: 'Referencia estructurada',
      significado:
        'un tipo de referencia utilizada en las tablas de Excel que usa los nombres de las columnas en lugar de las direcciones de celda (ej. =[@Salario]), haciendo las fórmulas más legibles.',
    },
    {
      termino: 'Segmentación de datos',
      significado:
        'una herramienta de filtrado visual que utiliza botones para filtrar rápidamente los datos en tablas, tablas dinámicas y gráficos dinámicos.',
    },
    {
      termino: 'Serie de datos',
      significado:
        'conjunto de puntos de datos relacionados que se trazan en un gráfico. Por ejemplo, en un gráfico de ventas mensuales, las ventas de cada producto serían una serie de datos diferente.',
    },
  ],
  referencias: [
    {
      referencia:
        'Balcells, E. (2019). <em>Análisis de datos con Excel: Funciones y técnicas avanzadas.</em> Editorial Técnica.',
      link: '',
    },
    {
      referencia:
        'Frye, C. (2013). <em>Microsoft Excel 2013 step by step.</em> Pearson Education.',
      link: '',
    },
    {
      referencia:
        'Kusleika, M., & Walkenbach, J. (2019). <em>Excel 2019 bible.</em> John Wiley & Sons.',
      link: '',
    },
    {
      referencia:
        'McFedries, P. (2019). <em>Microsoft Excel 2019 formulas and functions.</em> Microsoft Press.',
      link: '',
    },
    {
      referencia:
        'Microsoft Corporation. (2021). <em>Microsoft Excel documentation and specifications.</em> Microsoft Support.',
      link: '',
    },
    {
      referencia:
        'Microsoft. (2025). <em>Usar referencias estructuradas con las tablas de Excel.</em>',
      link:
        'https://support.microsoft.com/es-es/office/f5ed2452-2337-4f71-bed3-c8ae6d2b276e',
    },
    {
      referencia:
        'Walkenbach, J. (2013). <em>Excel 2013 bible.</em> John Wiley & Sons.',
      link: '',
    },
    {
      referencia:
        'Winston, W. (2019). <em>Microsoft Excel 2019 Data analysis and business modeling.</em> Microsoft Press.',
      link: '',
    },
    {
      referencia:
        'Winston, W. (2021). <em>Microsoft Excel data analysis and business modeling (Office 2021 and Microsoft 365).</em> Microsoft Press.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
