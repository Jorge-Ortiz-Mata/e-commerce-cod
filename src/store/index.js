import { atom } from "jotai";;

export const productsAtom = atom([{ name: "Laptop", price: 10, image: "" }, { name: "TV", price: 5, image: "" }]);

export const productsCartAtom = atom([]);