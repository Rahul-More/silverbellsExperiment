export interface NavTexts {
  home: string;
  about: string;
  academics: string;
  activities: string;
  admissions: string;
  careers: string;
  contact: string;
  events: string;
  facilities: string;
  gallery: string;
  news: string;
  login: string;
}

export interface HomeFeature { title: string; text: string; }
export interface HomeHighlights {
  admissionsBadge: string;
  admissionsTitle: string;
  admissionsText: string;
  admissionsCtaLabel: string;
  admissionsCtaHref: string;
  eventsBadge: string;
  eventsTitle: string;
  eventsText: string;
  eventsCtaLabel: string;
  eventsCtaHref: string;
}
export interface HomeTexts {
  sectionWhyTitle: string;
  sectionWhySubtitle: string;
  sectionWhyCtaLabel: string;
  sectionWhyCtaHref: string;
  features: HomeFeature[];
  highlightsSectionTitle: string;
  highlights: HomeHighlights;
  heroAdmissionsButton: string;
  heroLearnMoreButton: string;
}

export interface AboutLeadershipItem { heading: string; text: string; }
export interface AboutTexts {
  title: string;
  subtitle: string;
  lead: string;
  leadership: AboutLeadershipItem[];
}

export interface AcademicsStage { title: string; text: string; }
export interface AcademicsTexts {
  title: string;
  subtitle: string;
  stages: AcademicsStage[];
  coScholastic: { title: string; subtitle: string; };
}

export interface ActivitiesItem { title: string; text: string; }
export interface ActivitiesTexts {
  title: string;
  subtitle: string;
  items: ActivitiesItem[];
}

export interface AdmissionsTexts {
  title: string;
  subtitle: string;
  steps: string[];
  enquireEmailCtaLabel: string;
  enquireEmailHref: string;
  documentsRequiredTitle: string;
  documents: string[];
}

export interface CareerJob { role: string; type: string; location: string; }
export interface CareersTexts {
  title: string;
  subtitle: string;
  jobs: CareerJob[];
  applyCtaLabel: string;
  applyHref: string;
}

export interface ContactTexts {
  title: string;
  subtitle: string;
  reachUsHeading: string;
  officeHoursLabel: string;
  officeHoursValue: string;
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  submitButton: string;
  formNote: string;
}

export interface EventItem { title: string; date: string; desc: string; }
export interface EventsTexts { title: string; subtitle: string; items: EventItem[]; }

export interface FacilitiesTexts {
  title: string;
  subtitle: string;
  items: string[];
  itemDescription: string;
}

export interface GalleryTexts {
  title: string;
  subtitle: string;
  imageAlt: string;
}

export interface NewsItem { title: string; date: string; desc: string; }
export interface NewsTexts { title: string; subtitle: string; items: NewsItem[]; }

export interface NotFoundTexts {
  code: string;
  subtitle: string;
  homeLink: string;
}

export interface FooterTexts {
  copyright: string;
  privacy: string;
  terms: string;
}

export interface ErrorTexts {
  requiredField: string;
  invalidEmail: string;
}

export interface Texts {
  nav: NavTexts;
  home: HomeTexts;
  about: AboutTexts;
  academics: AcademicsTexts;
  activities: ActivitiesTexts;
  admissions: AdmissionsTexts;
  careers: CareersTexts;
  contact: ContactTexts;
  events: EventsTexts;
  facilities: FacilitiesTexts;
  gallery: GalleryTexts;
  news: NewsTexts;
  notFound: NotFoundTexts;
  footer: FooterTexts;
  errors: ErrorTexts;
}