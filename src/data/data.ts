import type { HeadPhoneType, ProductCardType } from "./types";

const headPhones: HeadPhoneType[] = [
  {
    name: "Наушники",
    data: [
      {
        id: 2342342,
        img: "/naushniki1.svg",
        title: "Apple BYZ S852I",
        price: 2927,
        rate: 4.7,
        oldPrice: 2100,
      },
      {
        id: 94760,
        img: "/naushniki2.svg",
        title: "Apple EarPods",
        price: 2327,
        rate: 4.5,
      },

      {
        id: 87134,
        img: "/naushniki3.svg",
        title: "Apple EarPods",
        price: 2327,
        rate: 4.5,
        oldPrice: 2100,
      },
      {
        id: 112340,
        img: "/naushniki1.svg",
        title: "Apple BYZ S852I",
        price: 2927,
        rate: 4.7,
      },
      {
        id: 98034,
        img: "/naushniki2.svg",
        title: "Apple EarPods",
        price: 2327,
        rate: 4.5,
        oldPrice: 2100,
      },

      {
        id: 2342,
        img: "/naushniki3.svg",
        title: "Apple EarPods",
        price: 2327,
        rate: 4.5,
      },
    ],
  },
  {
    name: "Беспроводные наушники",
    data: [
      {
        id: 23,
        img: "/naushniki4.svg",
        title: "Apple BYZ S852I",
        price: 2927,
        rate: 4.7,
      },
      {
        id: 9871234,
        img: "/naushniki5.svg",
        title: "Apple EarPods",
        price: 2327,
        rate: 4.5,
        oldPrice: 2100,
      },

      {
        id: 977987912,
        img: "/naushniki6.svg",
        title: "Apple EarPods",
        price: 2327,
        rate: 4.5,
      },
      {
        id: 77777777,
        img: "/naushniki4.svg",
        title: "Apple BYZ S852I",
        price: 2927,
        rate: 4.7,
      },
      {
        id: 2222222,
        img: "/naushniki5.svg",
        title: "Apple EarPods",
        price: 2327,
        rate: 4.5,
        oldPrice: 2100,
      },

      {
        id: 666666666,
        img: "/naushniki6.svg",
        title: "Apple EarPods",
        price: 2327,
        rate: 4.5,
      },
    ],
  },
];

export const getAllItems = (): ProductCardType[] =>
  headPhones.map(({ data }) => data).flat();

export const getSections = (): HeadPhoneType[] => headPhones.map((el) => el);

export const getItemById = (id: number): ProductCardType =>
  getAllItems().find((el) => el.id === id);
