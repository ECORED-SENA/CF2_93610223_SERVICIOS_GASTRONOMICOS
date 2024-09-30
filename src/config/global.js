export default {
  global: {
    componenteFormativo: 'El servicio',
    descripcionCurso:
      'El componente formativo destaca la importancia de la calidad del servicio para fidelizar clientes. Aborda características clave del servicio, los diez mandamientos para un buen servicio y conceptos de <em>catering</em>, incluyendo tipos de servicios, componentes esenciales y confección de menús. Enfatiza la cortesía, atención personalizada y agilidad para cumplir con las expectativas del cliente.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
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
        titulo: 'El servicio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Aspectos relacionados con un buen servicio',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Los diez mandamientos del buen servicio',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Servicio de <em>catering</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Aspectos fundamentales para la calidad del servicio de <em>catering</em>',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Tipos de servicio de <em>catering</em>',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Componentes del servicio de <em>catering</em>',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Confección de menús',
            hash: 't_2_4',
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
        download: 'downloads/prueba.pdf',
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
      tema: 'El servicio',
      referencia:
        'TEDx Talks. (2022). La vocación de servicio como estrategia | josé barreiro | TEDxTorrelodones. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=JP0kw85R3IE&ab_channel=TEDxTalks',
    },
    {
      tema: 'Aspectos relacionados con un buen servicio',
      referencia:
        'Restaurantes Exitosos. (2022). Así se ofrece un servicio al cliente de calidad | Restaurantes Exitosos. [Archivo de video] Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=RBX-o4SFXbE&ab_channel=RestaurantesExitosos',
    },
    {
      tema: 'Los diez mandamientos del buen servicio',
      referencia:
        'Villanett (2024). Los 10 Mandamientos para la Atención al Cliente. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=uJuSKCK5910&ab_channel=Villanett',
    },
    {
      tema: 'Servicio de <em>catering</em>',
      referencia:
        'El Confidencial. (2015). Cómo funciona un catering. [Archivo de video] Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=Q36czZQx3Nw&ab_channel=ElConfidencial',
    },
    {
      tema: 'Tipos de servicio de <em>catering</em>',
      referencia:
        'Mashed Español. (2020). Así Es Cómo Las Cadenas De Restaurantes De Buffet Te Estafan. [Archivo de video] Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=ODtTAfnTEXM&ab_channel=MashedEspa%C3%B1ol',
    },
  ],
  glosario: [
    {
      termino: '<em>Catering</em>',
      significado:
        'servicio de alimentos y bebidas en eventos, fiestas o presentaciones, con múltiples componentes.',
    },
    {
      termino: 'Confiabilidad',
      significado:
        'capacidad del servicio de cumplir lo que promete, generando confianza en el cliente.',
    },
    {
      termino: 'Cortesía',
      significado: 'trato amable y respetuoso que el cliente espera recibir.',
    },
    {
      termino: 'Fidelización',
      significado:
        'proceso de lograr que los clientes vuelvan a utilizar los servicios de una empresa de forma regular.',
    },
    {
      termino: 'Inseparable',
      significado: 'el servicio se produce y consume simultáneamente.',
    },
    {
      termino: 'Intangible',
      significado:
        'característica del servicio que indica que no se puede tocar, sentir, escuchar ni oler antes de la compra.',
    },
    {
      termino: 'Perecedero',
      significado: 'los servicios no pueden almacenarse para su uso posterior.',
    },
    {
      termino: 'Servicio',
      significado:
        'conjunto de prestaciones que el cliente espera, además del producto o servicio básico.',
    },
    {
      termino: 'Variable',
      significado:
        'la calidad del servicio puede cambiar según quién, cuándo, cómo y dónde se ofrece.',
    },
  ],
  referencias: [
    {
      referencia:
        'Betancourt-Ramírez, J. B., Aldana-de-Vega, L., & Gómez-Betancourt, G.  (2014). Servicio, ambiente y calidad de restaurantes en Bogotá. Estudio comparativo de empresa familiar y empresa no familiar. Entramado, 10(2), 60-74.',
      link: 'https://www.redalyc.org/articulo.oa?id=265433711005',
    },
    {
      referencia:
        'Emcebar. (2021). GUÍA DE SERVICIO AL CLIENTE PARA RESTAURANTES.',
      link:
        'https://www.cursosgastronomia.com.mx/storage/2021/11/Servicio-al-cliente-para-restaurantes.pdf',
    },
    {
      referencia:
        'Zambrana Martínez, M. J. (2014). UF0259: Servicio y atención al cliente en restaurante (5.ª ed.). Editorial eLearning S.L. ISBN: 978-84-16275-32-8.',
      link:
        'https://www.editorialelearning.com/catalogo/media/iverve/uploadpdf/1525959058_UF0259_demo.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
