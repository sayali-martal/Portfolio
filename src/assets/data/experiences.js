const experiences = [
  {
    id: 1,
    company: 'Tata Consultancy Services',
    period: 'From 12/2017 – 03/2018, Kerala',
    designation: 'Trainee engineer',
    client: 'TCS',
    desc: [
      'Built MATLAB project to detect and print the handwritten text without using built-in functions in OpenCV. We had collected handwritten samples and separated lines, words, and letters from the scanned images to match patterns with training set alphabets to detect letters.',
    ],
  },
  {
    id: 2,
    company: 'Tata Consultancy Services',
    period: 'From 03/2018 – 02/2020, Bangalore',
    designation: 'Full stack developer',
    client: 'Altice, USA',
    desc: [
      'Worked alongside another developer to implement web tool used for analysis of STB failures and suggest repairs which reduced required manpower of company 50%.',
      'Designed websites using D3 JS, Angular JS for data visualizations and the information is extracted from python backend using rest APIs and SQL database.',
      'Designed rest API using web scraping and store it into PostgreSQL.',
      'Fixed bugs in the old code and added some additional functionalities to the existing code using Golang and SQL. Ran code as CRON on ubuntu machine.',
      'Developed a tool using python and Angular JS to examine the heath of testbeds used in Broadband testing and stored json data in MongoDB. Designed frontend to trigger tests and generated reports using flask framework.',
    ],
  },
  {
    id: 3,
    company: 'Leadge Business Services LTD',
    period: 'From 02/2020 – 08/2021, Thane',
    designation: 'Full stack developer',
    client: 'Dynalog | Seed, UAE | KGK, Hong Kong | Novita, India | Irtech',
    desc: [
      'Mentored a team of 2 junior developers.',
      'Worked closely with the finance team to build BI Assisted tool for giving companies insights using Angular JS.',
      'Utilized Flask Rest Framework to create APIs for the tool and later reduced the time taken to load the data by 80-90%.',
      'Developed PNL statement and ERP system web tool to process real time data and help clients get rid of excel sheets.',
      'Success of the tool led to Rs. 3,00,000 in incremental revenue monthly, with substantial increase in customer base of around 80-100% within a year.',
      'Designed and developed end to end app and acted as the point of contact for all critical errors.',
    ],
  },
  {
    id: 4,
    company: 'Fractal analytics',
    period: 'From 08/2021 – present, Mumbai',
    designation: 'Full stack developer',
    client: 'Fractal, India | Verizon, USA',
    desc: [
      'Developed new design and adding new features in a webtool using React JS, Express JS, Sequelize and PostgreSQL on data having more than 5 million rows.',
      'Designed and developed user authorization system with admin as well as user panel to grant and remove user access.',
      'Single handedly created analytics project to capture user behavior and tracking metrices.',
      'Performed indexing on tables to reduce the API response time and optimized the code to fetch the data without getting timeout error.',
      'Revamped data seeding process to take half hour, down from the 5 hours it took earlier.',
      'Worked on migrating UI of web application, AIDE from figma designs. Used react JS, CSS, flexbox, HTML for migration.',
      'Developed additional functionalities and tools into the react project. The webapp was made using react context and react component styles.',
    ],
  },
];
export default experiences;
