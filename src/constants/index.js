const navigation = [
  {
    id: 1,
    text: "Home",
    url: "#home"
  },
  {
    id: 2,
    text: "Anuncios",
    url: "#anuncios"
  },
  {
    id: 3,
    text: "Quienes Somos",
    url: "#about"
  },
  {
    id: 4,
    text: "Oferta Académica",
    url: "#offert"
  },
  {
    id: 6,
    text: "Contacto",
    url: "#contact"
  }
];

const anuncios = [
  {
    id: "1",
    title: "¡Regreso a Clases!",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem repudiandae quibusdam mollitia maiores aut velit amet nemo, ratione distinctio reprehenderit quisquam veniam dolor ad, impedit cumque consectetur soluta aperiam facilis?",
    image_url: "https://blog.up.edu.mx/hubfs/PrepaUP/PrepaUP-Varonil/Blog-Images/Blog-%C2%BFCo%CC%81mo%20es%20un%20alumno%20de%20la%20Preparatoria%20Panamericana%3F-V.png"
  },
  {
    id: "2",
    title: "¿Cómo funciona la academia?",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem repudiandae quibusdam mollitia maiores aut velit amet nemo, ratione distinctio reprehenderit quisquam veniam dolor ad, impedit cumque consectetur soluta aperiam facilis?",
    image_url: "https://blogs.unib.org/wp-content/uploads/2021/12/unini-separar-clases.jpg"
  },
  {
    id: "3",
    title: "¡Ya somos mas de 100 alumnos!",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem repudiandae quibusdam mollitia maiores aut velit amet nemo, ratione distinctio reprehenderit quisquam veniam dolor ad, impedit cumque consectetur soluta aperiam facilis?",
    image_url: "https://www.lucaedu.com/wp-content/uploads/2021/11/clases-virtuales-1-1.jpg"
  },
  {
    id: "4",
    title: "Reconocimiento a María por sus 10 años de servicio como maestra",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem repudiandae quibusdam mollitia maiores aut velit amet nemo, ratione distinctio reprehenderit quisquam veniam dolor ad, impedit cumque consectetur soluta aperiam facilis?",
    image_url: "https://definicion.de/wp-content/uploads/2019/09/Profesora-facultad.jpg"
  },
];

