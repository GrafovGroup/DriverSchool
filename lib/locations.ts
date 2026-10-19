import { L, type Localized } from "./content.ts";
export type Province = {
  id: string;
  code: string;
  name: Localized;
  pathway: Localized;
  source: string;
  reviewed: boolean;
};
export const provinces: Province[] = [
  [
    "ontario",
    "ON",
    "Ontario",
    "Ontario",
    "G1 → G2 → G",
    "G1 → G2 → G",
    "https://www.ontario.ca/page/get-g-drivers-licence-new-drivers",
    true,
  ],
  [
    "quebec",
    "QC",
    "Quebec",
    "Québec",
    "Class 5: learner, probationary and full licence",
    "Classe 5 : apprenti, probatoire et régulier",
    "https://saaq.gouv.qc.ca/permis-conduire/obtenir-permis",
    true,
  ],
  [
    "british-columbia",
    "BC",
    "British Columbia",
    "Colombie-Britannique",
    "Learner (L), novice (N) and full-privilege licensing",
    "Permis d’apprenti (L), novice (N) et permis complet",
    "https://www.icbc.com/driver-licensing/new-drivers",
    true,
  ],
  [
    "alberta",
    "AB",
    "Alberta",
    "Alberta",
    "Class 7 learner and Class 5 pathways",
    "Parcours de classe 7 (apprenti) et de classe 5",
    "https://www.alberta.ca/get-drivers-licence-steps",
    true,
  ],
  [
    "manitoba",
    "MB",
    "Manitoba",
    "Manitoba",
    "Class 5 graduated driver licensing",
    "Permis progressif de classe 5",
    "https://apps.mpi.mb.ca/comms/drivershandbook/basic-class-5.html",
    true,
  ],
  [
    "saskatchewan",
    "SK",
    "Saskatchewan",
    "Saskatchewan",
    "Graduated driver licensing with SGI",
    "Permis progressif auprès de SGI",
    "https://sgi.sk.ca/handbook/-/knowledge_base/drivers/graduated-driver-licensing-program",
    true,
  ],
  [
    "nova-scotia",
    "NS",
    "Nova Scotia",
    "Nouvelle-Écosse",
    "",
    "",
    "https://novascotia.ca/",
    false,
  ],
  [
    "new-brunswick",
    "NB",
    "New Brunswick",
    "Nouveau-Brunswick",
    "",
    "",
    "https://www.gnb.ca/",
    false,
  ],
  [
    "newfoundland-and-labrador",
    "NL",
    "Newfoundland and Labrador",
    "Terre-Neuve-et-Labrador",
    "",
    "",
    "https://www.gov.nl.ca/",
    false,
  ],
  [
    "prince-edward-island",
    "PE",
    "Prince Edward Island",
    "Île-du-Prince-Édouard",
    "",
    "",
    "https://www.princeedwardisland.ca/",
    false,
  ],
  ["yukon", "YT", "Yukon", "Yukon", "", "", "https://yukon.ca/", false],
  [
    "northwest-territories",
    "NT",
    "Northwest Territories",
    "Territoires du Nord-Ouest",
    "",
    "",
    "https://www.gov.nt.ca/",
    false,
  ],
  [
    "nunavut",
    "NU",
    "Nunavut",
    "Nunavut",
    "",
    "",
    "https://www.gov.nu.ca/",
    false,
  ],
].map(([id, code, en, fr, pathEn, pathFr, source, reviewed]) => ({
  id: String(id),
  code: String(code),
  name: L(String(en), String(fr)),
  pathway: L(String(pathEn), String(pathFr)),
  source: String(source),
  reviewed: reviewed === true,
}));
export type City = {
  id: string;
  name: Localized;
  province: string;
  focus: Localized;
  reviewed: boolean;
};
const city = (
  id: string,
  en: string,
  fr: string,
  province: string,
  focus?: Localized,
): City => ({
  id,
  name: L(en, fr),
  province,
  focus:
    focus ||
    L(
      "Share your usual routes, preferred lesson language and pickup area so local training needs can be assessed.",
      "Précisez vos trajets habituels, la langue souhaitée et le lieu de prise en charge pour permettre l’évaluation de vos besoins.",
    ),
  reviewed: !!focus,
});
export const cities: City[] = [
  city(
    "toronto",
    "Toronto",
    "Toronto",
    "ontario",
    L(
      "For city driving, ask to work on sharing the road with streetcars, cyclists and pedestrians. Describe whether your routine is downtown, suburban or includes highway travel.",
      "Pour la conduite urbaine, demandez à travailler le partage de la route avec les tramways, les cyclistes et les piétons. Précisez si vos trajets sont au centre-ville, en banlieue ou sur l’autoroute.",
    ),
  ),
  ...[
    "Mississauga",
    "Brampton",
    "Vaughan",
    "Markham",
    "Richmond Hill",
    "Oakville",
    "Burlington",
    "Ajax",
    "Pickering",
    "Newmarket",
  ].map((n) => city(n.toLowerCase().replaceAll(" ", "-"), n, n, "ontario")),
  city(
    "ottawa",
    "Ottawa",
    "Ottawa",
    "ontario",
    L(
      "If your routine crosses into Gatineau, state which province issued your licence. Request instruction in your preferred language and discuss winter visibility and urban lane choices.",
      "Si vos trajets vous mènent à Gatineau, indiquez la province qui a délivré votre permis. Précisez la langue souhaitée et discutez de la visibilité hivernale et du choix des voies en ville.",
    ),
  ),
  ...["Hamilton", "Kitchener-Waterloo", "London", "Niagara"].map((n) =>
    city(n.toLowerCase(), n, n, "ontario"),
  ),
  city(
    "vancouver",
    "Vancouver / Metro Vancouver",
    "Vancouver et sa région",
    "british-columbia",
    L(
      "Describe which municipalities you travel between. Discuss bridge approaches, busy cycling corridors and visibility in rain as possible lesson goals, subject to your licence restrictions.",
      "Précisez les municipalités entre lesquelles vous circulez. Les approches des ponts, les axes cyclables achalandés et la visibilité sous la pluie peuvent être des objectifs, selon les restrictions de votre permis.",
    ),
  ),
  city("victoria", "Victoria", "Victoria", "british-columbia"),
  city(
    "calgary",
    "Calgary",
    "Calgary",
    "alberta",
    L(
      "Tell the provider whether you want practice in residential areas, on major urban roads or on highway approaches. Include your current Class 7 or Class 5 stage and comfort with winter conditions.",
      "Précisez si vous souhaitez pratiquer dans les quartiers résidentiels, sur les grandes artères ou aux accès autoroutiers. Indiquez votre étape de classe 7 ou 5 et votre aisance en conditions hivernales.",
    ),
  ),
  city("edmonton", "Edmonton", "Edmonton", "alberta"),
  city("winnipeg", "Winnipeg", "Winnipeg", "manitoba"),
  city(
    "montreal",
    "Montréal / Greater Montréal",
    "Montréal et sa région",
    "quebec",
    L(
      "Specify your borough or whether you are on the North or South Shore. Discuss dense intersections, shared streets and the language of instruction when planning a Class 5 course.",
      "Précisez votre arrondissement ou votre secteur sur la Rive-Nord ou la Rive-Sud. Discutez des intersections achalandées, du partage de la chaussée et de la langue d’enseignement pour votre parcours de classe 5.",
    ),
  ),
  city(
    "quebec-city",
    "Québec City",
    "Québec",
    "quebec",
    L(
      "Describe whether your usual trips involve central neighbourhoods or surrounding areas. Ask about hill starts, winter preparation and how practical lessons fit your Class 5 course progression.",
      "Indiquez si vos trajets se concentrent dans les quartiers centraux ou les environs. Informez-vous sur les départs en pente, la préparation hivernale et l’intégration des cours pratiques au parcours de classe 5.",
    ),
  ),
  city("halifax", "Halifax", "Halifax", "nova-scotia"),
  city("saskatoon", "Saskatoon", "Saskatoon", "saskatchewan"),
  city("regina", "Regina", "Regina", "saskatchewan"),
  city(
    "st-johns",
    "St. John’s",
    "Saint-Jean de Terre-Neuve",
    "newfoundland-and-labrador",
  ),
  city(
    "charlottetown",
    "Charlottetown",
    "Charlottetown",
    "prince-edward-island",
  ),
  city("fredericton", "Fredericton", "Fredericton", "new-brunswick"),
  city("moncton", "Moncton", "Moncton", "new-brunswick"),
  city("whitehorse", "Whitehorse", "Whitehorse", "yukon"),
  city("yellowknife", "Yellowknife", "Yellowknife", "northwest-territories"),
  city("iqaluit", "Iqaluit", "Iqaluit", "nunavut"),
];
export function isIndexableLocation(id: string) {
  const p = provinces.find((p) => p.id === id);
  if (p) return p.reviewed;
  const c = cities.find((c) => c.id === id);
  return (
    !!c?.reviewed && !!provinces.find((p) => p.id === c.province)?.reviewed
  );
}
