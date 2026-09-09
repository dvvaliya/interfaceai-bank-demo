export type Member = {
  id: string;
  name: string;
  status: "Active" | "Restricted Review";
  joined: string;
  branch: string;
  phone: string;
  email: string;
  savingsAccount: string;
  savingsBalance: string;
  checkingAccount: string;
  checkingBalance: string;
};

export const members: Record<string, Member> = {
  "12345": {
    id: "12345",
    name: "Alex Morgan",
    status: "Active",
    joined: "03/14/2018",
    branch: "Riverside - 014",
    phone: "(***) ***-0194",
    email: "a***@example.test",
    savingsAccount: "SAV-****-4412",
    savingsBalance: "$2,450.75",
    checkingAccount: "CHK-****-8831",
    checkingBalance: "$1,204.18",
  },
  "24680": {
    id: "24680",
    name: "Jordan Lee",
    status: "Active",
    joined: "11/02/2021",
    branch: "Central - 002",
    phone: "(***) ***-6721",
    email: "j***@example.test",
    savingsAccount: "SAV-****-2250",
    savingsBalance: "$8,102.30",
    checkingAccount: "CHK-****-1945",
    checkingBalance: "$934.62",
  },
  "77777": {
    id: "77777",
    name: "Taylor Reed",
    status: "Active",
    joined: "06/23/2016",
    branch: "North County - 009",
    phone: "(***) ***-5018",
    email: "t***@example.test",
    savingsAccount: "SAV-****-7104",
    savingsBalance: "$312.06",
    checkingAccount: "CHK-****-3329",
    checkingBalance: "$2,015.44",
  },
  "33333": {
    id: "33333",
    name: "Casey Bennett",
    status: "Restricted Review",
    joined: "09/07/2019",
    branch: "East Market - 021",
    phone: "(***) ***-3087",
    email: "c***@example.test",
    savingsAccount: "SAV-****-6670",
    savingsBalance: "$5,727.91",
    checkingAccount: "CHK-****-1003",
    checkingBalance: "$640.10",
  },
};
