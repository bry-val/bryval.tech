export default {
  name: 'resume', // do not change
  pageTitle: 'Resume',
  icon: 'mdi-card-account-details',

  experience: {
    title: 'Experience',
    icon: 'mdi-briefcase',
    data: [
      {
        title: 'Information Technology Analyst',
        start: '01/2023',
        end: 'present',
        company: 'Kimley-Horn and Associates',
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
        major: 'Information Sciences',
        start: '01/2019',
        end: '12/2023',
        institute: 'University of Illinois at Urbana-Champaign',
        description: 'Hanging out with Ned and MJ, throwing house parties, city parties and all kind of parties.'
      },
    ]
  },
  certificatesAndAwards: {
    title: 'Certificates/Awards',
    icon: 'mdi-license',
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
        description: '(IN PROGRESS) This certification showcases knowledge and skills in AWS technology, across a wide range of AWS services. The focus of this certification is on the design of cost and performance optimized solutions, demonstrating a strong understanding of the AWS Well-Architected Framework'
      },
    ]
  },
  academic: {
    title: 'Self-Development',
    icon: 'mdi-brain',
    data: [
      {
        date: 'Self-Guided',
        title: 'Exercism',
        issuedBy: 'Open-Source',
        description: 'Open-source and free programming challenges to practice data structures and algorithms. Similar to Leetcode but more focused on learning. I aim to complete 1 challenge per day in either the C# or Golang tracks.'
      },
    ]
  },
  skills: [
    {
      title: 'Programming',
      barType: 'line',
      icon: 'mdi-web',
      items: [
        {
          title: 'Python',
          level: 90
        },
        {
          title: 'JavaScript',
          level: 45
        },
      ]
    },
    // {
    //   title: 'Design',
    //   barType: 'line',
    //   icon: 'mdi-brush-variant',
    //   items: [
    //     {
    //       title: 'Web Design',
    //       level: 85
    //     },
    //     {
    //       title: 'Photoshop',
    //       level: 90
    //     },
    //     {
    //       title: 'After Effects',
    //       level: 80
    //     },
    //   ]
    // },
    {
      title: 'Languages',
      barType: 'dots',
      icon: 'mdi-earth',
      items: [
        {
          title: 'English',
          level: 100
        },
        {
          title: 'Spanish',
          level: 100
        },
      ]
    },
    // {
    //   title: 'Knowledge',
    //   barType: 'dots',
    //   icon: 'mdi-book-open-page-variant',
    //   items: [
    //     {
    //       title: 'Web shoot',
    //       level: 94
    //     },
    //     {
    //       title: 'Taking pictures',
    //       level: 91
    //     },
    //   ]
    // }
  ],
};
