// src/data/site.js – Données simplifiées pour ANESTH-ASSIST (Application Techniciens en Anesthésie et Réanimation)

export const SITE = {
  name:    'ANESTH-ASSIST',
  tagline: 'L’application dédiée aux Techniciens en Anesthésie et Réanimation.',
  subtitle:
    'Calculez facilement vos doses d’induction, vos dilutions et votre entretien. Entrez les données du patient, choisissez les drogues disponibles dans votre bloc, et obtenez vos doses simplifiées en seringues et ampoules.',
  phone:      'ANESTH-ASSIST',
  fax:        'Recommandations récentes',
  email:      'contact@anesth-assist.org',
  address:    'Bloc Opératoire · Anesthésie & Réanimation',
  addressLine1: 'Techniciens en Anesthésie et Réanimation',
  addressLine2: 'Aide au calcul des doses, dilutions et entretien',
  hours:      'Disponible à tout moment au bloc (même sans connexion)',
  hoursNote:  'Adapté à la chirurgie programmée et aux urgences',
  closed:     'Simple, rapide et clair à chaque étape',
  mapUrl:     'https://maps.google.com/maps?q=48.8566,2.3522&z=13&output=embed',
  googleMapsUrl: './dosebloc_v9.html',
  doseblocUrl: './dosebloc_v9.html',
  facebookUrl:   './dosebloc_v9.html',
  instagramUrl:  './dosebloc_v9.html',
  verse:     '« Une application simple et pratique pour accompagner le technicien en anesthésie de la fiche pré-AG jusqu’à l’entretien au bloc. »',
  verseRef:  'Sécurité · Précision · Simplicité',
  designer:  'ANESTH-ASSIST',
  designerUrl: './dosebloc_v9.html',
  copyright: '© 2026 ANESTH-ASSIST — Application pour Techniciens en Anesthésie et Réanimation.',
}

export const NAV_LINKS = [
  { label: 'Accueil',            href: '/'         },
  { label: 'Comment ça marche',  href: '/team'     },
  { label: 'Contact',            href: '/contact'  },
]

// ── Accueil – 4 étapes simples ────────────────────────────────────────────────
export const VALUES = [
  {
    icon:  'Heart',
    title: '1. Données du Patient',
    displayTitle: '1. Données Patient',
    desc:  'Entrez le sexe, l’âge, la taille, le poids, le groupage sanguin, le bilan biologique et la fiche pré-AG (Mallampati, NYHA, MET, ASA…).',
  },
  {
    icon:  'Stethoscope',
    title: '2. Choix des Drogues',
    displayTitle: '2. Choix des Drogues',
    desc:  'Sélectionnez dans une liste uniquement les drogues que vous avez réellement à disposition dans votre bloc.',
  },
  {
    icon:  'Activity',
    title: '3. Induction & Dilutions',
    displayTitle: '3. Doses & Seringues',
    desc:  'Calcul automatique des doses d’induction avec une simplification claire (ex : 200 mg Propofol = 1 seringue de 20 ml d’une ampoule de 200 mg/20 ml).',
  },
  {
    icon:  'ClipboardList',
    title: '4. Type d’Entretien',
    displayTitle: '4. Entretien',
    desc:  'Après l’induction, choisissez facilement le type d’entretien souhaité : gaz volatils, PSE (pousse-seringue électrique), etc.',
  },
]

// ── Accueil – À propos ────────────────────────────────────────────────────────
export const ABOUT_LEAD =
  'Tout est basé sur les informations que vous entrez dès la première interface, pour vous donner un calcul clair, rapide et adapté à ce que vous avez dans votre salle.'

export const ABOUT_PARAGRAPHS = [
  'Dans la première étape, le technicien entre simplement les données du patient : sexe, âge, taille, poids, groupage sanguin, les valeurs du bilan biologique ainsi que les évaluations présentes sur toutes les fiches pré-AG (Mallampati, NYHA, MET, ASA…).',
  'Ensuite, l’application affiche la liste des drogues : vous faites votre choix selon ce que vous avez dans le bloc. L’application calcule alors les doses pour l’induction selon les recommandations récentes et vous donne une simplification pratique en seringues et ampoules (par exemple : 200 mg de Propofol = une seringue de 20 ml d’une ampoule de 200 mg/20 ml).',
  'Enfin, juste après l’induction, l’application vous laisse choisir le type d’entretien (gaz volatils, PSE, réinjections…) et calcule automatiquement les réglages.',
]

