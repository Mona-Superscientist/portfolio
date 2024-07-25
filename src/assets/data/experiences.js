import experienceLogos from'../images/experiences';

const experiences = [
    {
        company: 'Midaia GmbH',
        title: 'Senior Quality Engineer',
        duration: 'Feb 2023 - present',
        description: [
            'Responsible for app quality activities',
            'Creates backend automated tests using Javascript(postman) and Golang with Ginkgo and Gomega frameworks'
        ],
        logo: {src: experienceLogos.midaia, color: '#75c1aa'}
    },
    {
        company: 'Shahry',
        title: 'QC / QA Lead',
        duration: 'Oct 2021 – April 2023',
        description: [
            'Established and managed the quality engineering team.',
            'Defined and implemented QC processes and workflow to maintain quality standards.',
            'Documented and developed software engineering procedures and processes.',
            'Managed automation test frameworks and pipelines for backend and dashboards.',
            'Configured JIRA to integrate engineering process updates.'
        ],
        logo: { src: experienceLogos.shahry, color: '#02b693' }
    },
    {
        company: 'Fatura',
        title: 'Quality Engineering Consultant',
        duration: 'Nov 2020 – Oct 2021',
        description: [
            'Provided required training and guidance for quality team members.',
            'Hired more team members.',
            'Defined quality engineering processes and guidelines.',
            'Participated in enhancing engineering team processes.'
        ],
        logo: { src: experienceLogos.fatura, color: '#f8d027' }
    },
    {
        company: 'ExpandCart',
        title: 'Quality Engineering Manager',
        duration: 'Jan 2021 – Aug 2021',
        description: [
            'Established and led the quality engineering team.',
            'Defined and implemented QC processes and workflows to maintain quality standards.',
            'Documented and developed software engineering procedures and processes.',
            'Configured process automation rules on JIRA.',
            'Supported product management team to provide complete and clear requirements for new features and enhancements',
            'Supported in enhancing the backend interview process and evaluation.',
            'Developed a process to handle engineering technical debt.'
        ],
        logo: { src: experienceLogos.expandCart, color: '#20a7df' }
    },
    {
        company: 'CrowdAnalyzer',
        title: 'QC/ Test Automation Lead',
        duration: 'Jul 2019 - Dec 2020',
        description: [
            "Defined and develop QC team's processes and procedures.",
            'Guided and supported QC team members in their day-to-day tasks.',
            'Established and maintained backend test automation framework using node.js, supertest, mocha and chai.',
            'Established performance benchmarks, monitoring metrics to ensure optimal system functionality'
        ],
        logo:  { src: experienceLogos.crowdanalyzer, color: '#284e89'}
    },
    {
        company: 'Instabug',
        title: 'QC/ Test Automation Lead',
        duration: 'Mar 2017 - May 2019',
        description: [
            'Established and managed the quality engineering team.',
            'Defined and developed QC processes and workflows to ensure having defined quality standards.',
            "Participated in company processes' development that helped enhance the quality bar and ensure customer satisfaction.",
            'Established automation frameworks for mobile SDK using Espresso and XCUITest.',
            'Made recommendations regarding functional requirements or potential challenges to support product design reviews.'
        ],
        logo: {src: experienceLogos.instabug, color: '#011747'}
    },
    {
        company: 'Pharos Solutions',
        title: 'Freelance QC Engineer',
        duration: 'Dec 2016  - May 2017',
        description: [
            'Created regression test plan for the development team.',
            'Worked on Zenkit mobile app'
        ],
        logo: {src: experienceLogos.pharos, color: '#b73d3a'}
    },
    {
        company: 'Andalusia Group for Medical Services',
        title: 'Senior Software Quality Engineer',
        duration: 'Jun 2016  - Mar 2017',
        description: [
            'Started applying API testing concept using soapUI and postman.',
            'Created performance test plans and executed them using VSTS.',
            'Created GUI automation using selenium web driver and Microsoft coded UI.'
        ],
        logo: {src: experienceLogos.andalusia, color: '#aa8864'}
    },
    {
        company: 'uTest',
        title: 'Freelance Tester',
        duration: 'May 2016 - Mar 2017',
        description: [
            'Participated in multiple functional and localization test cycle',
            'Marked as Silver rated tester',
            'Marked as Favorite Tester in 3 different apps'
        ],
        logo: {src: experienceLogos.utest, color: '#04a7cc'}
    },
    {
        company: 'Squadio (formerly, Ibtikar Technologies)',
        title: 'QC Lead',
        duration: 'Jul 2014  - May 2016',
        description: [
            'Managed a team of 12 QC Engineers.',
            'Defined QC team processes and procedures.',
            'Acted as a scrum master.',
            'Worked on projects of different technologies (iOS, Android, Blackberry, .NET and PHP).'
        ],
        logo: {src: experienceLogos.squadio, color: '#fdc627'}
    },
    {
        company: 'Softxpert',
        title: 'QC Engineer',
        duration: 'Jul 2013  - Jul 2014',
        description: [
            'Participated in testing Docufy app (formerly, smart document scanner).',
            'Prepared initial automation framework for Android apps using Robotium framework.',
            'Created automated test scripts using Microsoft Coded UI.'
        ],
        logo: {src: experienceLogos.softxpert, color: '#ce252d'}
    }

];

export default experiences
