const subjects = ([
    {
        "code": "ACCT",
        "name": "Accounting"
    },
    {
        "code": "ACTL",
        "name": "Actuarial Studies"
    },
    {
        "code": "AERO",
        "name": "Aerospace Engineering"
    },
    {
        "code": "ANAT",
        "name": "Anatomy"
    },
    {
        "code": "ARCH",
        "name": "Architecture"
    },
    {
        "code": "ARTS",
        "name": "Arts"
    },
    {
        "code": "ASIA",
        "name": "Asian Studies"
    },
    {
        "code": "ATSI",
        "name": "Nura Gili (Indigenous Programs)"
    },
    {
        "code": "AUST",
        "name": "Australian Studies"
    },
    {
        "code": "AVEN",
        "name": "Aviation"
    },
    {
        "code": "AVIA",
        "name": "Aviation"
    },
    {
        "code": "AVIF",
        "name": "Aviation"
    },
    {
        "code": "AVIG",
        "name": "Aviation"
    },
    {
        "code": "BABS",
        "name": "Biotechnology & Biomolecular Sciences"
    },
    {
        "code": "BEES",
        "name": "Biological, Earth and Environmental Sciences"
    },
    {
        "code": "BEIL",
        "name": "BE Interdisciplinary Learning"
    },
    {
        "code": "BENV",
        "name": "Built Environment"
    },
    {
        "code": "BINF",
        "name": "Bioinformatics"
    },
    {
        "code": "BIOC",
        "name": "Biochemistry"
    },
    {
        "code": "BIOM",
        "name": "Biomedical Engineering"
    },
    {
        "code": "BIOS",
        "name": "Biological Science"
    },
    {
        "code": "BIOT",
        "name": "Biotechnology"
    },
    {
        "code": "BLDG",
        "name": "Building"
    },
    {
        "code": "CDEV",
        "name": "Career Development"
    },
    {
        "code": "CEIC",
        "name": "Chem Eng and Industrial Chemistry"
    },
    {
        "code": "CHEM",
        "name": "Chemistry"
    },
    {
        "code": "CHEN",
        "name": "Chemical Engineering"
    },
    {
        "code": "CLIM",
        "name": "Climate Science"
    },
    {
        "code": "CODE",
        "name": "Computational Design"
    },
    {
        "code": "COMD",
        "name": "Comparative Development"
    },
    {
        "code": "COMM",
        "name": "Commerce"
    },
    {
        "code": "COMP",
        "name": "Computer Science"
    },
    {
        "code": "CONS",
        "name": "Construction Management"
    },
    {
        "code": "CRIM",
        "name": "Criminology"
    },
    {
        "code": "CRTV",
        "name": "Creative Practice"
    },
    {
        "code": "CVEN",
        "name": "Civil and Environmental Engineering"
    },
    {
        "code": "DATA",
        "name": "Data Science"
    },
    {
        "code": "DESN",
        "name": "Design Next"
    },
    {
        "code": "DPBS",
        "name": "Global Diploma - Business"
    },
    {
        "code": "DPGE",
        "name": "Global Diploma General Education"
    },
    {
        "code": "DPST",
        "name": "Global Diploma - STEM"
    },
    {
        "code": "ECON",
        "name": "Economics"
    },
    {
        "code": "EDST",
        "name": "Education"
    },
    {
        "code": "ELEC",
        "name": "Electrical Engineering"
    },
    {
        "code": "ENGG",
        "name": "Engineering interdisciplinary"
    },
    {
        "code": "ENGL",
        "name": "English"
    },
    {
        "code": "ENVS",
        "name": "Environmental Studies"
    },
    {
        "code": "EXCH",
        "name": "Registrar's Division"
    },
    {
        "code": "FINS",
        "name": "Finance"
    },
    {
        "code": "FOOD",
        "name": "Food Technology"
    },
    {
        "code": "GENC",
        "name": "Business General Education"
    },
    {
        "code": "GENE",
        "name": "Engineering General Education"
    },
    {
        "code": "GENL",
        "name": "Law General Education"
    },
    {
        "code": "GENM",
        "name": "Medicine General Education"
    },
    {
        "code": "GENS",
        "name": "Science General Education"
    },
    {
        "code": "GENY",
        "name": "Student Academic and Career Success - GE"
    },
    {
        "code": "GEOL",
        "name": "Geology"
    },
    {
        "code": "GEOS",
        "name": "Geoscience"
    },
    {
        "code": "GMAT",
        "name": "Surveying and Spatial Information Systems"
    },
    {
        "code": "GSBE",
        "name": "Architecture"
    },
    {
        "code": "GSOE",
        "name": "Grad School of Engineering"
    },
    {
        "code": "HDAT",
        "name": "Health Data Science"
    },
    {
        "code": "HESC",
        "name": "Health and Exercise Science"
    },
    {
        "code": "HIST",
        "name": "History"
    },
    {
        "code": "HUML",
        "name": "Humanities and Languages"
    },
    {
        "code": "HUMS",
        "name": "Arts Administration"
    },
    {
        "code": "IDES",
        "name": "Industrial Design"
    },
    {
        "code": "IEST",
        "name": "Environmental Studies"
    },
    {
        "code": "INFS",
        "name": "Information Systems"
    },
    {
        "code": "INST",
        "name": "International Studies"
    },
    {
        "code": "INTA",
        "name": "Interior Architecture"
    },
    {
        "code": "INTD",
        "name": "Interdisciplinary Studies"
    },
    {
        "code": "JURD",
        "name": "Juris Doctor"
    },
    {
        "code": "LAND",
        "name": "Landscape Architecture"
    },
    {
        "code": "LAWS",
        "name": "Law"
    },
    {
        "code": "LING",
        "name": "Linguistics"
    },
    {
        "code": "MANF",
        "name": "Manufacturing Engineering"
    },
    {
        "code": "MARK",
        "name": "Marketing"
    },
    {
        "code": "MATH",
        "name": "Mathematics"
    },
    {
        "code": "MATS",
        "name": "Materials Science and Engineering"
    },
    {
        "code": "MBAX",
        "name": "Management"
    },
    {
        "code": "MDCN",
        "name": "Medicine"
    },
    {
        "code": "MDIA",
        "name": "Media"
    },
    {
        "code": "MECH",
        "name": "Mechanical Engineering"
    },
    {
        "code": "MFAC",
        "name": "Medicine"
    },
    {
        "code": "MFIN",
        "name": "Master of Finance Courses"
    },
    {
        "code": "MGMT",
        "name": "Organisation and Management - Commerce & Economics"
    },
    {
        "code": "MICR",
        "name": "Microbiology"
    },
    {
        "code": "MINE",
        "name": "Mining Engineering"
    },
    {
        "code": "MMAN",
        "name": "Mechanical & Manufacturing Engineering"
    },
    {
        "code": "MMGT",
        "name": "Management"
    },
    {
        "code": "MNGT",
        "name": "Management"
    },
    {
        "code": "MNNG",
        "name": "Mining Engineering"
    },
    {
        "code": "MODL",
        "name": "Modern Language Studies"
    },
    {
        "code": "MSCI",
        "name": "Marine Science"
    },
    {
        "code": "MTRN",
        "name": "Mechatronic Engineering"
    },
    {
        "code": "MUPS",
        "name": "Urban Policy and Strategy"
    },
    {
        "code": "MUSC",
        "name": "Music and Music Education"
    },
    {
        "code": "NANO",
        "name": "Nanotechnology"
    },
    {
        "code": "NCHR",
        "name": "HIV Social Research"
    },
    {
        "code": "NEUR",
        "name": "Neuroscience"
    },
    {
        "code": "OBST",
        "name": "Obstetrics and Gynaecology - RHW"
    },
    {
        "code": "OPTM",
        "name": "Optometry"
    },
    {
        "code": "PATH",
        "name": "Pathology"
    },
    {
        "code": "PHAR",
        "name": "Pharmacology"
    },
    {
        "code": "PHCM",
        "name": "Public Health and Community Medicine"
    },
    {
        "code": "PHIL",
        "name": "Philosophy"
    },
    {
        "code": "PHOP",
        "name": "Public Health Offshore Programs"
    },
    {
        "code": "PHSL",
        "name": "Physiology"
    },
    {
        "code": "PHTN",
        "name": "Photonics"
    },
    {
        "code": "PHYS",
        "name": "Physics"
    },
    {
        "code": "PLAN",
        "name": "Planning and Urban Development"
    },
    {
        "code": "PLTX",
        "name": "Practical Legal Training Program"
    },
    {
        "code": "POLS",
        "name": "Politics and International Relations"
    },
    {
        "code": "POLY",
        "name": "Polymer Science"
    },
    {
        "code": "PPEC",
        "name": "Philosophy, Politics and Economics"
    },
    {
        "code": "PSCY",
        "name": "Psychiatry - PH/POW"
    },
    {
        "code": "PSYC",
        "name": "Psychology"
    },
    {
        "code": "PTRL",
        "name": "Petroleum Engineering"
    },
    {
        "code": "REGZ",
        "name": "Registrar's Division"
    },
    {
        "code": "REST",
        "name": "Real Estate"
    },
    {
        "code": "RISK",
        "name": "Risk Management"
    },
    {
        "code": "SCIF",
        "name": "Faculty of Science"
    },
    {
        "code": "SENG",
        "name": "Software Engineering"
    },
    {
        "code": "SLSP",
        "name": "Social Science and Policy"
    },
    {
        "code": "SOCA",
        "name": "Sociology and Anthropology"
    },
    {
        "code": "SOCF",
        "name": "Social Work"
    },
    {
        "code": "SOCW",
        "name": "Social Work"
    },
    {
        "code": "SOLA",
        "name": "Photovoltaics and Solar Energy"
    },
    {
        "code": "SOMS",
        "name": "Medical Science"
    },
    {
        "code": "SOSS",
        "name": "Social Sciences"
    },
    {
        "code": "SPRC",
        "name": "Social Policy"
    },
    {
        "code": "SRAP",
        "name": "Social Research and Policy"
    },
    {
        "code": "STAM",
        "name": "Arts and Media"
    },
    {
        "code": "SURG",
        "name": "Surgery - PH/POW"
    },
    {
        "code": "SUSD",
        "name": "Sustainable Development"
    },
    {
        "code": "SWCH",
        "name": "Women & Children's Health"
    },
    {
        "code": "TABL",
        "name": "Taxation and Business Law"
    },
    {
        "code": "TELE",
        "name": "Telecommunications"
    },
    {
        "code": "UDES",
        "name": "Urban Development Studies"
    },
    {
        "code": "VISN",
        "name": "Vision Science"
    },
    {
        "code": "WOMS",
        "name": "Womens Studies"
    },
    {
        "code": "YENG",
        "name": "Arizona State University Engineering"
    },
    {
        "code": "YMED",
        "name": "Arizona State University Medicine"
    },
    {
        "code": "ZZBU",
        "name": "Business Accelerated"
    },
    {
        "code": "ZZEN",
        "name": "Engineering Accelerated"
    },
    {
        "code": "ZZSC",
        "name": "Science Accelerated"
    },
    {
        "code": "ADAD",
        "name": "Art and Design"
    },
    {
        "code": "DART",
        "name": "Domain Art"
    },
    {
        "code": "DDES",
        "name": "Domain Design"
    },
    {
        "code": "SAHT",
        "name": "Art History"
    },
    {
        "code": "SART",
        "name": "Art"
    },
    {
        "code": "SDES",
        "name": "Design Studies"
    },
    {
        "code": "SOMA",
        "name": "Media Arts"
    },
    {
        "code": "YCAN",
        "name": "ASU Canberra"
    },
    {
        "code": "ZBUS",
        "name": "Business"
    },
    {
        "code": "ZEIT",
        "name": "Engineering & Information Technology"
    },
    {
        "code": "ZGEN",
        "name": "University College General Education"
    },
    {
        "code": "ZHSS",
        "name": "Humanities & Social Sciences"
    },
    {
        "code": "ZINT",
        "name": "University College (Interdisciplinary)"
    },
    {
        "code": "ZPEM",
        "name": "Physical, Environmental & Mathematical Sciences"
    }
]);

export default subjects