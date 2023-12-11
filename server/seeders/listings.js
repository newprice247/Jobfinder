const listings = [
    {
      title: "Full Stack Developer",
      category: "Technology",
      description:
        "Full Stack Developer needed for a full-time position. Must have at least 2 years of experience.",
      requirements:
        "Bachelor's degree in Computer Science and proficiency in JavaScript.",
      location: "Remote",
      benefits: "Health, Dental, Vision, 401k",
      salary: "$100,000 - $120,000 yearly",
      company: "ABC Company",
      contact: "",
      website: "https://github.com/newprice247/Jobfinder",
    },
    {
      title: "Construction Project Manager",
      category: "Construction",
      description:
        "Experienced Construction Project Manager needed for large-scale projects.",
      requirements:
        "Minimum 5 years of project management experience in the construction industry.",
      location: "Melbourne, FL",
      benefits: "Competitive salary and comprehensive benefits package.",
      salary: "$90,000 - $110,000 yearly",
      company: "XYZ Construction",
      contact: "",
      website: "https://github.com/newprice247/Jobfinder",
    },
    {
      title: "Retail Sales Associate",
      category: "Sales",
      description:
        "Join our dynamic retail team! Seeking motivated individuals with excellent customer service skills.",
      requirements: "Previous retail experience preferred but not required.",
      location: "Atlanta, GA",
      benefits: "Employee discounts and opportunities for career growth.",
      salary: "$30,000 - $40,000 yearly",
      company: "Retail Hub",
      contact: "",
      website: "https://github.com/newprice247/Jobfinder",
    },
    {
      title: "Data Scientist",
      category: "Technology",
      description:
        "Exciting opportunity for a Data Scientist to join our innovative team. Analyze large datasets and develop predictive models.",
      requirements:
        "Master's degree in Statistics, Computer Science, or related field. Proficiency in Python and experience with machine learning frameworks.",
      location: "Birmingham, AL",
      benefits:
        "Health insurance, stock options, and professional development opportunities.",
      salary: "$120,000 - $140,000 yearly",
      company: "DataTech Innovations",
      contact: "",
      website: "https://github.com/newprice247/Jobfinder",
    },
    {
      title: "Marketing Coordinator",
      category: "Marketing",
      description:
        "Join our marketing team and contribute to the success of our brand. Coordinate marketing campaigns, events, and social media efforts.",
      requirements:
        "Bachelor's degree in Marketing or related field. Strong communication and organizational skills.",
      location: "Chicago, IL",
      benefits:
        "Competitive salary, health benefits, and a creative work environment.",
      salary: "$50,000 - $60,000 yearly",
      company: "BrandBuilders Inc.",
      contact: "",
      website: "https://github.com/newprice247/Jobfinder",
    },
    {
      title: "Registered Nurse",
      category: "Healthcare",
      description:
        "We are hiring compassionate Registered Nurses to provide high-quality patient care. Multiple positions available in various specialties.",
      requirements:
        "Valid nursing license, BSN preferred. Minimum 2 years of clinical experience.",
      location: "Orlando, FL",
      benefits:
        "Medical, dental, and vision insurance, retirement plans, and continuing education opportunities.",
      salary: "$70,000 - $90,000 yearly",
      company: "City General Healthcare",
      contact: "",
      website: "https://github.com/newprice247/Jobfinder",
    },
    {
      title: "Graphic Designer",
      category: "Design",
      description:
        "Creative Graphic Designer wanted to join our design team. Develop visually appealing graphics for various projects.",
      requirements:
        "Bachelor's degree in Graphic Design or related field. Proficiency in Adobe Creative Suite.",
      location: "Kissimmee, FL",
      benefits:
        "Competitive salary, flexible work hours, and opportunities for professional growth.",
      salary: "$55,000 - $70,000 yearly",
      company: "DesignCraft Studios",
      contact: "",
      website: "https://github.com/newprice247/Jobfinder",
    },
    {
      title: "Customer Support Specialist",
      category: "Customer Service",
      description:
        "Join our customer support team to assist customers with inquiries, resolve issues, and provide exceptional service.",
      requirements:
        "Excellent communication skills and previous customer service experience. Ability to work in a fast-paced environment.",
      location: "Tampa, FL",
      benefits:
        "Health and wellness programs, competitive salary, and career advancement opportunities.",
      salary: "$40,000 - $50,000 yearly",
      company: "ServicePro Solutions",
      contact: "",
      website: "https://github.com/newprice247/Jobfinder",
    },
    {
      title: "Electrical Engineer",
      category: "Engineering",
      description:
        "Experienced Electrical Engineer needed to design and implement electrical systems. Work on cutting-edge projects in a dynamic environment.",
      requirements:
        "Bachelor's degree in Electrical Engineering and 3+ years of relevant experience. Proficiency in CAD software.",
      location: "Miami, FL",
      benefits:
        "Health insurance, retirement plans, and ongoing training programs.",
      salary: "$80,000 - $100,000 yearly",
      company: "Tech Innovations Inc.",
      contact: "",
      website: "https://github.com/newprice247/Jobfinder",
    },
    {
      title: "Teacher",
      category: "Education",
      description:
        "We are hiring teachers for the upcoming school year. Multiple positions available in various subjects.",
      requirements:
        "Bachelor's degree in Education and valid teaching license. Previous teaching experience preferred.",
      location: "Miami, FL",
      benefits:
        "Competitive salary, health insurance, and professional development opportunities.",
      salary: "$40,000 - $60,000 yearly",
      company: "City School District",
      contact: "",
      website: "https://github.com/newprice247/Jobfinder",
    },
    {
      title: "Human Resources Manager",
      category: "Human Resources",
      description:
        "Seeking a Human Resources Manager to oversee the HR department. Develop and implement HR strategies to support business objectives.",
      requirements:
        "Bachelor's degree in Human Resources or related field. Minimum 5 years of HR experience.",
      location: "Orlando, FL",
      benefits:
        "Health insurance, retirement plans, and opportunities for career growth.",
      salary: "$80,000 - $100,000 yearly",
      company: "ABC Company",
      contact: "",
      website: "https://github.com/newprice247/Jobfinder",
    },
    {
      title: "Attorney",
      category: "Legal",
      description:
        "We are hiring an attorney to join our legal team. Provide legal advice and represent clients in court.",
      requirements:
        "Juris Doctor degree and valid law license. Minimum 3 years of experience in a law firm.",
      location: "Melbourne, FL",
      benefits:
        "Competitive salary, health insurance, and opportunities for professional growth.",
      salary: "$100,000 - $120,000 yearly",
      company: "XYZ Law Firm",
      contact: "",
      website: "https://github.com/newprice247/Jobfinder",
    },
    {
      title: "Marketing Manager",
      category: "Marketing",
      description:
        "Seeking a Marketing Manager to lead our marketing team. Develop marketing strategies and oversee marketing campaigns.",
      requirements:
        "Bachelor's degree in Marketing or related field. Minimum 5 years of marketing experience.",
      location: "Tampa, FL",
      benefits:
        "Health insurance, retirement plans, and opportunities for career growth.",
      salary: "$80,000 - $100,000 yearly",
      company: "ABC Company",
      contact: "",
      website: "https://github.com/newprice247/Jobfinder",
    },
    {
      title: "Sales Representative",
      category: "Sales",
      description:
        "Join our sales team to promote our products and services. Develop and maintain relationships with clients.",
      requirements:
        "Bachelor's degree in Marketing or related field. Minimum 2 years of sales experience.",
      location: "Remote",
      benefits:
        "Competitive salary, health insurance, and opportunities for professional growth.",
      salary: "$60,000 - $80,000 yearly",
      company: "ABC Company",
      contact: "",
      website: "https://github.com/newprice247/Jobfinder",
    },
    {
      title: "Finance Manager",
      category: "Finance",
      description:
        "We are hiring a Finance Manager to oversee the finance department. Develop financial strategies and manage financial operations.",
      requirements:
        "Bachelor's degree in Finance or related field. Minimum 5 years of finance experience.",
      location: "Orlando, FL",
      benefits:
        "Health insurance, retirement plans, and opportunities for career growth.",
      salary: "$80,000 - $100,000 yearly",
      company: "ABC Company",
      contact: "",
      website: "https://github.com/newprice247/Jobfinder",
    },
    {
      title: "Software Engineer",
      category: "Technology",
      description:
        "We are hiring a Software Engineer to join our engineering team. Develop and implement software solutions.",
      requirements:
        "Bachelor's degree in Computer Science or related field. Minimum 2 years of software engineering experience.",
      location: "Kissimmee, FL",
      benefits:
        "Health insurance, retirement plans, and opportunities for career growth.",
      salary: "$80,000 - $100,000 yearly",
      company: "ABC Company",
      contact: "",
      website: "https://github.com/newprice247/Jobfinder",
    },
    {
      title: "Accountant",
      category: "Finance",
      description:
        "Seeking an Accountant to join our accounting team. Prepare financial documents and ensure compliance with regulations.",
      requirements:
        "Bachelor's degree in Accounting or related field. Minimum 2 years of accounting experience.",
      location: "Orlando, FL",
      benefits:
        "Health insurance, retirement plans, and opportunities for career growth.",
      salary: "$60,000 - $80,000 yearly",
      company: "ABC Company",
      contact: "",
      website: "https://github.com/newprice247/Jobfinder",
    },
    {
      title: "Administrative Assistant",
      category: "Human Resources",
      description:
        "Seeking an Administrative Assistant to join our team. Provide administrative support to the HR department.",
      requirements:
        "Bachelor's degree in Business Administration or related field. Minimum 2 years of administrative experience.",
      location: "Jacksonville, FL",
      benefits:
        "Health insurance, retirement plans, and opportunities for career growth.",
      salary: "$40,000 - $60,000 yearly",
      company: "ABC Company",
      contact: "",
      website: "https://github.com/newprice247/Jobfinder",
    },
    {
      title: "Web Developer",
      category: "Technology",
      description:
        "We are hiring a Web Developer to join our engineering team. Develop and maintain websites and web applications.",
      requirements:
        "Bachelor's degree in Computer Science or related field. Minimum 2 years of web development experience.",
      location: "Remote",
      benefits:
        "Health insurance, retirement plans, and opportunities for career growth.",
      salary: "$80,000 - $100,000 yearly",
      company: "ABC Company",
      contact: "",
      website: "https://github.com/newprice247/Jobfinder",
    }
  ];

  module.exports = listings;