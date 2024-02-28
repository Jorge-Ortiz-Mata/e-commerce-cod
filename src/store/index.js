import { atom } from "jotai";;

export const productsAtom = atom([{ name: "Laptop", price: 4, image: "" }, { name: "TV", price: 10, image: "" }]);

export const productsCartAtom = atom([]);