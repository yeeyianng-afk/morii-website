"use client";

import { useState } from "react";

const featuredProducts = [
  {
    name: "Custom Birthday Cake",
    price: "From RM58",
    desc: "Soft, cute and custom-made ✨",
    img: "/cakes/cake-1.jpeg",
  },
  {
    name: "Premium Cake",
    price: "From RM118",
    desc: "Elegant & aesthetic 💖",
    img: "/cakes/cake-2.jpeg",
  },
  {
    name: "Cute Character Cake",
    price: "From RM158",
    desc: "Fun & giftable 🎁",
    img: "/cakes/cake-3.jpeg",
  },
];

const categories = [
  {
    title: "Cakes",
    groups: [
      {
        name: "3D Cakes",
        items: [
          { img: "/cakes/3d-1.jpeg" },
          { img: "/cakes/3d-2.jpeg" },
        ],
      },
      {
        name: "Korean Minimal Cakes",
        items: [
          { img: "/cakes/korean-1.jpeg" },
          { img: "/cakes/korean-2.jpeg" },
        ],
      },
      {
        name: "Baby 1st Cakes",
        items: [
          { img: "/cakes/baby-1.jpeg" },
          { img: "/cakes/baby-2.jpeg" },
        ],
      },
      {
        name: "Wedding Cakes",
        items: [{ img: "/cakes/wedding-1.pdf" }],
      },
      {
        name: "Cartoon Cakes",
        items: [{ img: "/cakes/cartoon-1.jpeg" }],
      },
      {
        name: "Goddess Cakes",
        items: [{ img: "/cakes/goddess-1.jpeg" }],
      },
      {
        name: "Parents Cakes",
        items: [{ img: "/cakes/parent-1.jpeg" }],
      },
       {
        name: "Elder Cakes",
        items: [{ img: "/cakes/elder-1.jpeg" }],
      },
    ],
  },
  {
    title: "Full Moon",
    items: [
      { img: "/cakes/fullmoon-1.pdf" },
      { img: "/cakes/fullmoon-2.jpeg" },
      { img: "/cakes/fullmoon-3.jpeg" },
      { img: "/cakes/fullmoon-4.jpeg" },
    ],
  },
  {
    title: "Party",
    items: [
      { img: "/cakes/party-1.jpeg" },
      { img: "/cakes/party-2.jpeg" },
      { img: "/cakes/party-3.jpeg" },
      { img: "/cakes/party-4.jpeg" },
    ],
  },
  {
    title: "Cookies",
    items: [
      { img: "/cakes/icing-1.jpeg" },
      { img: "/cakes/icing-2.jpeg" },
      { img: "/cakes/icing-3.jpeg" },
      { img: "/cakes/icing-4.jpeg" },
    ],
  },
];

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    product: "",
    size: "",
    date: "",
  });

  const handleSelect = (productName: string) => {
    setForm({ ...form, product: productName });
    window.scrollTo({ top: 3000, behavior: "smooth" });
  };

  const handleOrder = () => {
    const text = `Hello Morii Baking Studio!%0A
Name: ${form.name}%0A
Product: ${form.product}%0A
Details: ${form.size}%0A
Date: ${form.date}%0A`;

    window.open(`https://wa.me/601125864168?text=${text}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#fffaf7] text-gray-800">
      
      {/* HERO */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl font-semibold mb-4">
          Morii Baking Studio 🎂
        </h1>
        <p className="text-gray-600 mb-4">
          Not just a cake. It’s your moment ✨
        </p>
        <p className="text-pink-400 font-medium mb-6">
          Limited slots daily — book early!
        </p>
        <button
          onClick={() => window.scrollTo({ top: 500, behavior: "smooth" })}
          className="bg-black text-white px-6 py-3 rounded-2xl"
        >
          View Menu
        </button>
      </section>

      {/* FEATURED */}
      <section className="px-6 max-w-6xl mx-auto pb-20">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Featured Picks ✨
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredProducts.map((item, index) => (
            <div key={index} className="bg-white rounded-3xl shadow">
              <img src={item.img} className="w-full h-72 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
                <p className="mt-2 font-medium">{item.price}</p>
                <button
                  onClick={() => handleSelect(item.name)}
                  className="mt-4 w-full bg-black text-white py-2 rounded-xl"
                >
                  Select This
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MENU */}
      <section className="px-6 max-w-6xl mx-auto pb-20">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Menu Categories
        </h2>

        <div className="space-y-16">
          {categories.map((category, index) => (
            <div key={index}>
              <h3 className="text-2xl font-semibold mb-6">
                {category.title}
              </h3>

              {"groups" in category ? (
                <div className="space-y-10">
                  {category.groups.map((group, i) => (
                    <div key={i}>
                      <h4 className="text-lg font-medium mb-3 text-gray-600">
                        {group.name}
                      </h4>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {group.items.map((item, idx) => (
                          <img
                            key={idx}
                            src={item.img}
                            className="w-full h-56 object-cover rounded-xl"
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {category.items.map((item, idx) => (
                    <img
                      key={idx}
                      src={item.img}
                      className="w-full h-56 object-cover rounded-xl"
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ORDER */}
      <section className="px-6 max-w-4xl mx-auto pb-20">
        <div className="bg-white p-8 rounded-3xl shadow">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Order Your Cake 🎂
          </h2>

          <div className="grid gap-4">
            <input
              placeholder="Your Name"
              className="p-3 border rounded-xl"
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            <input
              placeholder="Selected Product"
              value={form.product}
              readOnly
              className="p-3 border rounded-xl bg-gray-50"
            />

            <input
              placeholder="Size / Details"
              className="p-3 border rounded-xl"
              onChange={(e) =>
                setForm({ ...form, size: e.target.value })
              }
            />

            <input
              type="date"
              className="p-3 border rounded-xl"
              onChange={(e) =>
                setForm({ ...form, date: e.target.value })
              }
            />

            <button
              onClick={handleOrder}
              className="bg-black text-white py-3 rounded-xl"
            >
              Book via WhatsApp 📲
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-400 text-sm">
        © 2026 Morii Baking Studio
      </footer>
    </div>
  );
}