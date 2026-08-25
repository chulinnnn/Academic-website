export const site = {
  name: 'Chulin Zhao',
  tagline: 'Researching uncertainty, medical imaging, and AI-generated content quality.',
  affiliation:
    'Joint Bachelor\'s Program, Central South University & University of Dundee',
  degree: 'B.Eng. in Computer Science (English-taught)',
  applying: 'PhD applicant, Fall 2027',
  email: '2617944@dundee.ac.uk',
  emailAlt: 'zhaochulin1329@163.com',
  cv: '/cv.pdf',
  links: {
    scholar: '', // e.g. https://scholar.google.com/citations?user=XXXX
    github: 'https://github.com/chulinnnn',
    orcid: '',
  },
  interests: [
    '3D Gaussian Splatting',
    'Uncertainty Quantification',
    'Sparse-view CT',
    'Medical Imaging',
    'Text-to-Image Generation',
    'Perceptual Quality Assessment',
    'Clinical NLP',
  ],
  bio: [
    'I am a final-year undergraduate in the joint program between Central South University and the University of Dundee, applying for PhD programs starting Fall 2027.',
    'My research spans medical imaging and generative AI. I work on closed-form uncertainty for radiative Gaussian splatting in sparse-view CT, and on human perception of compositional defects in text-to-image models.',
    'I am interested in building methods that are not only accurate but also calibrated, interpretable, and trustworthy in real clinical and generative settings.',
  ],
  news: [
    {
      date: '2026-07',
      text: 'Preprint on closed-form uncertainty for radiative Gaussian splatting in sparse-view CT released on arXiv.',
    },
    {
      date: '2026',
      text: 'CO-AID dataset and paper accepted at IEEE MMSP; dataset publicly released on GitHub.',
    },
  ],
} as const;
