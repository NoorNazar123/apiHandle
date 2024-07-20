import express from "express";

const app = express();


app.get("/api/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "Apple",
      price: 1.2,
      img: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      name: "Banana",
      price: 0.5,
      img: "https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      name: "Cherry",
      price: 2.0,
      img: "https://images.pexels.com/photos/162689/cherry-pair-fruits-sweet-162689.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      name: "Date",
      price: 3.0,
      img: "https://images.pexels.com/photos/3993529/pexels-photo-3993529.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 5,
      name: "Elderberry",
      price: 1.8,
      img: "https://images.pexels.com/photos/4772954/pexels-photo-4772954.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 6,
      name: "Fig",
      price: 2.5,
      img: "https://images.pexels.com/photos/1674549/pexels-photo-1674549.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 7,
      name: "Grapes",
      price: 2.2,
      img: "https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 8,
      name: "Honeydew",
      price: 3.2,
      img: "https://images.pexels.com/photos/7273410/pexels-photo-7273410.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 9,
      name: "Kiwi",
      price: 1.0,
      img: "https://images.pexels.com/photos/867349/pexels-photo-867349.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 10,
      name: "Lemon",
      price: 0.7,
      img: "https://images.pexels.com/photos/129574/pexels-photo-129574.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 11,
      name: "Mango",
      price: 1.5,
      img: "https://images.pexels.com/photos/2294471/pexels-photo-2294471.jpeg?auto=compress&cs=tinysrgb&w=600",
     
    },
    {
      id: 13,
      name: "Orange",
      price: 1.0,
      img: "https://images.pexels.com/photos/327098/pexels-photo-327098.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 14,
      name: "Papaya",
      price: 1.8,
      img: "https://images.pexels.com/photos/5946066/pexels-photo-5946066.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 15,
      name: "Quince",
      price: 2.5,
      img: "https://images.pexels.com/photos/3698361/pexels-photo-3698361.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 16,
      name: "Raspberry",
      price: 3.0,
      img: "https://images.pexels.com/photos/59999/raspberries-fruits-fruit-berries-59999.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    { 
      id: 17,
      name: "Strawberry",
      price: 2.5,
      img: "https://images.pexels.com/photos/6534617/pexels-photo-6534617.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 18,
      name: "Tangerine",
      price: 1.2,
      img: "https://images.pexels.com/photos/2294477/pexels-photo-2294477.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 19,
      name: "Ugli fruit",
      price: 2.8,
      img: "https://images.pexels.com/photos/27025445/pexels-photo-27025445/free-photo-of-pears-lying-on-white-surface-next-to-bag.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 20,
      name: "Watermelon",
      price: 3.0,
      img: "https://images.pexels.com/photos/1337825/pexels-photo-1337825.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  if (req.query.search) {
    const productApi = products.filter((product) =>
      product.name.toLowerCase().includes(req.query.search.toLowerCase())
    );
    res.send(productApi);
    return;
  } 

  setTimeout(() => {
    res.send(products);
  }, 3000);
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
