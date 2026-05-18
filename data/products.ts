type Product = {
  id: number;
  name: string;
  price: string;
  location: string;
  image: string;
};



export const products = [
    {
        id: 1,
        name:"Heirloom tomato",
        price:"$5.99 / lb",
        location:"San Juan Capistrano, CA",
        image:"https://res.cloudinary.com/dkie0ztb7/image/upload/q_auto/f_auto/v1778915000/33_fz5zmr.jpg",
    },

    {
        id: 2,
        name: "Organic ginger",
        price:"$12.99 / lb",
        location:"Huntington Beach, CA",
        image:"https://res.cloudinary.com/dkie0ztb7/image/upload/q_auto/f_auto/v1778915009/44_gp6cba.jpg",
    },

    {
        id: 3,
        name:"Sweet onion",
        price:"$2.99 / lb",
        location:"Kettleman City, CA",
        image:"https://res.cloudinary.com/dkie0ztb7/image/upload/q_auto/f_auto/v1778915016/55_eadcsq.jpg",
    }
]