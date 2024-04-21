export default {
  name: 'resume', // do not change
  pageTitle: 'Resume',
  icon: 'mdi-card-account-details',

  experience: {
    title: 'Experience',
    icon: 'mdi-tie',
    data: [
      {
        title: 'Information Technology Analyst',
        start: '01/2023',
        end: 'present',
        company: 'Kimley-Horn and Associates, Inc.',
        description: 'Windows System Administration, Network Administration, and Tier 2 Service Desk Support'
      },
      {
        title: 'Help Desk Analyst',
        start: '12/2022',
        end: '01/2023',
        company: 'University of Illinois',
        description: 'Help Desk Support for students, faculty, and staff'
      },
    ]
  },
  education: {
    title: 'Education',
    icon: 'mdi-school',
    data: [
      {
        major: 'Computer Information Sciences',
        start: '01/2019',
        end: '12/2023',
        institute: 'College',
        description: 'Hanging out with Ned and MJ, throwing house parties, city parties and all kind of parties.'
      },
    ]
  },
  certificatesAndAwards: {
    title: 'Certificates/Awards',
    icon: 'mdi-medal',
    data: [
      {
        title: 'Security+',
        date: '06/2023',
        issuedBy: 'CompTIA',
        description: 'Globally trusted, vendor-neutral certification that validates the baseline skills necessary to perform core security functions and pursue an IT security career'
      },
      {
        title: 'Solutions Architect - Associate',
        date: '05/2024',
        issuedBy: 'AWS',
        description: '(IN PROGRESS) Validate your technical skills and expertise with an industry-recognized credential and grow your career by earning AWS Certified Solutions Architect – Associate certification'
      },
    ]
  },
  academic: {
    title: 'Academic',
    icon: 'mdi-library-shelves',
    data: [
      {
        title: 'Research paper on criminals.',
        date: '10/07/2019',
        issuedBy: 'MIT',
        description: 'Published a research paper at MIT about criminal behaviours and predictions.'
      },
    ]
  },
  skills: [
    {
      title: 'Swinging',
      barType: 'line',
      icon: 'mdi-web',
      items: [
        {
          title: 'Horizontally',
          level: 80
        },
        {
          title: 'Vertically',
          level: 90
        },
      ]
    },
    {
      title: 'Design',
      barType: 'line',
      icon: 'mdi-brush-variant',
      items: [
        {
          title: 'Web Design',
          level: 85
        },
        {
          title: 'Photoshop',
          level: 90
        },
        {
          title: 'After Effects',
          level: 80
        },
      ]
    },
    {
      title: 'Languages',
      barType: 'dots',
      icon: 'mdi-earth',
      items: [
        {
          title: 'Albanian',
          level: 100
        },
        {
          title: 'English',
          level: 94
        },
      ]
    },
    {
      title: 'Knowledge',
      barType: 'dots',
      icon: 'mdi-book-open-page-variant',
      items: [
        {
          title: 'Web shoot',
          level: 94
        },
        {
          title: 'Taking pictures',
          level: 91
        },
      ]
    }
  ],
};
