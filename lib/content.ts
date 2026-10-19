export type Lang = "en" | "fr";
export type Localized = { en: string; fr: string };
export const L = (en: string, fr: string): Localized => ({ en, fr });
export const isLang = (v: string): v is Lang => v === "en" || v === "fr";
export const copy = {
  en: {
    skip: "Skip to content",
    nav: ["TRAINING", "LOCATIONS", "HOW IT WORKS"],
    find: "FIND DRIVING LESSONS",
    request: "REQUEST INFORMATION",
    eyebrow: "YOUR NEXT CHAPTER STARTS HERE",
    headline: "More confidence.\nMore open roads.",
    intro:
      "Your first lesson. Your next licence. A fresh start behind the wheel. Find your direction with driving education across Canada.",
    training: "A route for every driver.",
    trainingIntro:
      "Wherever you’re starting, take a step that feels right for you.",
    explore: "EXPLORE TRAINING",
    location: "Where will the road take you?",
    locationIntro:
      "Explore training by province or territory. Local options depend on provider availability and your training needs.",
    allLocations: "EXPLORE ALL LOCATIONS",
    how: "A clearer path to the driver’s seat.",
    steps: [
      [
        "Tell us your starting point",
        "Choose your training and share where you’d like to learn.",
      ],
      [
        "Explore the right direction",
        "Understand your licence pathway and what to ask a training provider.",
      ],
      [
        "Take your next step",
        "Send an inquiry. Local availability and provider qualifications are confirmed before any arrangements.",
      ],
    ],
    disclosure:
      "DriverSchool.ca is an independent training discovery and inquiry service. Lessons are delivered by independent, appropriately licensed providers where confirmed. We are not a driving school or a government agency.",
    tagline: "Find your direction.",
    footer: "Driving education. Across Canada.",
    services: "Training",
    locations: "Locations",
    about: "About us",
    contact: "Contact",
    privacy: "Privacy",
    terms: "Terms",
    home: "Home",
    learn: "What to focus on",
    questions: "Good questions. Clear answers.",
    consider: "Before you choose",
    ready: "Your next step starts with a conversation.",
    readyBody:
      "Tell us what you want to learn and where. We’ll use your inquiry to assess suitable local options.",
    category: "Training type",
    city: "City or postal code",
    choose: "Choose training",
    search: "EXPLORE OPTIONS",
    province: "Province or territory",
    any: "All provinces & territories",
    source: "Official licensing information",
    updated: "Source checked October 18, 2026",
    back: "ALL TRAINING",
    directory: "Find your kind of driving school.",
    directoryBody:
      "Start with your goals and location. Explore training pathways, then request information about suitable local options.",
    directoryNote:
      "School approval applies to a specific provider and program. Verify the provider’s current status with the licensing authority before enrolling.",
    results: "Explore these training pathways",
    empty:
      "No locations match your search. Try another city or choose a province.",
    searchCity: "Search a city or region",
    local: "Training near",
    availability:
      "Inquiries are welcome from this area. Training, pickup areas, language and scheduling depend on confirmation with a suitable local provider.",
    localQuestions: "Planning your local lessons",
    official:
      "Check the current rules with your provincial or territorial licensing authority.",
    notBooking: "An inquiry is not a booking. No payment is collected.",
    related: "Explore nearby areas",
    guide: "Your local starting point",
    phone: "CALL NOW",
  },
  fr: {
    skip: "Aller au contenu",
    nav: ["FORMATIONS", "RÉGIONS", "COMMENT ÇA MARCHE"],
    find: "TROUVER DES COURS",
    request: "DEMANDER DES RENSEIGNEMENTS",
    eyebrow: "VOTRE PROCHAINE ÉTAPE COMMENCE ICI",
    headline: "Plus de confiance.\nDe nouveaux horizons.",
    intro:
      "Un premier cours. Un nouveau permis. Un retour au volant. Trouvez votre voie parmi les formations à la conduite au Canada.",
    training: "À chaque conducteur, son parcours.",
    trainingIntro: "Peu importe votre point de départ, avancez à votre rythme.",
    explore: "EXPLORER LES FORMATIONS",
    location: "Où la route vous mènera-t-elle?",
    locationIntro:
      "Explorez les formations par province ou territoire. Les options locales dépendent des disponibilités et de vos besoins.",
    allLocations: "EXPLORER TOUTES LES RÉGIONS",
    how: "Un parcours plus clair vers le volant.",
    steps: [
      [
        "Précisez votre point de départ",
        "Choisissez votre formation et indiquez où vous souhaitez apprendre.",
      ],
      [
        "Trouvez la bonne direction",
        "Découvrez les étapes du permis et les questions à poser à une école de conduite.",
      ],
      [
        "Passez à la prochaine étape",
        "Envoyez une demande. Les disponibilités et les qualifications du prestataire sont confirmées avant toute entente.",
      ],
    ],
    disclosure:
      "DriverSchool.ca est un service indépendant de recherche de formations et de demandes de renseignements. Les cours sont offerts par des prestataires indépendants dûment autorisés, selon les disponibilités confirmées. Nous ne sommes ni une école de conduite ni un organisme gouvernemental.",
    tagline: "Trouvez votre voie.",
    footer: "La formation à la conduite. Partout au Canada.",
    services: "Formations",
    locations: "Régions",
    about: "À propos",
    contact: "Nous joindre",
    privacy: "Confidentialité",
    terms: "Conditions",
    home: "Accueil",
    learn: "Les points à travailler",
    questions: "Vos questions, nos réponses.",
    consider: "Avant de choisir",
    ready: "La prochaine étape commence par un échange.",
    readyBody:
      "Dites-nous ce que vous souhaitez apprendre et où. Votre demande nous aidera à évaluer les options locales adaptées.",
    category: "Type de formation",
    city: "Ville ou code postal",
    choose: "Choisir une formation",
    search: "EXPLORER LES OPTIONS",
    province: "Province ou territoire",
    any: "Toutes les provinces et tous les territoires",
    source: "Renseignements officiels sur les permis",
    updated: "Source consultée le 18 octobre 2026",
    back: "TOUTES LES FORMATIONS",
    directory: "Trouvez la formation qui vous convient.",
    directoryBody:
      "Commencez par vos objectifs et votre région. Explorez les parcours, puis demandez des renseignements sur les options locales adaptées.",
    directoryNote:
      "L’autorisation d’une école vise un prestataire et un programme précis. Vérifiez son statut auprès de l’autorité compétente avant de vous inscrire.",
    results: "Explorez ces parcours de formation",
    empty:
      "Aucune région ne correspond à votre recherche. Essayez une autre ville ou choisissez une province.",
    searchCity: "Rechercher une ville ou une région",
    local: "Formation à la conduite :",
    availability:
      "Nous acceptons les demandes de cette région. La formation, les lieux de prise en charge, la langue et les horaires doivent être confirmés auprès d’un prestataire local approprié.",
    localQuestions: "Planifier vos cours dans la région",
    official:
      "Vérifiez les règles en vigueur auprès de l’autorité responsable des permis de votre province ou territoire.",
    notBooking:
      "Une demande ne constitue pas une réservation. Aucun paiement n’est perçu.",
    related: "Explorer les régions voisines",
    guide: "Votre point de départ dans la région",
    phone: "APPELER",
  },
};
export type Service = {
  id: string;
  title: Localized;
  short: Localized;
  intro: Localized;
  topics: Localized[];
  note: Localized;
  faq: [Localized, Localized][];
  symbol: string;
};
export const services: Service[] = [
  {
    id: "driving-lessons",
    symbol: "01",
    title: L("Driving lessons", "Cours de conduite"),
    short: L(
      "Build the skills. Find your confidence.",
      "Développez vos habiletés. Prenez confiance.",
    ),
    intro: L(
      "From your first quiet street to a busy highway, build practical skills around your experience and comfort level. Private lessons and refresher sessions can focus on the situations you want to handle with more confidence.",
      "D’une rue tranquille à une autoroute achalandée, développez vos habiletés selon votre expérience et votre aisance. Les cours privés et de perfectionnement peuvent cibler les situations que vous souhaitez mieux maîtriser.",
    ),
    topics: [
      L(
        "Starting, stopping and observation",
        "Démarrage, freinage et observation",
      ),
      L(
        "Parking and low-speed manoeuvres",
        "Stationnement et manœuvres à basse vitesse",
      ),
      L(
        "Highway merging and lane changes",
        "Insertion sur l’autoroute et changements de voie",
      ),
      L(
        "Returning to driving after a break",
        "Retour au volant après une pause",
      ),
    ],
    note: L(
      "Your licence stage determines where and how you may practise. Discuss your goals, accessibility needs and instructor language before arranging lessons.",
      "Votre étape du permis détermine où et comment vous pouvez pratiquer. Précisez vos objectifs, vos besoins d’accessibilité et la langue souhaitée avant de convenir des cours.",
    ),
    faq: [
      [
        L(
          "Can I focus only on parking?",
          "Puis-je travailler uniquement le stationnement?",
        ),
        L(
          "Tell us which manoeuvres you want to practise. A provider can assess whether a focused lesson is suitable and available.",
          "Précisez les manœuvres à travailler. Le prestataire pourra évaluer si un cours ciblé convient à vos besoins et s’il est disponible.",
        ),
      ],
      [
        L("Are private lessons available?", "Offrez-vous des cours privés?"),
        L(
          "You can request individual instruction. Availability, lesson length and pickup arrangements must be confirmed with the provider.",
          "Vous pouvez demander un cours individuel. Les disponibilités, la durée et le lieu de prise en charge sont à confirmer auprès du prestataire.",
        ),
      ],
    ],
  },
  {
    id: "road-test-preparation",
    symbol: "02",
    title: L("Road test preparation", "Préparation à l’examen pratique"),
    short: L(
      "Turn practice into readiness.",
      "Transformez la pratique en préparation.",
    ),
    intro: L(
      "Prepare for the decisions, observations and manoeuvres assessed on a road test. A focused practice plan helps identify skills that need attention without promising a passing result.",
      "Préparez les décisions, les observations et les manœuvres évaluées à l’examen pratique. Un plan ciblé aide à repérer les habiletés à améliorer, sans garantir la réussite.",
    ),
    topics: [
      L(
        "Observation and hazard awareness",
        "Observation et détection des dangers",
      ),
      L(
        "Intersections, right of way and positioning",
        "Intersections, priorités et positionnement",
      ),
      L(
        "Parking and controlled manoeuvres",
        "Stationnement et manœuvres contrôlées",
      ),
      L("A practical readiness review", "Bilan de préparation"),
    ],
    note: L(
      "In Ontario, identify whether you hold a G1 or G2 and which test you are preparing for. In Quebec, passenger-car licensing uses Class 5. Rules and test eligibility vary by province.",
      "En Ontario, indiquez si vous détenez un G1 ou un G2 et quel examen vous préparez. Au Québec, le permis automobile est de classe 5. Les règles et l’admissibilité varient selon la province.",
    ),
    faq: [
      [
        L(
          "Can I use a vehicle on test day?",
          "Puis-je obtenir un véhicule pour l’examen?",
        ),
        L(
          "Request this specifically. Test-day vehicles, insurance and pickup are offered only when confirmed by a provider.",
          "Indiquez ce besoin dans votre demande. Le véhicule, l’assurance et la prise en charge ne sont offerts que sur confirmation du prestataire.",
        ),
      ],
      [
        L(
          "Is this an official test booking?",
          "Est-ce une réservation officielle d’examen?",
        ),
        L(
          "No. Book official tests through your licensing authority. Practice sessions and mock assessments are separate services.",
          "Non. Réservez l’examen officiel auprès de l’autorité compétente. Les séances de pratique et les simulations sont des services distincts.",
        ),
      ],
    ],
  },
  {
    id: "beginner-driver-education",
    symbol: "03",
    title: L("Beginner driver education", "Formation des nouveaux conducteurs"),
    short: L(
      "A strong foundation for the road ahead.",
      "Des bases solides pour la route.",
    ),
    intro: L(
      "Understand the road, develop safe habits and connect theory with supervised practice. When an approved beginner program is relevant to your licensing pathway, verify the specific school and course before enrolling.",
      "Comprenez la route, développez des habitudes sécuritaires et reliez la théorie à la pratique supervisée. Lorsqu’un programme reconnu s’applique à votre parcours, vérifiez l’école et le cours avant de vous inscrire.",
    ),
    topics: [
      L(
        "Road rules and responsible decisions",
        "Règles de circulation et décisions responsables",
      ),
      L(
        "Classroom or online theory options",
        "Options théoriques en classe ou en ligne",
      ),
      L("Supervised in-vehicle practice", "Pratique supervisée au volant"),
      L("Course completion documentation", "Documents de fin de formation"),
    ],
    note: L(
      "Government approval belongs to a specific provider and program, not DriverSchool.ca. Any licensing credit or insurance recognition must be verified with the authority or insurer.",
      "La reconnaissance gouvernementale vise un prestataire et un programme précis, et non DriverSchool.ca. Tout crédit lié au permis ou toute reconnaissance d’assurance doit être vérifié auprès de l’autorité ou de l’assureur.",
    ),
    faq: [
      [
        L(
          "Is every beginner course government approved?",
          "Tous les cours pour débutants sont-ils reconnus?",
        ),
        L(
          "No. Check the authority’s current list and the exact program. A general driving lesson is not necessarily part of an approved beginner course.",
          "Non. Consultez la liste à jour de l’autorité et vérifiez le programme précis. Un cours de conduite général ne fait pas nécessairement partie d’un programme reconnu.",
        ),
      ],
      [
        L(
          "Will a course reduce my insurance premium?",
          "Un cours réduira-t-il ma prime d’assurance?",
        ),
        L(
          "Only your insurer can confirm eligibility and any discount. Ask before enrolling; no savings are guaranteed.",
          "Seul votre assureur peut confirmer l’admissibilité et un rabais éventuel. Informez-vous avant l’inscription; aucune économie n’est garantie.",
        ),
      ],
    ],
  },
  {
    id: "defensive-driving",
    symbol: "04",
    title: L("Defensive & winter driving", "Conduite préventive et hivernale"),
    short: L(
      "Read the road. Stay a step ahead.",
      "Anticipez les situations sur la route.",
    ),
    intro: L(
      "Refine your ability to spot changing conditions, manage space and make calm decisions. Discuss winter, highway or refresher training based on the environments you encounter most often.",
      "Affinez votre capacité à reconnaître les changements, à garder vos distances et à prendre des décisions réfléchies. Discutez d’une formation hivernale, autoroutière ou de perfectionnement adaptée à vos trajets.",
    ),
    topics: [
      L(
        "Scanning and anticipating hazards",
        "Observation et anticipation des dangers",
      ),
      L(
        "Following distance and escape space",
        "Distance de suivi et marge de sécurité",
      ),
      L("Visibility, traction and weather", "Visibilité, adhérence et météo"),
      L("Fatigue and distraction awareness", "Fatigue et distraction"),
    ],
    note: L(
      "Winter exercises depend on safe weather, an appropriate venue and instructor assessment. No lesson can eliminate driving risk.",
      "Les exercices hivernaux dépendent d’une météo sécuritaire, d’un lieu approprié et de l’évaluation de l’instructeur. Aucun cours ne peut éliminer les risques de la conduite.",
    ),
    faq: [
      [
        L(
          "Does this remove demerit points?",
          "Cette formation retire-t-elle des points d’inaptitude?",
        ),
        L(
          "Do not assume a course carries a licensing credit. Confirm whether a specific approved program meets your authority’s requirements.",
          "Ne présumez pas qu’un cours donne droit à un crédit. Vérifiez si un programme précis répond aux exigences de votre autorité.",
        ),
      ],
      [
        L(
          "Can an experienced driver take a refresher?",
          "Un conducteur expérimenté peut-il suivre un cours?",
        ),
        L(
          "Yes, you can inquire about targeted practice for a new vehicle, unfamiliar roads or a return to driving.",
          "Oui, vous pouvez demander une pratique ciblée pour un nouveau véhicule, des routes peu familières ou un retour au volant.",
        ),
      ],
    ],
  },
  {
    id: "commercial-training",
    symbol: "05",
    title: L(
      "Truck & commercial training",
      "Formation camion et véhicules lourds",
    ),
    short: L(
      "A different class of opportunity.",
      "Une nouvelle catégorie de possibilités.",
    ),
    intro: L(
      "Explore training for commercial vehicles, buses and air-brake systems. Start with the vehicle you intend to operate, then confirm the licence class, medical requirements and approved training pathway in your province.",
      "Explorez les formations pour camions, autobus et systèmes de freinage pneumatique. Précisez le véhicule visé, puis confirmez la classe de permis, les exigences médicales et le parcours reconnu dans votre province.",
    ),
    topics: [
      L(
        "Vehicle inspection and safety systems",
        "Inspection et systèmes de sécurité",
      ),
      L(
        "Air brakes and endorsements",
        "Freins pneumatiques et mentions requises",
      ),
      L(
        "Truck and bus licence pathways",
        "Parcours de permis pour camion et autobus",
      ),
      L(
        "Load awareness and professional habits",
        "Conscience du chargement et habitudes professionnelles",
      ),
    ],
    note: L(
      "Licence classes differ: Ontario uses lettered commercial classes, while Quebec uses classes such as 1, 2 and 3. Training and entry requirements must be confirmed for the vehicle and province.",
      "Les classes diffèrent : l’Ontario utilise des lettres pour les permis commerciaux, tandis que le Québec utilise notamment les classes 1, 2 et 3. Confirmez les exigences selon le véhicule et la province.",
    ),
    faq: [
      [
        L("Is employment included?", "Un emploi est-il inclus?"),
        L(
          "No job placement or earnings are promised. Ask providers directly about course scope, equipment and any separately documented career support.",
          "Aucun placement ni revenu n’est promis. Vérifiez auprès du prestataire le contenu, l’équipement et tout soutien professionnel documenté.",
        ),
      ],
      [
        L(
          "Can I request air-brake training only?",
          "Puis-je demander une formation sur les freins pneumatiques seulement?",
        ),
        L(
          "Yes. Include your province, current licence and intended vehicle so the correct course requirements can be checked.",
          "Oui. Indiquez votre province, votre permis actuel et le véhicule visé pour permettre la vérification des exigences.",
        ),
      ],
    ],
  },
  {
    id: "motorcycle-training",
    symbol: "06",
    title: L("Motorcycle training", "Formation moto"),
    short: L(
      "Two wheels. A whole new perspective.",
      "Deux roues. De nouveaux horizons.",
    ),
    intro: L(
      "Build balance, control and road awareness through a motorcycle learning pathway suited to your experience. Ask about beginner courses, skills practice and returning-rider training.",
      "Développez votre équilibre, votre maîtrise et votre vigilance dans un parcours adapté à votre expérience. Informez-vous sur les cours pour débutants, la pratique technique et le retour à la moto.",
    ),
    topics: [
      L(
        "Low-speed balance and control",
        "Équilibre et maîtrise à basse vitesse",
      ),
      L(
        "Braking and cornering foundations",
        "Bases du freinage et des virages",
      ),
      L(
        "Protective equipment and fit",
        "Équipement de protection et ajustement",
      ),
      L(
        "Road awareness and visibility",
        "Vigilance et visibilité sur la route",
      ),
    ],
    note: L(
      "Confirm the correct motorcycle licence class, protective equipment, bike provision and seasonal conditions with your authority and provider.",
      "Confirmez la classe de permis moto, l’équipement de protection, la fourniture de la moto et les conditions saisonnières auprès de l’autorité et du prestataire.",
    ),
    faq: [
      [
        L("Do I need my own motorcycle?", "Dois-je posséder une moto?"),
        L(
          "Requirements vary by course. Ask whether a training motorcycle is supplied and what equipment you must bring.",
          "Les exigences varient selon le cours. Vérifiez si une moto est fournie et quel équipement vous devez apporter.",
        ),
      ],
      [
        L(
          "Are courses offered year-round?",
          "Les cours sont-ils offerts toute l’année?",
        ),
        L(
          "Outdoor training depends on local season, weather and provider schedules. Confirm dates before making arrangements.",
          "Les cours extérieurs dépendent de la saison, de la météo et des horaires locaux. Confirmez les dates avant de prendre des dispositions.",
        ),
      ],
    ],
  },
  {
    id: "fleet-training",
    symbol: "07",
    title: L(
      "Corporate & fleet training",
      "Formation en entreprise et pour parcs automobiles",
    ),
    short: L(
      "Safer habits, across your team.",
      "Des habitudes sécuritaires pour toute l’équipe.",
    ),
    intro: L(
      "Plan practical driver education around your team’s vehicles, routes and working conditions. Start with a discussion of fleet size, exposure and learning goals.",
      "Planifiez une formation pratique selon les véhicules, les trajets et les conditions de travail de votre équipe. Commencez par préciser la taille du parc, les risques et les objectifs.",
    ),
    topics: [
      L(
        "Driver assessments and coaching",
        "Évaluation et accompagnement des conducteurs",
      ),
      L(
        "Urban, highway and worksite exposure",
        "Trajets urbains, autoroutiers et sur chantier",
      ),
      L(
        "Backing and vehicle familiarization",
        "Marche arrière et familiarisation avec le véhicule",
      ),
      L(
        "Training records and follow-up goals",
        "Dossiers de formation et objectifs de suivi",
      ),
    ],
    note: L(
      "Training scope, reporting, workplace policies and vehicle insurance need agreement with the provider. This service does not replace an employer’s safety obligations.",
      "Le contenu, les rapports, les politiques du milieu de travail et l’assurance des véhicules doivent être convenus avec le prestataire. Cette formation ne remplace pas les obligations de sécurité de l’employeur.",
    ),
    faq: [
      [
        L(
          "Can training happen at our workplace?",
          "La formation peut-elle se tenir sur notre lieu de travail?",
        ),
        L(
          "Include your location, vehicle types and available facilities. On-site delivery depends on a provider’s assessment and availability.",
          "Indiquez le lieu, les types de véhicules et les installations. La formation sur place dépend de l’évaluation et des disponibilités du prestataire.",
        ),
      ],
      [
        L(
          "Can we train drivers in several provinces?",
          "Peut-on former des conducteurs dans plusieurs provinces?",
        ),
        L(
          "Describe each location separately. Qualifications and delivery arrangements must be checked in each jurisdiction.",
          "Précisez chaque lieu séparément. Les qualifications et les modalités doivent être vérifiées dans chaque province ou territoire.",
        ),
      ],
    ],
  },
];
export const staticPages = [
  "find-a-school",
  "locations",
  "about",
  "contact",
  "privacy",
  "terms",
];
export const pageTitles = (lang: Lang): Record<string, string> => ({
  "find-a-school": copy[lang].directory,
  locations: copy[lang].locations,
  about: copy[lang].about,
  contact: copy[lang].contact,
  privacy: copy[lang].privacy,
  terms: copy[lang].terms,
});
