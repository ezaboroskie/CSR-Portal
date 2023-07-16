const customerData = [
    {
      accountNumber: "2048822934",
      accountStatus: "active",
      firstName: "John",
      lastName: "Smith",
      email: "SmithJohn@fakeemail.com",
      phoneNumber: "555-282-2198",
      activeVehicles: [
        {
          activeMake: "Toyota",
          activeModel: "Camery",
          activeYear: "2012",
        },
      ],
      inactiveVehicles: [],
      notes: "This customer would like to renew their account on a different vehicle in approximately 3 months.",
    },
    {
      accountNumber: "4928361912",
      accountStatus: "active",
      firstName: "Jane",
      lastName: "Doe",
      email: "DoeJane@fakeemail.com",
      phoneNumber: "555-982-7364",
      activeVehicles: [
        {
          activeMake: "Honda",
          activeModel: "Accord",
          activeYear: "2015",
        },
      ],
      inactiveVehicles: [],
      notes: "This customer recently upgraded their vehicle.",
    },
    {
      accountNumber: "2938475612",
      accountStatus: "active",
      firstName: "Michael",
      lastName: "Johnson",
      email: "JohnsonMichael@fakeemail.com",
      phoneNumber: "555-764-9182",
      activeVehicles: [
        {
          activeMake: "Ford",
          activeModel: "Mustang",
          activeYear: "2010",
        },
      ],
      inactiveVehicles: [],
      notes: "This customer loves sports cars.",
    },
    {
      accountNumber: "3921874651",
      accountStatus: "active",
      firstName: "Emily",
      lastName: "Brown",
      email: "BrownEmily@fakeemail.com",
      phoneNumber: "555-291-8374",
      activeVehicles: [
        {
          activeMake: "Chevrolet",
          activeModel: "Camaro",
          activeYear: "2018",
        },
      ],
      inactiveVehicles: [],
      notes: "This customer is interested in electric vehicles.",
    },
    {
      accountNumber: "7382916451",
      accountStatus: "active",
      firstName: "William",
      lastName: "Johnson",
      email: "JohnsonWilliam@fakeemail.com",
      phoneNumber: "555-823-7592",
      activeVehicles: [
        {
          activeMake: "BMW",
          activeModel: "X5",
          activeYear: "2020",
        },
      ],
      inactiveVehicles: [],
      notes: "This customer prefers luxury SUVs.",
    },
    {
      accountNumber: "2846509183",
      accountStatus: "active",
      firstName: "Olivia",
      lastName: "Smith",
      email: "SmithOlivia@fakeemail.com",
      phoneNumber: "555-983-7265",
      activeVehicles: [
        {
          activeMake: "Toyota",
          activeModel: "Corolla",
          activeYear: "2017",
        },
      ],
      inactiveVehicles: [],
      notes: "This customer is a long-time Toyota owner.",
    },
    {
      accountNumber: "5940182736",
      accountStatus: "active",
      firstName: "James",
      lastName: "Wilson",
      email: "WilsonJames@fakeemail.com",
      phoneNumber: "555-192-8374",
      activeVehicles: [
        {
          activeMake: "Honda",
          activeModel: "Civic",
          activeYear: "2016",
        },
      ],
      inactiveVehicles: [],
      notes: "This customer prefers fuel-efficient vehicles.",
    },
    {
      accountNumber: "3948561297",
      accountStatus: "active",
      firstName: "Sophia",
      lastName: "Anderson",
      email: "AndersonSophia@fakeemail.com",
      phoneNumber: "555-918-3652",
      activeVehicles: [
        {
          activeMake: "Nissan",
          activeModel: "Sentra",
          activeYear: "2019",
        },
      ],
      inactiveVehicles: [],
      notes: "This customer is interested in car safety features.",
    },
    {
      accountNumber: "9584762103",
      accountStatus: "active",
      firstName: "Liam",
      lastName: "Davis",
      email: "DavisLiam@fakeemail.com",
      phoneNumber: "555-462-0918",
      activeVehicles: [
        {
          activeMake: "Chevrolet",
          activeModel: "Silverado",
          activeYear: "2017",
        },
        {
          activeMake: "Ford",
          activeModel: "Explorer",
          activeYear: "2015",
        },
      ],
      inactiveVehicles: [],
      notes: "",
    },
    {
      accountNumber: "4729165830",
      accountStatus: "active",
      firstName: "Ava",
      lastName: "Wilson",
      email: "WilsonAva@fakeemail.com",
      phoneNumber: "555-782-1936",
      activeVehicles: [
        {
          activeMake: "Toyota",
          activeModel: "RAV4",
          activeYear: "2021",
        },
      ],
      inactiveVehicles: [
        {
          inactiveMake: "Ford",
          inactiveModel: "Focus",
          inactiveYear: "2013",
        },
      ],
      notes: "This customer recently purchased a new SUV.",
    },
    {
      accountNumber: "2957384012",
      accountStatus: "active",
      firstName: "Mia",
      lastName: "Miller",
      email: "MillerMia@fakeemail.com",
      phoneNumber: "555-674-2981",
      activeVehicles: [
        {
          activeMake: "Honda",
          activeModel: "Pilot",
          activeYear: "2019",
        },
      ],
      inactiveVehicles: [],
      notes: "",
    },
    {
      accountNumber: "8946273102",
      accountStatus: "active",
      firstName: "Benjamin",
      lastName: "Taylor",
      email: "TaylorBenjamin@fakeemail.com",
      phoneNumber: "555-831-4976",
      activeVehicles: [
        {
          activeMake: "Ford",
          activeModel: "Escape",
          activeYear: "2016",
        },
      ],
      inactiveVehicles: [],
      notes: "This customer enjoys outdoor activities and needed an SUV.",
    },
    {
      accountNumber: "7293810465",
      accountStatus: "active",
      firstName: "Charlotte",
      lastName: "Clark",
      email: "ClarkCharlotte@fakeemail.com",
      phoneNumber: "555-219-3746",
      activeVehicles: [
        {
          activeMake: "Toyota",
          activeModel: "Highlander",
          activeYear: "2022",
        },
      ],
      inactiveVehicles: [],
      notes: "This customer recently purchased a new vehicle for long road trips.",
    },
    {
      accountNumber: "5678129304",
      accountStatus: "active",
      firstName: "Henry",
      lastName: "Harris",
      email: "HarrisHenry@fakeemail.com",
      phoneNumber: "555-194-6283",
      activeVehicles: [
        {
          activeMake: "Honda",
          activeModel: "CR-V",
          activeYear: "2018",
        },
      ],
      inactiveVehicles: [],
      notes: "",
    },
    {
      accountNumber: "3456781290",
      accountStatus: "active",
      firstName: "Ella",
      lastName: "Garcia",
      email: "GarciaElla@fakeemail.com",
      phoneNumber: "555-918-4736",
      activeVehicles: [
        {
          activeMake: "Ford",
          activeModel: "Fusion",
          activeYear: "2017",
        },
      ],
      inactiveVehicles: [],
      notes: "This customer is interested in hybrid vehicles.",
    },
    {
      accountNumber: "4827301945",
      accountStatus: "active",
      firstName: "Sebastian",
      lastName: "Walker",
      email: "WalkerSebastian@fakeemail.com",
      phoneNumber: "555-365-4928",
      activeVehicles: [
        {
          activeMake: "Chevrolet",
          activeModel: "Equinox",
          activeYear: "2019",
        },
      ],
      inactiveVehicles: [
        {
          inactiveMake: "Nissan",
          inactiveModel: "Rogue",
          inactiveYear: "2014",
        },
      ],
      notes: "",
    },
    {
      accountNumber: "1945827360",
      accountStatus: "active",
      firstName: "Scarlett",
      lastName: "Stewart",
      email: "StewartScarlett@fakeemail.com",
      phoneNumber: "555-928-3167",
      activeVehicles: [
        {
          activeMake: "Toyota",
          activeModel: "Sienna",
          activeYear: "2020",
        },
      ],
      inactiveVehicles: [],
      notes: "",
    },
    {
      accountNumber: "9182730456",
      accountStatus: "active",
      firstName: "Jack",
      lastName: "Martin",
      email: "MartinJack@fakeemail.com",
      phoneNumber: "555-749-2816",
      activeVehicles: [
        {
          activeMake: "Honda",
          activeModel: "Fit",
          activeYear: "2015",
        },
      ],
      inactiveVehicles: [],
      notes: "This customer prefers compact cars for city commuting.",
    },
    {
      accountNumber: "5938271640",
      accountStatus: "active",
      firstName: "Amelia",
      lastName: "King",
      email: "KingAmelia@fakeemail.com",
      phoneNumber: "555-216-9387",
      activeVehicles: [
        {
          activeMake: "Nissan",
          activeModel: "Maxima",
          activeYear: "2021",
        },
      ],
      inactiveVehicles: [
        {
          inactiveMake: "Ford",
          inactiveModel: "Taurus",
          inactiveYear: "2011",
        },
        {
          inactiveMake: "Toyota",
          inactiveModel: "Avalon",
          inactiveYear: "2012",
        },
      ],
      notes: "",
    },
    {
      accountNumber: "7326158490",
      accountStatus: "active",
      firstName: "Daniel",
      lastName: "Wright",
      email: "WrightDaniel@fakeemail.com",
      phoneNumber: "555-374-9182",
      activeVehicles: [
        {
          activeMake: "Ford",
          activeModel: "Mustang",
          activeYear: "2022",
        },
      ],
      inactiveVehicles: [],
      notes: "This customer is a car enthusiast and loves sports cars.",
    },
    {
        accountNumber: "9876543210",
        accountStatus: "inactive",
        firstName: "Sophie",
        lastName: "Turner",
        email: "TurnerSophie@fakeemail.com",
        phoneNumber: "555-123-4567",
        activeVehicles: [],
        inactiveVehicles: [
          {
            inactiveMake: "Volkswagen",
            inactiveModel: "Jetta",
            inactiveYear: "2014",
          },
        ],
        notes: "Inactive at request of customer.",
      },
      {
        accountNumber: "8765432109",
        accountStatus: "inactive",
        firstName: "Matthew",
        lastName: "Johnson",
        email: "JohnsonMatthew@fakeemail.com",
        phoneNumber: "555-987-6543",
        activeVehicles: [],
        inactiveVehicles: [
          {
            inactiveMake: "Honda",
            inactiveModel: "Civic",
            inactiveYear: "2009",
          },
        ],
        notes: "Inactive due to missed payments.",
      },
      {
        accountNumber: "7654321098",
        accountStatus: "inactive",
        firstName: "Emma",
        lastName: "Robinson",
        email: "RobinsonEmma@fakeemail.com",
        phoneNumber: "555-654-3210",
        activeVehicles: [],
        inactiveVehicles: [
          {
            inactiveMake: "Ford",
            inactiveModel: "Focus",
            inactiveYear: "2015",
          },
        ],
        notes: "Inactive at request of customer.",
      },
      {
        accountNumber: "6543210987",
        accountStatus: "inactive",
        firstName: "Daniel",
        lastName: "Clark",
        email: "ClarkDaniel@fakeemail.com",
        phoneNumber: "555-321-0987",
        activeVehicles: [],
        inactiveVehicles: [
          {
            inactiveMake: "Chevrolet",
            inactiveModel: "Malibu",
            inactiveYear: "2013",
          },
          {
            inactiveMake: "Toyota",
            inactiveModel: "Corolla",
            inactiveYear: "2012",
          },
        ],
        notes: "Inactive due to missed payments.",
      },
    ];
  
  export default customerData;
  