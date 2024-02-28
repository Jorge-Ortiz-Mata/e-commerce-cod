import { atom } from "jotai";;

export const productsAtom = atom([{ name: "Laptop", price: 10 }, { name: "TV", price: 5 }]);

export const productsCartAtom = atom([]);