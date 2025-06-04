export type Guitar = {
      id: number;
      name: string;
      image: string;
      description: string;
      price: number;


}   

//Guitar herede a un nuevo type, llamado quiantity number
export type cartGuitar = Guitar & {
    quantity: number
};

export type GuitarProps = {
    guitar:Guitar, 
    addGuitar: (item:Guitar) => void
}

export type CartItem =Omit<Guitar, "description"> &{
    quantity: number 
}
// export type CartItemP =Pick<Guitar, "id""name","price","image"> &{
//     quantity: number 
// }

//El profe dice que asi esta bien, pero que mi tarea estaba medio bien medio mal pero que tambien funciona y vamos a usar esa 
// export interface CartItemI extends Guitar {
//     quantity: number
// }