import Link from "next/link";
import { type Lang, copy, L } from "@/lib/content";
import { PageHero, CTA } from "./pages";
export function About({ lang }: { lang: Lang }) {
  const c = copy[lang];
  return (
    <>
      <PageHero
        eyebrow={c.about}
        title={
          lang === "en"
            ? "A clearer starting point. A more confident journey."
            : "Un point de départ clair. Un parcours en confiance."
        }
        intro={
          lang === "en"
            ? "Driving opens possibilities. Finding the right education should feel straightforward."
            : "La conduite ouvre des possibilités. Trouver la bonne formation devrait être simple."
        }
      />
      <section className="section prose">
        <h2>
          {lang === "en"
            ? "Clarity before commitment."
            : "La clarté avant l’engagement."}
        </h2>
        <p>{c.disclosure}</p>
        <p>
          {lang === "en"
            ? "A Grafov Group website, DriverSchool.ca brings together educational guidance and a way to inquire about training in your area. We help you describe your needs, understand the questions to ask and explore your next step."
            : "Un site de Grafov Group, DriverSchool.ca rassemble des renseignements éducatifs et un moyen de demander une formation dans votre région. Nous vous aidons à préciser vos besoins, à préparer vos questions et à explorer la prochaine étape."}
        </p>
        <h2>
          {lang === "en"
            ? "What you can expect."
            : "Ce à quoi vous pouvez vous attendre."}
        </h2>
        <p>
          {lang === "en"
            ? "Clear distinctions between licensing guidance, training inquiries and actual provider arrangements. We do not sell licences, administer government tests or guarantee a pass. A listed training category does not guarantee a provider is available in every community."
            : "Une distinction claire entre les renseignements sur les permis, les demandes de formation et les ententes avec les prestataires. Nous ne vendons pas de permis, n’administrons pas d’examens gouvernementaux et ne garantissons pas la réussite. Une catégorie de formation ne garantit pas la présence d’un prestataire dans chaque communauté."}
        </p>
        <h2>
          {lang === "en"
            ? "Independent providers. Informed choices."
            : "Des prestataires indépendants. Des choix éclairés."}
        </h2>
        <p>
          {lang === "en"
            ? "Provider qualifications, course approvals, schedules and terms must be confirmed before you enrol. We do not publish invented reviews or imply endorsement by a licensing authority. Any paid referral arrangement will be disclosed before a referral is made."
            : "Les qualifications, la reconnaissance des cours, les horaires et les conditions doivent être confirmés avant l’inscription. Nous ne publions pas d’avis inventés et ne suggérons aucun appui d’une autorité. Toute entente de recommandation rémunérée sera divulguée avant la recommandation."}
        </p>
      </section>
      <CTA lang={lang} />
    </>
  );
}
const privacy = [
  [
    L("What we collect", "Renseignements recueillis"),
    L(
      "When you submit an inquiry, we collect your name, email, optional phone, location, training interests, licence stage, preferred timeframe, message and consent. Please do not include licence numbers, medical records or payment details.",
      "Lorsque vous envoyez une demande, nous recueillons votre nom, votre courriel, votre téléphone facultatif, votre région, la formation recherchée, l’étape du permis, la période souhaitée, votre message et votre consentement. N’incluez pas de numéro de permis, de dossier médical ni de données de paiement.",
    ),
  ],
  [
    L("Why we use it", "Utilisation"),
    L(
      "We use inquiry details to respond, assess training options and maintain a record of your request. Inquiry consent is not consent to marketing. We seek your agreement before sharing your inquiry with a specific independent training provider.",
      "Nous utilisons ces renseignements pour répondre, évaluer les options de formation et conserver une trace de votre demande. Ce consentement ne vise pas le marketing. Nous demandons votre accord avant de transmettre votre demande à un prestataire indépendant précis.",
    ),
  ],
  [
    L(
      "Storage and service providers",
      "Conservation et fournisseurs techniques",
    ),
    L(
      "Inquiries are stored in an access-controlled database. A configured notification service may process the inquiry to notify the team. Hosting and notification providers process information on our behalf; their location and arrangements must be assessed before enabling a service. We do not sell inquiry information.",
      "Les demandes sont conservées dans une base de données à accès restreint. Un service de notification configuré peut traiter la demande pour aviser l’équipe. Les fournisseurs d’hébergement et de notification traitent les données pour notre compte; leur lieu de traitement et leurs modalités doivent être évalués avant l’activation. Nous ne vendons pas les renseignements des demandes.",
    ),
  ],
  [
    L("Retention and your choices", "Conservation et vos choix"),
    L(
      "Our default retention period for inquiries is 90 days, unless an ongoing request or a legal requirement justifies longer retention. You may request access, correction, deletion or withdrawal of consent through the contact form, selecting any training category and stating “privacy request” in your message. Withdrawal may prevent further handling of your inquiry.",
      "La durée de conservation par défaut est de 90 jours, sauf si une demande en cours ou une obligation légale justifie une durée supérieure. Vous pouvez demander l’accès, la correction, la suppression ou le retrait du consentement au moyen du formulaire de contact. Choisissez une catégorie et indiquez « demande de confidentialité » dans le message. Le retrait peut empêcher le traitement ultérieur de votre demande.",
    ),
  ],
  [
    L("Cookies and technical data", "Témoins et données techniques"),
    L(
      "A preference cookie remembers your language for up to one year. No advertising or third-party analytics are enabled. Optional interaction signals are enabled only through privacy preferences; the current site keeps those signals within your browser. For abuse prevention, we keep a hashed client identifier and request counts for a short period. Hosting systems may also generate operational access logs.",
      "Un témoin mémorise votre langue pendant un an au maximum. Aucun outil publicitaire ni analytique tiers n’est activé. Les signaux d’interaction facultatifs sont activés uniquement dans les préférences de confidentialité; le site actuel les conserve dans votre navigateur. Pour prévenir les abus, nous conservons brièvement un identifiant client haché et le nombre de demandes. L’hébergement peut aussi produire des journaux techniques.",
    ),
  ],
  [
    L("Contact and updates", "Contact et mises à jour"),
    L(
      "This policy describes the current website workflow. For questions about information handling, contact DriverSchool.ca through the contact form. Material changes to how inquiries are used will be reflected here.",
      "Cette politique décrit le fonctionnement actuel du site. Pour toute question sur le traitement des renseignements, utilisez le formulaire de contact de DriverSchool.ca. Toute modification importante de l’utilisation des demandes sera indiquée ici.",
    ),
  ],
];
const terms = [
  [
    L("Purpose of the service", "Objet du service"),
    L(
      "DriverSchool.ca provides educational information and collects inquiries about driving training. It is not a driving school, government agency, licensing authority or test-booking service. Content is general guidance; official authorities determine current licensing requirements.",
      "DriverSchool.ca fournit des renseignements éducatifs et recueille des demandes de formation à la conduite. Ce n’est ni une école, ni un organisme gouvernemental, ni une autorité de délivrance des permis, ni un service de réservation d’examens. Le contenu est général; les autorités déterminent les exigences en vigueur.",
    ),
  ],
  [
    L(
      "Inquiries and provider arrangements",
      "Demandes et ententes avec les prestataires",
    ),
    L(
      "Submitting a form does not reserve a lesson or create an enrolment contract. Availability, instructor qualifications, course approval, fees, cancellation terms and insurance are confirmed directly with an independent provider before arrangements are made. No payment is collected on this website.",
      "L’envoi du formulaire ne réserve pas de cours et ne crée pas de contrat d’inscription. Les disponibilités, les qualifications, la reconnaissance du cours, les frais, les conditions d’annulation et l’assurance sont confirmés directement avec un prestataire indépendant avant toute entente. Aucun paiement n’est perçu sur ce site.",
    ),
  ],
  [
    L("No guaranteed outcomes", "Aucun résultat garanti"),
    L(
      "Training does not guarantee a licence, test result, job, insurance discount or reduction in driving risk. Provider-specific claims should be checked against current official requirements and written course terms.",
      "Une formation ne garantit ni permis, ni résultat à l’examen, ni emploi, ni rabais d’assurance, ni réduction du risque routier. Vérifiez les affirmations d’un prestataire au regard des exigences officielles et des conditions écrites du cours.",
    ),
  ],
  [
    L("Responsible use", "Utilisation responsable"),
    L(
      "Provide accurate contact information and use the service for genuine inquiries. Do not submit sensitive identification documents, unlawful material or automated spam. We may limit requests to protect the service.",
      "Fournissez des coordonnées exactes et utilisez le service pour des demandes réelles. Ne transmettez pas de pièces d’identité sensibles, de contenu illégal ni de pourriels automatisés. Nous pouvons limiter les demandes pour protéger le service.",
    ),
  ],
  [
    L(
      "External resources and your rights",
      "Ressources externes et vos droits",
    ),
    L(
      "Official source links are provided for convenience. Their content and services are controlled by their respective operators. Nothing here limits rights that cannot be waived under applicable consumer or privacy law. Contact us about errors or concerns.",
      "Les liens officiels sont fournis à titre pratique. Leur contenu et leurs services relèvent de leurs exploitants respectifs. Rien ici ne limite les droits auxquels il est impossible de renoncer en vertu des lois applicables. Communiquez avec nous pour signaler une erreur ou une préoccupation.",
    ),
  ],
];
export function Legal({
  lang,
  kind,
}: {
  lang: Lang;
  kind: "privacy" | "terms";
}) {
  return (
    <>
      <PageHero
        eyebrow="DRIVERSCHOOL.CA"
        title={copy[lang][kind]}
        intro={
          lang === "en"
            ? "Last updated October 18, 2026"
            : "Dernière mise à jour : 18 octobre 2026"
        }
      />
      <article className="section prose">
        {(kind === "privacy" ? privacy : terms).map(([title, body]) => (
          <section key={title.en}>
            <h2>{title[lang]}</h2>
            <p>{body[lang]}</p>
          </section>
        ))}
        <Link className="button" href={`/${lang}/contact`}>
          {copy[lang].contact.toUpperCase()} ↗
        </Link>
      </article>
    </>
  );
}