export const APPROACH_ITEMS = [
  {
    title: 'Simplification en Seringues',
    sub:   'Ex. : 200 mg Propofol = 1 seringue de 20 ml (ampoule 200 mg/20 ml)',
  },
  {
    title: 'Entretien au Choix',
    sub:   'Gaz volatils ou PSE calculés directement après l’induction',
  },
]

// ── Accueil – Aperçu des étapes ───────────────────────────────────────────────
export const HOME_SERVICES = [
  {
    id:      'patient-evaluation',
    title:   '1. Fiche Patient & Pré-AG',
    summary: 'Renseignez le sexe, l’âge, la taille, le poids, le groupage sanguin, les valeurs du bilan biologique et l’évaluation pré-anesthésique (Mallampati, NYHA, MET, ASA).',
    href:    '/services#patient-evaluation',
  },
  {
    id:      'induction-dilution',
    title:   '2. Choix des Drogues & Induction',
    summary: 'Cochez les drogues disponibles dans votre bloc. L’application calcule la dose d’induction et la simplifie en seringues et ampoules prêtes à préparer.',
    href:    '/services#induction-dilution',
  },
  {
    id:      'entretien-surveillance',
    title:   '3. Choix du Type d’Entretien',
    summary: 'Après l’induction, choisissez votre entretien (gaz volatils, PSE…) et obtenez directement les vitesses et réglages adaptés au patient.',
    href:    '/services#entretien-surveillance',
  },
]

// ── Accueil – Chiffres clés simples ───────────────────────────────────────────
export const PREVENTATIVE_STATS = [
  {
    percent: 100,
    label:   'Basé sur les données de la fiche pré-AG du patient',
  },
  {
    percent: 100,
    label:   'Adapté aux drogues disponibles dans votre bloc',
  },
  {
    percent: 100,
    label:   'Simplification claire en seringues, ml et ampoules',
  },
  {
    percent: 100,
    label:   'Calcul complet de l’induction jusqu’à l’entretien',
  },
]

// ── Page Les Étapes (Workflow) ────────────────────────────────────────────────
export const SERVICES = [
  {
    id:       'patient-evaluation',
    title:    'Étape 1 — Entrer les Données du Patient et la Fiche Pré-AG',
    tags:     ['Sexe · Âge · Taille · Poids', 'Groupage & Bilan Bio', 'Mallampati · NYHA · MET'],
    body:     'Tout commence dans la première interface : vous entrez les informations du patient (sexe, âge, taille, poids, groupage sanguin), les valeurs du bilan biologique et les évaluations pré-anesthésiques présentes sur toutes les fiches pré-AG (Mallampati, NYHA, MET, ASA…). L’application utilise ces données pour adapter tous les calculs suivants.',
    learnMore: './dosebloc_v9.html',
  },
  {
    id:       'choix-drogues',
    title:    'Étape 2 — Choisir les Drogues Disponibles dans le Bloc',
    tags:     ['Liste de drogues', 'Selon votre stock au bloc', 'Choix rapide'],
    body:     'L’application vous présente une liste de drogues d’anesthésie. Vous cochez simplement celles que vous voulez utiliser selon ce que vous avez dans votre bloc opératoire.',
    learnMore: './dosebloc_v9.html',
  },
  {
    id:       'induction-dilution',
    title:    'Étape 3 — Calcul des Doses d’Induction & Simplification',
    tags:     ['Recommandations récentes', 'Dilution claire', 'En seringues et ampoules'],
    body:     'Une fois votre choix fait, l’application calcule les doses d’induction selon les recommandations récentes. Surtout, elle vous donne une simplification très pratique pour préparer vos seringues : par exemple, 200 mg de Propofol = une seringue de 20 ml d’une ampoule de 200 mg/20 ml.',
    learnMore: './dosebloc_v9.html',
  },
  {
    id:       'entretien-surveillance',
    title:    'Étape 4 — Choisir le Type d’Entretien Après l’Induction',
    tags:     ['Gaz volatils', 'PSE (Pousse-seringue)', 'Réinjections'],
    body:     'Après l’induction, l’application vous donne le choix du type d’entretien : gaz volatils, PSE (pousse-seringue électrique), ou bolus d’entretien. Elle affiche clairement les réglages et les débits en ml/h adaptés à votre patient.',
    learnMore: './dosebloc_v9.html',
  },
]

