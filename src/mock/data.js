import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Kana Moore | Data Analyst', // e.g: 'Name | Developer'
  lang: 'en, jp, ch', // e.g: en, es, fr, jp
  description: 'An online showcase of my work', // e.g: Welcome to my website
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
      'I designed the SQL tables to hold data, imported the CSV files into a SQL database, and wrote SQL queries to answer HR questions. After the analysis, I used Python to vizualize data using queried data from a SQL database.',
    info2:
      'Technologies Used: PostgreSQL, Python(pandas, matplotlib), SQL Alchemy, Jupyter Notebook',
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
      'Technologies Used: Python(pandas), BeautifulSoup, Requests/Splinter, Jupyter Notebook, Git',
    url: 'https://github.com/kanamoore/web-scraping-challenge',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'london_bus.PNG',
    title: 'Tableau London Bus Perfomance Dashboard',
    info:
      'I used bus incidents data in London to create a interactive dashboard in Tableau. This dashboard will be able to answer questions such as "Which borough has the highest incidents?" and "Which season has the highest incidents?"',
    info2: 'Technologies Used: Tableau',
    url:
      'https://public.tableau.com/profile/kana.moore#!/vizhome/LondonBusSafetyPerformance_15959702391910/Dashboard1',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'amazon.PNG',
    title: 'Tableau Amazon Profit Dashboard',
    info:
      "As a part of a Makeover Monday project(2020 W25), I created a dashboard to show how Amazon's profit has changed. Just how huge are those profits? Find out using the dashboard! ",
    info2: 'Technologies Used: Tableau',
    url:
      'https://public.tableau.com/profile/kana.moore#!/vizhome/2020W25AmazonsTinyProfits_15967271322000/Dashboard1',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'tableau-dashboard.PNG',
    title: 'Tableau NYC Citi Bike Dashboard',
    info:
      'I created a Tableau dashboard to vizualize NYC Citi Bike rider data. This dashboard shows some important trends, such as popular ride times and demographics.',
    info2: 'Technologies Used: Tableau',
    url: 'https://github.com/kanamoore/tableau-challenge',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'immigration.jpg',
    title: 'US Immigration Data Analysis (Team Project) ',
    info:
      'We analyzed immigration data to show changes in immigration trends based on nationality, port of entry, age, income, and immigration status (refugee or asylum seekers). ',
    info2: 'Technologies Used: Python(pandas, matplotlib, numpy), Jupyter Notebook',
    url: 'https://github.com/kanamoore/immigration_analysis_project',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'matplotlib_drugs.jpg',
    title: "Matplotlib Pymaceuticals' Drug Analysis",
    info:
      "I compared the performance of Pymaceuticals' drug of interest, Capomulin, versus the other treatment regimens and provided top-level summary of the study results.",
    info2: 'Technologies Used: Python(pandas, matplotlib, numpy, scipy), Jupyter Notebook',
    url: 'https://github.com/kanamoore/matplotlib-challenge',
    repo: '', // if no repo, the button will not show up
  },
];

export const certificatesData = [
  {
    id: nanoid(),
    title: "Playing with other people's Pandas",
    description: 'Mine was not enough. Pandas, pandas, pandas!',
    source: 'Udemy',
    url: 'www.google.com',
    date: new Date(),
  },
  {
    id: nanoid(),
    title: 'Querying the Meaning of Life with SQL',
    description: "It's not what you think it is.",
    source: 'Coursera',
    url: 'www.google.com',
    date: new Date(),
  },
  {
    id: nanoid(),
    title: 'Doopee Dappa Doo',
    description: 'Kling khar ooglah makaboop, hooha hooha darpy darp.',
    source: 'Free Code Camp',
    url: 'www.google.com',
    date: new Date(),
  },
  {
    id: nanoid(),
    title: 'Build Websites with Real Pythons',
    description: 'Let the snake do the work.',
    source: "Your mom's house",
    url: 'www.google.com',
    date: new Date(),
  },
  {
    id: nanoid(),
    title: 'Hadoop for Beginners and Asian Ladies with Weird Toenails',
    description: 'They even make elephants uncomfortable.',
    source: 'Udacity',
    url: 'www.google.com',
    date: new Date(),
  },
  {
    id: nanoid(),
    title: 'Count to 100 Using NUMBERS',
    description: '1, 2, 3, 4, 5, 6, ...',
    source: 'Trumph University Data Bootcamp',
    url: 'www.google.com',
    date: new Date(),
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
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
