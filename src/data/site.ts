export const site = {
  name: 'Chulin Zhao',
  tagline: 'Building trustworthy AI for medicine—through calibrated imaging, clinical text understanding, and rigorous evaluation.',
  affiliation:
    "Joint Bachelor's Program, Central South University & University of Dundee",
  degree: 'B.Eng. in Computer Science (English-taught)',
  applying: 'PhD applicant, Fall 2027',
  email: '2617944@dundee.ac.uk',
  emailAlt: 'zhaochulin1329@163.com',
  cv: 'cv.pdf',
  transcript: 'transcript.pdf',
  portrait: 'assets/portrait.jpg',
  majorGpa: '93.5',
  majorGpaLabel: 'Major coursework GPA',
  links: {
    scholar: '',
    github: 'https://github.com/chulinnnn',
    orcid: '',
  },
  interests: [
    'Trustworthy AI in Healthcare',
    'Uncertainty Quantification & Calibration',
    'Medical Image Reconstruction',
    'Clinical NLP & EHR Understanding',
    'LLM Agents for Clinical AI',
    'Evaluation of Generative AI',
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