// ── Page Comment ça marche (Exemples simples) ─────────────────────────────────
export const TEAM = [
  {
    id:          'etape-patient',
    name:        '1. La Fiche Patient en Une Seule Vue',
    credentials: 'Sexe, Âge, Taille, Poids, Groupage Sanguin, Bilan Biologique & Fiche Pré-AG',
    badge:       'Première Interface',
    bio: `Vous retrouvez exactement les éléments présents sur votre fiche pré-anesthésique habituelle : sexe, âge, taille, poids et groupage sanguin.

Vous pouvez aussi entrer les valeurs du bilan biologique et les évaluations pré-AG comme le score de Mallampati, le stade NYHA, le MET ou le score ASA pour que le calcul prenne tout en compte simplement.`,
    website:    './dosebloc_v9.html',
  },
  {
    id:          'etape-induction',
    name:        '2. Choix des Drogues & Simplification des Seringues',
    credentials: 'Liste au choix selon votre bloc + conversion en seringues et ampoules',
    badge:       'Induction & Dilution',
    bio: `Plus besoin de chercher ou de calculer de tête : vous sélectionnez dans la liste les drogues présentes dans votre salle.

L’application calcule la dose d’induction selon les recommandations récentes et vous l’explique simplement avec le volume exact à préparer (exemple : 200 mg de Propofol = 1 seringue de 20 ml d’une ampoule de 200 mg/20 ml).`,
    website:    './dosebloc_v9.html',
  },
  {
    id:          'etape-entretien',
    name:        '3. Le Choix de l’Entretien Après l’Induction',
    credentials: 'Gaz volatils, PSE, dilutions d’entretien et vérification finale',
    badge:       'Entretien',
    bio: `Une fois l’induction calculée, vous choisissez comment assurer l’entretien de l’anesthésie : par gaz volatils ou par PSE (pousse-seringue électrique).

L’application vous indique les réglages, les dilutions d’entretien et les vitesses de seringue de façon claire et facile à lire.`,
    website:    './dosebloc_v9.html',
  },
]

// ── Accueil – Questions fréquentes (FAQ simples) ──────────────────────────────
export const FAQS = [
  {
    q: 'À qui s’adresse l’application ANESTH-ASSIST ?',
    a: 'Elle est conçue spécialement pour les techniciens en anesthésie et réanimation afin de faciliter le calcul des doses, la dilution des médicaments et les réglages de l’entretien au bloc opératoire.',
  },
  {
    q: 'Quelles données faut-il entrer au début ?',
    a: 'Dans la première interface, vous entrez les données du patient : sexe, âge, taille, poids, groupage sanguin, les valeurs du bilan biologique et les évaluations présentes sur la fiche pré-AG (Mallampati, NYHA, MET, ASA…).',
  },
  {
    q: 'Comment fonctionne le choix des drogues ?',
    a: 'L’application vous propose une liste de drogues. Vous cochez simplement celles que vous avez dans votre bloc, et le calcul se fait uniquement pour votre sélection.',
  },
  {
    q: 'Qu’est-ce que la simplification des doses ?',
    a: 'En plus de la dose en mg ou µg, l’application vous donne l’équivalent pratique pour préparer votre matériel : par exemple, « 200 mg de Propofol = une seringue de 20 ml d’une ampoule de 200 mg/20 ml ».',
  },
  {
    q: 'Peut-on choisir le type d’entretien après l’induction ?',
    a: 'Oui. Juste après l’étape d’induction, vous choisissez le type d’entretien souhaité (gaz volatils, PSE, etc.) et l’application calcule les doses et débits correspondants.',
  },
]

// ── Page Confidentialité ──────────────────────────────────────────────────────
export const PRIVACY_POLICY = {
  lastUpdated: '29/10/2026',
  sections: [
    {
      title: '1. Aucune donnée patient enregistrée en ligne',
      content: 'Toutes les informations que vous entrez (âge, poids, taille, groupage, bilan biologique, fiche pré-AG) restent uniquement sur votre appareil le temps du calcul.',
      items: [
        'Aucun nom ou dossier patient n’est envoyé sur Internet.',
        'Vous pouvez effacer et recommencer un nouveau calcul à tout moment en un clic.',
      ],
    },
    {
      title: '2. Outil d’aide au calcul au bloc',
      content: 'ANESTH-ASSIST est un outil pratique fait pour simplifier le calcul des doses, des dilutions et de l’entretien selon les recommandations récentes. Vérifiez toujours vos préparations selon le protocole de votre service.',
    },
  ],
}
