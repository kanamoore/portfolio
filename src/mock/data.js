import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Kana',
  subtitle: "I'm a passionate Data Analyst based in Minneapolis, MN.",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Data Analyst with professional certification in Data Analytics and Visualization from the University of Minnesota and strong formal education in Economics. Skilled in Power BI, Tableau, SQL, Python (pandas, numpy, matplotlib), Microsoft Excel, VBA. ',
  paragraphTwo:
    'Recently completed a project for 3M to automate weekly reports using Power BI, SQL, VBA and Microsoft Excel Power Query, reducing work time by 8 + hours weekly. Passionate about using data to optimize work-flows and improve organization, always striving for continuous self-improvement.',
  paragraphThree: 'Loves cooking, traveling and running. Originally from Osaka, Japan.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'sql-hr.png',
    title: 'SQL Project - Employee Database Query',
    info:
      'I designed the tables to hold data in the CSVs, imported the CSVs into a SQL database, and answered questions about the HR data. After retriving the data, I imported the SQL database into Pandas and visualized data using Python.',
    info2:
      'Used Technologies: PostgreSQL, Python(pandas, matplotlib), SQL Alchemy, Jupyter Notebook, Git',
    url: 'https://github.com/kanamoore/sql-challenge',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'mission_to_mars.jpg',
    title: 'Web Scraping Project - Mission to Mars',
    info:
      'I built a web application that scrapes various websites for data related to the Mission to Mars and displays the information in a single HTML page.',
    info2:
      'Used Technologies: Python(pandas), BeautifulSoup, Requests/Splinter, Jupyter Notebook, Git',
    url: 'https://github.com/kanamoore/web-scraping-challenge',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'tableau-dashboard.PNG',
    title: 'Tableau NYC Citi Bike Dashboard',
    info: 'I created a Tableau dashboard to vizualize NYC Citi Bike riders data. ',
    info2: 'Used Technologies: Tableau',
    url: 'https://github.com/kanamoore/tableau-challenge',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'immigration.jpg',
    title: 'US Immigration Data Analysis (Team Project) ',
    info:
      'We analyzed immigration data to show changes in immigration trends based on nationality, port of entry, age, income, and immigration status (refugee or asylum seekers). ',
    info2: 'Used Technologies: Python(pandas, matplotlib, numpy), Jupyter Notebook',
    url: 'https://github.com/kanamoore/immigration_analysis_project',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'matplotlib_drugs.jpg',
    title: "Matplotlib Pymaceuticals' Drug Analysis",
    info:
      "I compared the performance of Pymaceuticals' drug of interest, Capomulin, versus the other treatment regimens and provide top-level summary of the study results.",
    info2: 'Used Technologies: Python(pandas, matplotlib, numpy, scipy), Jupyter Notebook',
    url: 'https://github.com/kanamoore/matplotlib-challenge',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'kanamoore7@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/kana-moore-52a1b2144/', // Put LinkedIn link here
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/kanamoore', // Github link here
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