const reviews = [
  {
    id: "rev01",
    revList: [
      { id: "rev0101", img_src: "https://img.freepik.com/psd-gratis/3d-ilustracion-persona-cabello-rosado_23-2149436186.jpg?t=st=1722632150~exp=1722632750~hmac=43b3509a8e9562d1d0ce13c00bb88de971b017b512924102f64f2123a099aa31", img_alt: "Imagen de Perfil", name: "Lucía", rate: 9, rol: "Madre", com: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, nemo nam sequi perferendis inventore tempora ipsa repudiandae provident eveniet velit consequatur a odio in quasi quae explicabo odit! Beatae, nisi." },
      { id: "rev0102", img_src: "https://img.freepik.com/psd-gratis/render-3d-personaje-avatar_23-2150611771.jpg?t=st=1722632331~exp=1722632931~hmac=36235fcf85df56c4599ef33f5df1c1d825cd9de620dc087c63d1358ae4442a9e", img_alt: "Imagen de Perfil", name: "Raúl", rate: 10, rol: "Padre", com: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, maiores architecto maxime velit similique molestiae iste libero deleniti porro molestias nulla quos ut exercitationem quisquam iusto. Odit qui fugit voluptas." },
      { id: "rev0103", img_src: "https://img.freepik.com/psd-gratis/render-3d-personaje-avatar_23-2150611750.jpg?w=740&t=st=1722632367~exp=1722632967~hmac=348a4608bf0005c9ceecb59a81d0650d56221a63969a642143ad88b4da24c58f", img_alt: "Imagen de Perfil", name: "Martín", rate: 7, rol: "Alumno", com: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, itaque maxime? Amet ab aspernatur, a ducimus blanditiis ullam sit pariatur cumque laboriosam repellat fuga aperiam dolor laudantium, asperiores ipsa. Ipsum." }
    ]
  },
  {
    id: "rev02",
    revList: [
      { id: "rev0201", img_src: "https://img.freepik.com/psd-gratis/render-3d-personaje-avatar_23-2150611725.jpg?w=740&t=st=1722632418~exp=1722633018~hmac=6a568d4a53fd872534f9c2c0bdb6593f059c9fd96965a287b5e012f4491b0c05", img_alt: "Imagen de Perfil", name: "Javier", rate: 8, rol: "Padre", com: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo exercitationem quasi aperiam dolores, sed repellat odio harum corporis rerum eos voluptates dolore, perspiciatis eveniet eum reprehenderit nesciunt iusto dolorum. Quis?" },
      { id: "rev0202", img_src: "https://img.freepik.com/psd-gratis/representacion-3d-avatar_23-2150833536.jpg?w=740&t=st=1722632437~exp=1722633037~hmac=92d75b45dbdb675b5713da56fb6f5f01471d8bc270a48f17677f628635d77b4c", img_alt: "Imagen de Perfil", name: "María", rate: 10, rol: "Madre", com: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur harum dignissimos, a temporibus in odio ducimus repudiandae reiciendis amet, reprehenderit quaerat, deserunt veritatis esse? Odit quam maxime facere sint molestiae!" },
      { id: "rev0203", img_src: "https://img.freepik.com/psd-gratis/representacion-3d-avatar_23-2150833538.jpg?w=740&t=st=1722632467~exp=1722633067~hmac=cab5f86b7394be91a7127289e0bf00a2af2de744b5101856391381b66f7be069", img_alt: "Imagen de Perfil", name: "Laura", rate: 9, rol: "Madre", com: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, officia mollitia exercitationem dicta nihil explicabo dolore voluptas inventore debitis nisi tempore unde temporibus hic deleniti quaerat, harum laudantium recusandae deserunt." }
    ]
  },
  {
    id: "rev03",
    revList: [
      { id: "rev0301", img_src: "https://img.freepik.com/psd-gratis/ilustracion-3d-persona-camiseta-mangas_23-2149436202.jpg?t=st=1722632331~exp=1722632931~hmac=e6ddb6ce80bf860fd9e365166585456d080845b1716f6cd58e45d53ac8512a63", img_alt: "Imagen de Perfil", name: "Mariel", rate: 8, rol: "Madre", com: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla reiciendis neque quo rerum nesciunt quae tempore provident. Nobis, eveniet provident deleniti blanditiis esse incidunt veritatis eum officiis ab, aliquid qui?" },
      { id: "rev0302", img_src: "https://img.freepik.com/psd-premium/ilustracion-3d-nina-joven_665164-267.jpg", img_alt: "Imagen de Perfil", name: "Nolan", rate: 8, rol: "Alumno", com: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio expedita corporis nostrum esse dolores qui, maiores accusantium temporibus cum hic! Ipsa commodi, tenetur aliquam non natus exercitationem? Adipisci, eveniet architecto." },
      { id: "rev0303", img_src: "https://img.freepik.com/psd-gratis/3d-ilustracion-persona-gafas-sol_23-2149436188.jpg?t=st=1722632528~exp=1722633128~hmac=23f5b4ae22d1d082e976a1f7bf1382a261d6ea4b30b81bccf65393a30ae64bad", img_alt: "Imagen de Perfil", name: "Victor", rate: 10, rol: "Alumno", com: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam at possimus alias cum magnam? Repellat, nulla mollitia fuga corporis nostrum obcaecati unde, vel modi sapiente molestias error! Deleniti, rem ab." }
    ]
  },
];

const accesosLogin = [
  {
    id: "login01",
    text: "Acceso de Alumnos",
    path: "/login/alumno",
  },
  {
    id: "login02",
    text: "Acceso de Padres",
    path: "/login/padre",
  },
  {
    id: "login03",
    text: "Acceso de Docentes",
    path: "/login/docente",
  },
  {
    id: "login04",
    text: "Acceso de Administradores",
    path: "/login/admin",
  }
];

const users = [
  {
    tipo: "alumno",
    nombre: "Fernanda",
    apellido: "Ayala",
    id: "01",
    password: "0000",
    img_src: "https://img.freepik.com/psd-premium/ilustracion-3d-nina-joven_665164-267.jpg",
    img_alt: "Imagen de Perfil"
  },
  {
    tipo: "padre",
    nombre: "María",
    apellido: "de la Rosa",
    id: "02",
    password: "0000",
    img_src: "https://img.freepik.com/psd-gratis/representacion-3d-avatar_23-2150833538.jpg?w=740&t=st=1722632467~exp=1722633067~hmac=cab5f86b7394be91a7127289e0bf00a2af2de744b5101856391381b66f7be069",
    img_alt: "Imagen de Perfil"
  },
  {
    tipo: "docente",
    nombre: "Lucía",
    apellido: "Rada",
    id: "03",
    password: "0000",
    img_src: "https://img.freepik.com/psd-gratis/render-3d-personaje-avatar_23-2150611771.jpg?t=st=1722632331~exp=1722632931~hmac=36235fcf85df56c4599ef33f5df1c1d825cd9de620dc087c63d1358ae4442a9e",
    img_alt: "Imagen de Perfil"
  },
  {
    tipo: "admin",
    nombre: "Carlos",
    apellido: "Enríquez",
    id: "04",
    password: "0000",
    img_src: "https://img.freepik.com/psd-gratis/3d-ilustracion-persona-cabello-rosado_23-2149436186.jpg?t=st=1722632150~exp=1722632750~hmac=43b3509a8e9562d1d0ce13c00bb88de971b017b512924102f64f2123a099aa31",
    img_alt: "Imagen de Perfil"
  },
  null
];

const alumnoIndexSlider = [
  {
    materia: "Español",
    promedio: 96,
    totalExamenes: 5,
    totalTareas: 20,
    examenes: 3,
    tareas: 14,
  },
  {
    materia: "Matemáticas",
    promedio: 84,
    totalExamenes: 6,
    totalTareas: 15,
    examenes: 5,
    tareas: 14,
  },
  {
    materia: "Geografía",
    promedio: 90,
    totalExamenes: 10,
    totalTareas: 10,
    examenes: 7,
    tareas: 9,
  },
]

export {
  navigation, anuncios, reviews, accesosLogin, users, alumnoIndexSlider
}