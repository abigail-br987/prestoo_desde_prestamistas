
export const profiles = [
  {
    id: "1",
    name: "Luis Pérez",
    age: 32,
    status: "Ingeniero de Sistemas",
    interestRate: "5%",
    repaymentTime: "8 meses",
    requestedAmount: "S/2,000",
    loanReasonTags: ["Negocio", "Expansión"],
    loanExplanation: "Comprar una laptop para trabajo remoto",
    repaymentJustification: "Trabajo a tiempo parcial",
    score: 85,
    loanHistory: [
      "Préstamo 1: Pagado",
      "Préstamo 2: Pagado",
      "Préstamo 3: Pendiente"
    ],
    shortDescription: "Apasionado por la innovación y la tecnología.",
    profileImage: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    id: "2",
    name: "María López",
    age: 27,
    status: "Médica General",
    interestRate: "6%",
    repaymentTime: "12 meses",
    requestedAmount: "S/3,000",
    loanReasonTags: ["Educación", "Especialización"],
    loanExplanation: "Pagar un curso en línea de pediatría.",
    repaymentJustification: "Aumento de sueldo",
    score: 90,
    loanHistory: [
      "Préstamo 1: Pagado",
      "Préstamo 2: Pagado",
      "Préstamo 3: Pagado"
    ],
    shortDescription: "Dedicada a mejorar la salud de los niños.",
    profileImage: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    id: "3",
    name: "Carlos Ramírez",
    age: 30,
    status: "Maestro de Primaria",
    interestRate: "4.5%",
    repaymentTime: "12 meses",
    requestedAmount: "S/4,800",
    loanReasonTags: ["Hogar"],
    loanExplanation: "Pagar un semestre de la universidad.",
    repaymentJustification: "Trabajo a tiempo parcial",
    score: 80,
    loanHistory: [
      "Préstamo 1: Pagado",
      "Préstamo 2: Pendiente",
      "Préstamo 3: Pendiente"
    ],
    shortDescription: "Comprometido con la educación de los niños.",
    profileImage: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    id: "4",
    name: "Ana Torres",
    age: 35,
    status: "Arquitecta",
    interestRate: "5.2%",
    repaymentTime: "12 meses",
    requestedAmount: "S/4,500",
    loanReasonTags: ["Negocio", "Diseño"],
    loanExplanation: "Comprar una guitarra eléctrica para presentaciones.",
    repaymentJustification: "Tengo un emprendimiento",
    score: 88,
    loanHistory: ["Préstamo 1: Pagado"],
    shortDescription: "Apasionada por la creatividad y la arquitectura.",
    profileImage: "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    id: "5",
    name: "David Quispe",
    age: 29,
    status: "Chef",
    interestRate: "5.0%",
    repaymentTime: "10 meses",
    requestedAmount: "S/3,800",
    loanReasonTags: ["Gastronomía", "Equipo"],
    loanExplanation: "Comprar utensilios de cocina.",
    repaymentJustification: "Trabajo de mesero",
    score: 87,
    loanHistory: ["Préstamo 1: Pagado"],
    shortDescription: "Chef innovador con pasión por la cocina fusión.",
    profileImage: "https://randomuser.me/api/portraits/men/5.jpg"
  },
  {
    id: "6",
    name: "Laura Montes",
    age: 26,
    status: "Community Manager",
    interestRate: "5.5%",
    repaymentTime: "6 meses",
    requestedAmount: "S/2,500",
    loanReasonTags: ["Educación", "Capacitación"],
    loanExplanation: "Pagar un curso de marketing digital.",
    repaymentJustification: "Aumento de sueldo",
    score: 82,
    loanHistory: ["Préstamo 1: Pagado"],
    shortDescription: "Creativa y apasionada del marketing en redes sociales.",
    profileImage: "https://randomuser.me/api/portraits/women/6.jpg"
  },
  {
    id: "7",
    name: "Roberto Sánchez",
    age: 31,
    status: "Fotógrafo",
    interestRate: "5.0%",
    repaymentTime: "9 meses",
    requestedAmount: "S/4,000",
    loanReasonTags: ["Equipo", "Producción"],
    loanExplanation: "Comprar una cámara profesional.",
    repaymentJustification: "Mejora de la calidad del servicio.",
    score: 86,
    loanHistory: ["Préstamo 1: Pagado", "Préstamo 2: Pagado"],
    shortDescription: "Capturando momentos inolvidables.",
    profileImage: "https://randomuser.me/api/portraits/men/7.jpg"
  },
  {
    id: "8",
    name: "Verónica Paredes",
    age: 28,
    status: "Diseñadora de Modas",
    interestRate: "5.8%",
    repaymentTime: "11 meses",
    requestedAmount: "S/3,600",
    loanReasonTags: ["Negocio", "Producción"],
    loanExplanation: "Compra de tela para nueva colección.",
    repaymentJustification: "Incremento de ventas en temporada.",
    score: 83,
    loanHistory: ["Préstamo 1: Pagado"],
    shortDescription: "Diseños únicos con un toque moderno.",
    profileImage: "https://randomuser.me/api/portraits/women/8.jpg"
  },
  {
    id: "9",
    name: "Alonso García",
    age: 33,
    status: "Programador Freelance",
    interestRate: "4.9%",
    repaymentTime: "7 meses",
    requestedAmount: "S/2,200",
    loanReasonTags: ["Educación", "Tecnología"],
    loanExplanation: "Actualizar equipo de desarrollo.",
    repaymentJustification: "Mayor eficiencia en proyectos.",
    score: 89,
    loanHistory: ["Préstamo 1: Pagado"],
    shortDescription: "Apasionado por el desarrollo web y móvil.",
    profileImage: "https://randomuser.me/api/portraits/men/9.jpg"
  }
];


