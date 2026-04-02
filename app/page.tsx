
  "use client";

import { useState } from "react";

const products = [
  {
    name: "Custom Birthday Cake",
    price: "RM89+",
    desc: "Fully custom design 🎉",
    img: "/cakes/IMG_3603.jpeg",
  },
  {
    name: "Korean Minimal Cake",
    price: "RM79+",
    desc: "Aesthetic & trending ✨",
    img: "/cakes/IMG_3278.jpeg",
  },
  {
    name: "Cute Character Cake",
    price: "RM99+",
    desc: "Perfect for gifting 🎁",
    img: "/cakes/IMG_3733.jpeg",
  },
  {
    name: "Premium Celebration Cake",
    price: "RM120+",
    desc: "Luxury design 💎",
    img: "/cakes/IMG_3511.jpeg",
  },
  {
    name: "Signature Morii Cake",
    price: "RM109+",
    desc: "Customer favorite 💖",
    img: "/cakes/IMG_3814.jpeg",
  },
  {
    name: "Exclusive Custom Cake",
    price: "RM139+",
    desc: "High-end custom design ✨",
    img: "/cakes/IMG_5591.JPG",
  },
];

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    cake: "",
    size: "",
    date: "",
  });

  const handleOrder = () => {
    const text = `Hello Morii Baking Studio!%0A
Name: ${form.name}%0A
Cake: ${form.cake}%0A
Size: ${form.size}%0A
Date: ${form.date}`;

    window.open(`https://wa.me/601125864168?text=${text}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#fffaf7] text-gray-800">

      {/* HERO */}
      <section className="text-center py-20 px-4">
        <h1 className="text-5xl font-bold mb-4">
          Morii Baking Studio 🎂
        </h1>
        <p className="text-lg mb-6">
          Custom cakes made for your moments ✨
        </p>
        <button
          onClick={() => window.scrollTo({ top: 800, behavior: "smooth" })}
          className="bg-black text-white px-6 py-3 rounded-2xl text-lg"
        >
          Order Now
        </button>
      </section>

      {/* PRODUCTS */}
      <section className="px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Choose Your Cake 🎂
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow hover:scale-105 transition overflow-hidden"
            >
              <img
                src={item.img}
                className="w-full h-64 object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-bold">{item.name}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
                <p className="mt-2 font-semibold">{item.price}</p>

                <button
                  onClick={() =>
                    setForm({ ...form, cake: item.name })
                  }
                  className="mt-4 w-full bg-black text-white py-2 rounded-xl"
                >
                  Select This 🎂
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="py-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Why Choose Morii? 💖
        </h2>
        <p>✔ 100+ Happy Customers</p>
        <p>✔ Custom Design Available</p>
        <p>✔ Premium Ingredients</p>
      </section>

      {/* ORDER FORM */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Order Your Cake 🎂
        </h2>

        <div className="max-w-md mx-auto space-y-4">

          <input
            placeholder="Your Name"
            className="w-full p-3 border rounded-xl"
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
            placeholder="Selected Cake"
            value={form.cake}
            readOnly
            className="w-full p-3 border rounded-xl bg-gray-100"
          />

          <select
            className="w-full p-3 border rounded-xl"
            onChange={(e) =>
              setForm({ ...form, size: e.target.value })
            }
          >
            <option>Select Size</option>
            <option>6 inch</option>
            <option>8 inch</option>
            <option>10 inch</option>
          </select>

          <input
            type="date"
            className="w-full p-3 border rounded-xl"
            onChange={(e) =>
              setForm({ ...form, date: e.target.value })
            }
          />

          <button
            onClick={handleOrder}
            className="w-full bg-black text-white py-4 rounded-2xl text-lg"
          >
            Confirm Order via WhatsApp 📲
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-400 text-sm">
        © 2026 Morii Baking Studio
      </footer>
    </div>
  );
}