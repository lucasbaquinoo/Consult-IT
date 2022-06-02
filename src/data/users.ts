export type User = {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar_url: string;
  rate: number;
  bio: string;
  tags: string[];
  price: number;
  sessions: number;
  specializations: string[];
  schedule: string[];
};

export const users: User[] = [
  {
    id: 1,
    name: "John",
    role: "Desenvolvedor",
    company: "Google",
    avatar_url: "https://avatars.dicebear.com/api/human/john.svg",
    rate: 4.5,
    price: 100,
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    tags: ["frontend", "backend", "fullstack"],
    sessions: 2,
    specializations: ["frontend", "backend"],
    schedule: [
      "20 Jul 2022, 08h00",
      "21 Jul 2022, 08h00",
      "22 Jul 2022, 08h00",
      "23 Jul 2022, 08h00",
      "24 Jul 2022, 08h00",
      "25 Jul 2022, 08h00",
    ],
  },
  {
    id: 2,
    name: "Jane",
    role: "Designer",
    company: "Google",
    avatar_url: "https://avatars.dicebear.com/api/human/jane.svg",
    rate: 4.5,
    price: 100,
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    tags: ["frontend", "backend", "fullstack"],
    sessions: 2,
    specializations: ["frontend", "backend"],
    schedule: [
      "20 Jul 2022, 08h00",
      "21 Jul 2022, 08h00",
      "22 Jul 2022, 08h00",
      "23 Jul 2022, 08h00",
      "24 Jul 2022, 08h00",
      "25 Jul 2022, 08h00",
    ],
  },
  {
    id: 3,
    name: "Jack",
    role: "Designer",
    company: "Google",
    avatar_url: "https://avatars.dicebear.com/api/human/jack.svg",
    rate: 4.5,
    price: 100,
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    tags: ["frontend", "backend", "fullstack"],
    sessions: 2,
    specializations: ["frontend", "backend"],
    schedule: [
      "20 Jul 2022, 08h00",
      "21 Jul 2022, 08h00",
      "22 Jul 2022, 08h00",
      "23 Jul 2022, 08h00",
      "24 Jul 2022, 08h00",
      "25 Jul 2022, 08h00",
    ],
  },
];