export const messages = [
{
  id: "m1",
  profileId: "1",
  messages: [
    { sender: "Luis Pérez", text: "Hola, ¿cómo estás?", timestamp: "10:00 AM" },
    { sender: "Tú", text: "¡Hola Luis! Todo bien, ¿y tú?", timestamp: "10:05 AM" },
  ],
},
{
  id: "m2",
  profileId: "2",
  messages: [
    { sender: "María López", text: "¿Me podrías dar más detalles?", timestamp: "11:00 AM" },
    { sender: "Tú", text: "Por supuesto, te explico...", timestamp: "11:10 AM" },
  ],
},
{
  id: "m3",
  profileId: "3",
  messages: [
    { sender: "Carlos Ramírez", text: "¿Cuándo puedo recibir una respuesta?", timestamp: "12:30 PM" },
    { sender: "Tú", text: "En breve te confirmo.", timestamp: "12:35 PM" },
  ],
},
{
  id: "m4",
  profileId: "4",
  messages: [
    { sender: "Ana Torres", text: "Estoy interesada en conocer más sobre las opciones de pago.", timestamp: "2:00 PM" },
    { sender: "Tú", text: "Claro, te comparto los detalles a continuación.", timestamp: "2:05 PM" },
  ],
},
{
  id: "m5",
  profileId: "5",
  messages: [
    { sender: "Pedro Castillo", text: "¿Hay algún requisito adicional?", timestamp: "3:45 PM" },
    { sender: "Tú", text: "Déjame verificarlo y te informo.", timestamp: "3:50 PM" },
  ],
},
{
  id: "m6",
  profileId: "6",
  messages: [
    { sender: "Sofía Mendoza", text: "Quisiera saber si es posible ajustar el monto del préstamo.", timestamp: "4:20 PM" },
    { sender: "Tú", text: "Podemos analizarlo y ver qué opciones hay.", timestamp: "4:25 PM" },
  ],
},
{
  id: "m7",
  profileId: "7",
  messages: [
    { sender: "Ricardo Gómez", text: "Necesito información sobre los plazos de pago.", timestamp: "5:10 PM" },
    { sender: "Tú", text: "Aquí tienes los detalles de los plazos.", timestamp: "5:15 PM" },
  ],
},
{
  id: "m8",
  profileId: "8",
  messages: [
    { sender: "Luis Pérez", text: "¿Cómo puedo iniciar el proceso de solicitud?", timestamp: "6:00 PM" },
    { sender: "Tú", text: "Te guiaré paso a paso.", timestamp: "6:05 PM" },
  ],
},
{
  id: "m9",
  profileId: "9",
  messages: [
    { sender: "María López", text: "¿Cuánto tiempo toma la aprobación?", timestamp: "7:30 PM" },
    { sender: "Tú", text: "Generalmente entre 24 y 48 horas.", timestamp: "7:35 PM" },
  ],
},
{
  id: "m10",
  profileId: "10",
  messages: [
    { sender: "Ana Torres", text: "Estoy lista para proceder con la solicitud.", timestamp: "8:00 PM" },
    { sender: "Tú", text: "¡Perfecto! Te enviaré los siguientes pasos.", timestamp: "8:05 PM" },
  ],
},
];