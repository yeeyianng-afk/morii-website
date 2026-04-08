"use client";

import { useState } from "react";

const featuredProducts = [
  {
    name: "4inchCustom Birthday Cake",
    price: "From RM58",
    desc: "Soft, cute and custom-made ✨",
    img: "/cakes/cake-1.jpeg",
  },
  {
    name: "6inch Custom Birthday Cake",
    price: "From RM118",
    desc: "Soft, cute and custom-made ✨",
    img: "/cakes/cake-2.jpeg",
  },
  {
    name: "8inchCustom Birthday Cake",
    price: "From RM158",
    desc: "Soft, cute and custom-made ✨",
    img: "/cakes/cake-3.jpeg",
  },
  {
    name: "Premium Cake",
    price: "From RM188",
    desc: "Elegant & aesthetic 💖",
    img: "/cakes/premium-1.jpeg",
  },
];

const categories = [
  {
    title: "Cakes",
    groups: [
      {
        name: "3D Cakes",
        price: "From RM138",
        items: [
          { img: "/cakes/3d-1.jpeg" },
          { img: "/cakes/3d-2.jpeg" },
          { img: "/cakes/3d-3.jpeg" },
          { img: "/cakes/3d-4.jpeg" },
          { img: "/cakes/3d-5.jpeg" },
          { img: "/cakes/3d-6.jpeg" },
        ],
      },
      {
        name: "Korean Minimal Cakes",
        price: "From RM58",
        items: [
          { img: "/cakes/korean-1.jpeg" },
          { img: "/cakes/korean-2.jpeg" },
          { img: "/cakes/korean-3.jpeg" },
          { img: "/cakes/korean-4.jpeg" },
          { img: "/cakes/korean-5.jpeg" },
          { img: "/cakes/korean-6.jpeg" },
        ],
      },
      {
        name: "Baby 1st Cakes",
        price: "From RM128",
        items: [
          { img: "/cakes/baby-1.jpeg" },
          { img: "/cakes/baby-2.jpeg" },
          { img: "/cakes/baby-3.JPG" },
          { img: "/cakes/baby-4.jpeg" },
          { img: "/cakes/baby-5.jpeg" },
          { img: "/cakes/baby-6.jpeg" },
        ],
      },
      {
        name: "Cartoon Cakes",
        price: "From RM128",
        items: [
          { img: "/cakes/cartoon-1.jpeg" },
          { img: "/cakes/cartoon-2.jpeg" },
          { img: "/cakes/cartoon-3.jpeg" },
          { img: "/cakes/cartoon-4.jpeg" },
          { img: "/cakes/cartoon-5.jpeg" },
          { img: "/cakes/cartoon-6.jpeg" },
        ],
      },
      {
        name: "Wedding Cakes",
        price: "From RM128",
        items: [
          { img: "/cakes/wedding-1.pdf" },
          { img: "/cakes/wedding-2.jpeg" },
          { img: "/cakes/wedding-3.jpeg" },
          { img: "/cakes/wedding-4.jpeg" },
          { img: "/cakes/wedding-5.jpeg" },
          { img: "/cakes/wedding-6.jpeg" },
        ],
      },
      {
        name: "Goddess Cakes",
        price: "From RM128",
        items: [
          { img: "/cakes/goddess-1.jpeg" },
          { img: "/cakes/goddess-2.jpeg" },
          { img: "/cakes/goddess-3.jpeg" },
          { img: "/cakes/goddess-4.jpeg" },
          { img: "/cakes/goddess-5.JPG" },
          { img: "/cakes/goddess-6.jpeg" },
        ],
      },
      {
        name: "Parents Cakes",
        price: "From RM128",
        items: [
          { img: "/cakes/parent-1.jpeg" },
          { img: "/cakes/parent-2.jpeg" },
          { img: "/cakes/parent-3.jpeg" },
          { img: "/cakes/parent-4.jpeg" },
          { img: "/cakes/parent-5.jpeg" },
          { img: "/cakes/parent-6.jpeg" },
        ],
      },
      {
        name: "Elder Cakes",
        price: "From RM128",
        items: [
          { img: "/cakes/elder-1.jpeg" },
          { img: "/cakes/elder-2.jpeg" },
          { img: "/cakes/elder-3.jpeg" },
          { img: "/cakes/elder-4.jpeg" },
          { img: "/cakes/elder-5.jpeg" },
          { img: "/cakes/elder-6.jpg" },

        ],
      },
    ],
  },
{
    title: "Full Moon",
    price: "From RM32",
    items: [
      { img: "/cakes/fullmoon-1.pdf" },
      { img: "/cakes/fullmoon-2.jpeg" },
      { img: "/cakes/fullmoon-3.jpg" },
      { img: "/cakes/fullmoon-4.jpeg" },
      { img: "/cakes/fullmoon-5.jpeg" },
      { img: "/cakes/fullmoon-6.jpeg" },
    ],
  },
  {
    title: "Party",
    price: "From RM38",
    items: [
      { img: "/cakes/party-1.jpeg" },
      { img: "/cakes/party-2.jpeg" },
      { img: "/cakes/party-3.jpeg" },
      { img: "/cakes/party-4.jpeg" },
      { img: "/cakes/party-5.jpeg" },
      { img: "/cakes/party-6.jpeg" },
    ],
  },
  {
    title: "Cookies",
    price: "From RM10",
    items: [
      { img: "/cakes/icing-1.jpeg" },
      { img: "/cakes/icing-2.jpeg" },
      { img: "/cakes/icing-3.jpeg" },
      { img: "/cakes/icing-4.jpeg" },
      { img: "/cakes/icing-5.JPG" },
      { img: "/cakes/icing-6.jpeg" },
    ],
  },
  {
    title: "Crepe Cakes",
    price: "From RM15",
    items: [
      { img: "/cakes/crepe-1.jpeg" },
      { img: "/cakes/crepe-2.jpeg" },
      { img: "/cakes/crepe-3.jpeg" },
      { img: "/cakes/crepe-4.jpeg" },
      { img: "/cakes/crepe-5.jpeg" },
      { img: "/cakes/crepe-6.jpeg" },
    ],
  },

  {
    title: "Dessert Boxes",
    price: "From RM18",
    items: [
      { img: "/cakes/dessert-1.jpeg" },
      { img: "/cakes/dessert-2.jpeg" },
      { img: "/cakes/dessert-3.jpeg" },
      { img: "/cakes/dessert-4.jpeg" },
      { img: "/cakes/dessert-5.jpeg" },
      { img: "/cakes/dessert-6.jpeg" },
    ],
  },

  {
    title: "Wedding Boxes",
    price: "From RM28",
    items: [
      { img: "/cakes/wbox-1.JPG" },
      { img: "/cakes/wbox-2.jpeg" },
      { img: "/cakes/wbox-3.jpeg" },
      { img: "/cakes/wbox-4.jpeg" },
      { img: "/cakes/wbox-5.jpeg" },
      { img: "/cakes/wbox-6.jpeg" },
    ],
  },
];

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    product: "",
    details: "",
    date: "",
  });

  const handleSelect = (productName: string) => {
    setForm((prev) => ({ ...prev, product: productName }));
    const orderSection = document.getElementById("order");
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOrder = () => {
    const text = `Hi Morii Baking Studio! 🎂%0A%0A
I'd like to place an order:%0A
--------------------------------%0A
Name: ${form.name}%0A
Product: ${form.product}%0A
Details: ${form.details}%0A
Pickup / Delivery Date: ${form.date}%0A
--------------------------------%0A%0A
Can you advise further? 😊`;

    window.open(`https://wa.me/601125864168?text=${text}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#fffaf7] text-gray-800">
      {/* HERO */}
      <section className="text-center py-20 px-6">
        <p className="text-sm tracking-[0.2em] uppercase text-gray-500 mb-3">
          Morii Baking Studio
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold mb-4">
          Sweet moments, made beautifully 🎂
        </h1>
        <p className="max-w-2xl mx-auto text-gray-600 mb-4">
          Custom cakes, full moon gift boxes, party sets, icing cookies, crepe cakes and dessert boxes for every special occasion.
        </p>
        <p className="text-pink-400 font-medium mb-2">
          Soft • Aesthetic • Handmade
        </p>
        <p className="text-red-400 font-medium mb-8">
          Limited slots daily — book early!
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <button
            onClick={() => window.scrollTo({ top: 700, behavior: "smooth" })}
            className="bg-black text-white px-6 py-3 rounded-2xl text-lg"
          >
            View Menu
          </button>
          <button
            onClick={() => {
              const orderSection = document.getElementById("order");
              if (orderSection) {
                orderSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="border border-black px-6 py-3 rounded-2xl text-lg"
          >
            Order Now
          </button>
        </div>
      </section>

      {/* FEATURED */}
      <section className="px-6 max-w-6xl mx-auto pb-20">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Best Picks ✨
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredProducts.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-72 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500 mt-2">{item.desc}</p>
                <p className="mt-3 font-medium">{item.price}</p>
                <button
                  onClick={() => handleSelect(item.name)}
                  className="mt-4 w-full bg-black text-white py-3 rounded-2xl"
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
              <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
                <h3 className="text-2xl font-semibold">{category.title}</h3>
                <span className="text-sm text-pink-500 font-medium">
                  {category.price}
                </span>
              </div>

              {category.groups ? (
                <div className="space-y-10">
                  {category.groups.map((group, i) => (
                    <div key={i}>
                      <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                        <h4 className="text-lg font-medium text-gray-700">
                          {group.name}
                        </h4>
                        <span className="text-sm text-gray-500">
                          {group.price}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {group.items.map((item, idx) => (
                          <img
                            key={idx}
                            src={item.img}
                            alt={group.name}
                            onClick={() => handleSelect(group.name)}
                            className="w-full h-56 object-cover rounded-xl cursor-pointer hover:scale-[1.02] transition"
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {category.items?.map((item, idx) => (
                    <img
                      key={idx}
                      src={item.img}
                      alt={category.title}
                      onClick={() => handleSelect(category.title)}
                      className="w-full h-56 object-cover rounded-xl cursor-pointer hover:scale-[1.02] transition"
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* TRUST */}
      <section className="px-6 max-w-5xl mx-auto pb-20">
        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Why Choose Morii? 💖
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-center text-gray-600">
            <div>✨ Custom aesthetic designs</div>
            <div>🎂 Handmade with care</div>
            <div>📲 Easy order via WhatsApp</div>
          </div>
        </div>
      </section>

      {/* ORDER */}
      <section id="order" className="px-6 max-w-4xl mx-auto pb-20">
        <div className="bg-white p-8 rounded-3xl shadow-sm">
          <h2 className="text-2xl font-semibold text-center mb-3">
            Order Your Sweet Moment 🎂
          </h2>
          <p className="text-center text-gray-500 mb-2">
            Select any photo above and we will fill in the product for you.
          </p>
          <p className="text-center text-red-400 mb-6">
            ⚠️ Only limited slots available daily
          </p>

          <div className="grid gap-4">
            <input
              placeholder="Your Name"
              className="p-3 border rounded-xl"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <input
              placeholder="Selected Product"
              value={form.product}
              readOnly
              className="p-3 border rounded-xl bg-gray-50"
            />

            <input
              placeholder="Size / Theme / Color / Writing on cake"
              className="p-3 border rounded-xl"
              onChange={(e) => setForm({ ...form, details: e.target.value })}
            />

            <input
              type="date"
              className="p-3 border rounded-xl"
              onChange={(e) => setForm({ ...form, date: e.target.value })}
            />

            <button
              onClick={handleOrder}
              className="bg-black text-white py-4 rounded-2xl text-lg"
            >
              Secure Your Cake Slot Now 🎂
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-8 text-sm text-gray-400">
        © 2026 Morii Baking Studio
     </footer>
     </div>
    );
    }