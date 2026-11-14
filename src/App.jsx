import { useState } from "react";
import { menuItems, menuCategories, cuisines } from "./data/metadata";

function App() {
  // -------------------- STATE --------------------

  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedCuisine, setSelectedCuisine] = useState("All");
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("2");

  // -------------------- FILTER MENU ITEMS --------------------

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory =
      category === "All" || item.category === category;

    const matchesCuisine =
      selectedCuisine === "All" ||
      item.cuisine === selectedCuisine;

    const searchText = search.toLowerCase();

    const matchesSearch =
      item.name.toLowerCase().includes(searchText) ||
      item.category.toLowerCase().includes(searchText) ||
      (item.description || "").toLowerCase().includes(searchText) ||
      (item.tags || []).some((tag) =>
        tag.toLowerCase().includes(searchText)
      );

    return matchesCategory && matchesCuisine && matchesSearch;
  });

  // -------------------- ADD TO CART --------------------

  function addToCart(item) {
    const existingItem = cart.find(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? {
              ...cartItem,
              quantity: cartItem.quantity + 1,
            }
            : cartItem
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...item,
          quantity: 1,
        },
      ]);
    }
  }

  // -------------------- CHANGE QUANTITY --------------------

  function changeQuantity(id, amount) {
    setCart((previousCart) =>
      previousCart
        .map((item) =>
          item.id === id
            ? {
              ...item,
              quantity: item.quantity + amount,
            }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  // -------------------- CART TOTALS --------------------

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const count = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  // -------------------- TABLE RESERVATION --------------------

  function reserveTable(event) {
    event.preventDefault();

    if (!name.trim() || !email.trim() || !date || !time) {
      alert("Please complete all reservation fields.");
      return;
    }

    alert(
      `Thank you, ${name}! Your table reservation request has been received for ${date} at ${time} for ${guests} guest(s).`
    );

    setName("");
    setEmail("");
    setDate("");
    setTime("");
    setGuests("2");
  }

  // -------------------- JSX --------------------

  return (
    <div className="min-h-screen bg-amber-50 text-stone-800">

      {/* NAVBAR */}

      <nav className="sticky top-0 z-40 bg-amber-950 text-white shadow-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">

          <a href="#home" className="text-2xl font-bold tracking-wide">
            Aura Café
          </a>

          <div className="hidden items-center gap-6 md:flex">
            <a href="#home" className="transition hover:text-amber-300">
              Home
            </a>

            <a href="#menu" className="transition hover:text-amber-300">
              Menu
            </a>

            <a
              href="#reservations"
              className="transition hover:text-amber-300"
            >
              Reservations
            </a>
          </div>

          <button
            type="button"
            onClick={() => setCartOpen(true)}
            className="rounded-full bg-amber-500 px-4 py-2 font-semibold text-amber-950 transition hover:bg-amber-400"
          >
            🛒 Cart ({count})
          </button>

        </div>
      </nav>

      {/* HERO SECTION */}

      <section
        id="home"
        className="relative flex min-h-[500px] items-center justify-center overflow-hidden bg-stone-900 px-5 py-24 text-center text-white"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-amber-950 via-stone-900 to-stone-800" />

        <div className="relative z-10 mx-auto max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
            Welcome to Aura Café
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-6xl">
            Your Everyday Escape,
            <span className="block text-amber-300">
              Served Fresh.
            </span>
          </h1>

          <p className="mx-auto mb-8 max-w-xl text-lg text-stone-200">
            Enjoy handcrafted coffee, delicious food, and peaceful
            moments in a warm and welcoming atmosphere.
          </p>

          <a
            href="#menu"
            className="inline-block rounded-full bg-amber-500 px-8 py-3 font-bold text-amber-950 transition hover:bg-amber-400"
          >
            Explore Our Menu
          </a>
        </div>
      </section>

      {/* MENU SECTION */}

      <section id="menu" className="mx-auto max-w-7xl px-5 py-16">

        <div className="mb-10 text-center">
          <p className="mb-2 font-semibold uppercase tracking-widest text-amber-700">
            Made with Love
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Explore Our Menu
          </h2>

          <p className="mt-3 text-stone-600">
            Find your next favourite bite or sip.
          </p>
        </div>

        {/* SEARCH */}

        <div className="mx-auto mb-6 max-w-xl">
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search coffee, pizza, desserts..."
            aria-label="Search menu items"
            className="w-full rounded-full border border-amber-200 bg-white px-5 py-3 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
          />
        </div>

        {/* CUISINE FILTER */}

        <div className="mb-6 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => setSelectedCuisine("All")}
            className={`rounded-full px-5 py-2 transition ${selectedCuisine === "All"
              ? "bg-amber-800 text-white"
              : "bg-white text-stone-700 hover:bg-amber-100"
              }`}
          >
            All Cuisines
          </button>

          {cuisines.map((cuisine) => (
            <button
              type="button"
              key={cuisine}
              onClick={() => setSelectedCuisine(cuisine)}
              className={`rounded-full px-5 py-2 transition ${selectedCuisine === cuisine
                ? "bg-amber-800 text-white"
                : "bg-white text-stone-700 hover:bg-amber-100"
                }`}
            >
              {cuisine}
            </button>
          ))}
        </div>

        {/* CATEGORY FILTER */}

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {menuCategories.map((menuCategory) => (
            <button
              type="button"
              key={menuCategory}
              onClick={() => setCategory(menuCategory)}
              className={`rounded-full border px-5 py-2 transition ${category === menuCategory
                ? "border-amber-800 bg-amber-800 text-white"
                : "border-amber-200 bg-white hover:bg-amber-100"
                }`}
            >
              {menuCategory}
            </button>
          ))}
        </div>

        {/* MENU CARDS */}

        {filteredItems.length === 0 ? (
          <div className="rounded-2xl bg-white p-10 text-center shadow-sm">
            <p className="text-lg font-semibold">
              No menu items found.
            </p>

            <p className="mt-2 text-stone-500">
              Try another search or select a different filter.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredItems.map((item) => (
              <article
                key={item.id}
                className="group overflow-hidden rounded-2xl border border-amber-100 bg-white shadow-md transition-all duration-300 ease-out hover:-translate-y-2 hover:border-amber-300 hover:shadow-2xl"
              >
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-48 w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-48 items-center justify-center bg-amber-100 text-5xl">
                    ☕
                  </div>
                )}

                <div className="p-5">

                  <div className="mb-3 flex items-start justify-between gap-3">
                    <h3 className="text-xl font-bold">
                      {item.name}
                    </h3>

                    <span className="whitespace-nowrap font-bold text-amber-800">
                      ₹{item.price}
                    </span>
                  </div>

                  <p className="mb-3 text-sm leading-relaxed text-stone-600">
                    {item.description || "Freshly prepared with care."}
                  </p>

                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-900">
                      {item.category}
                    </span>

                    {item.cuisine && (
                      <span className="rounded-full bg-stone-100 px-3 py-1 text-xs text-stone-700">
                        {item.cuisine}
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => addToCart(item)}
                    className="w-full rounded-full bg-amber-800 px-4 py-3 font-semibold text-white transition hover:bg-amber-900"
                  >
                    + Add to Cart
                  </button>

                </div>
              </article>
            ))}
          </div>
        )
        }

      </section >

      {/* CART OVERLAY */}

      {
        cartOpen && (
          <div
            className="fixed inset-0 z-50 flex justify-end bg-black/50"
            onClick={() => setCartOpen(false)}
          >
            <aside
              role="dialog"
              aria-modal="true"
              aria-label="Shopping cart"
              className="flex h-full w-full max-w-md flex-col bg-white shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >

              {/* CART HEADER */}

              <div className="flex items-center justify-between border-b border-stone-200 p-5">
                <div>
                  <h2 className="text-2xl font-bold">Your Cart</h2>

                  <p className="text-sm text-stone-500">
                    {count} item(s)
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setCartOpen(false)}
                  aria-label="Close cart"
                  className="rounded-full px-3 py-2 text-2xl transition hover:bg-stone-100"
                >
                  ×
                </button>
              </div>

              {/* CART ITEMS */}

              <div className="flex-1 overflow-y-auto p-5">

                {cart.length === 0 ? (
                  <div className="py-16 text-center">
                    <p className="mb-3 text-5xl">🛒</p>

                    <p className="text-lg font-semibold">
                      Your cart is empty.
                    </p>

                    <p className="mt-2 text-sm text-stone-500">
                      Add something delicious from our menu!
                    </p>
                  </div>
                ) : (
                  <div className="space-y-5">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-4 border-b border-stone-100 pb-5"
                      >
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-20 w-20 rounded-xl object-cover"
                          />
                        ) : (
                          <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-amber-100 text-3xl">
                            ☕
                          </div>
                        )}

                        <div className="min-w-0 flex-1">
                          <h3 className="font-bold">{item.name}</h3>

                          <p className="mt-1 text-sm text-stone-600">
                            ₹{item.price} each
                          </p>

                          <p className="mt-1 font-semibold text-amber-800">
                            ₹{item.price * item.quantity}
                          </p>

                          <div className="mt-3 flex items-center gap-3">
                            <button
                              type="button"
                              onClick={() => changeQuantity(item.id, -1)}
                              aria-label={`Decrease ${item.name} quantity`}
                              className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 font-bold hover:bg-amber-200"
                            >
                              −
                            </button>

                            <span className="min-w-4 text-center">
                              {item.quantity}
                            </span>

                            <button
                              type="button"
                              onClick={() => changeQuantity(item.id, 1)}
                              aria-label={`Increase ${item.name} quantity`}
                              className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 font-bold hover:bg-amber-200"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

              </div>

              {/* CART TOTAL */}

              <div className="border-t border-stone-200 p-5">
                <div className="mb-4 flex items-center justify-between text-lg">
                  <span className="font-semibold">Total</span>

                  <span className="text-2xl font-bold text-amber-800">
                    ₹{total}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    if (cart.length === 0) {
                      alert("Your cart is empty. Please add an item first.");
                      return;
                    }

                    alert("Your order summary is ready!");

                    setCart([]);
                    setCartOpen(false);
                  }}
                  className="w-full rounded-full bg-amber-800 px-5 py-3 font-bold text-white transition hover:bg-amber-900"
                >
                  Place Order
                </button>

                <p className="mt-2 text-center text-xs text-stone-500">
                  Demo checkout — no payment is processed.
                </p>
              </div>

            </aside>
          </div>
        )
      }

      {/* RESERVATION SECTION */}

      <section
        id="reservations"
        className="bg-amber-100 px-5 py-16"
      >
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">

          {/* RESERVATION INTRO */}

          <div>
            <p className="mb-3 font-semibold uppercase tracking-widest text-amber-800">
              Your Table Awaits
            </p>

            <h2 className="mb-5 text-3xl font-bold sm:text-4xl">
              Make a Reservation
            </h2>

            <p className="mb-6 leading-relaxed text-stone-700">
              Planning a coffee date, a family meal, or a peaceful
              afternoon? Reserve your table at Aura Café and let us
              take care of the rest.
            </p>

            <div className="space-y-3 text-stone-700">
              <p>☕ Freshly brewed coffee</p>
              <p>🍰 Delicious food and desserts</p>
              <p>🪑 A warm and comfortable atmosphere</p>
            </div>
          </div>

          {/* RESERVATION FORM */}

          <form
            onSubmit={reserveTable}
            className="rounded-2xl bg-white p-6 shadow-lg sm:p-8"
          >
            <h3 className="mb-6 text-2xl font-bold">
              Book Your Table
            </h3>

            <div className="mb-4">
              <label
                htmlFor="reservation-name"
                className="mb-2 block font-medium"
              >
                Full Name
              </label>

              <input
                id="reservation-name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Enter your full name"
                autoComplete="name"
                required
                className="w-full rounded-lg border border-stone-300 px-4 py-3 outline-none transition focus:border-amber-600 focus:ring-2 focus:ring-amber-200"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="reservation-email"
                className="mb-2 block font-medium"
              >
                Email Address
              </label>

              <input
                id="reservation-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email"
                autoComplete="email"
                required
                className="w-full rounded-lg border border-stone-300 px-4 py-3 outline-none transition focus:border-amber-600 focus:ring-2 focus:ring-amber-200"
              />
            </div>

            <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">

              <div>
                <label
                  htmlFor="reservation-date"
                  className="mb-2 block font-medium"
                >
                  Date
                </label>

                <input
                  id="reservation-date"
                  type="date"
                  value={date}
                  min={new Date().toLocaleDateString("en-CA")}
                  onChange={(event) => setDate(event.target.value)}
                  required
                  className="w-full rounded-lg border border-stone-300 px-3 py-3 outline-none transition focus:border-amber-600 focus:ring-2 focus:ring-amber-200"
                />
              </div>

              <div>
                <label
                  htmlFor="reservation-time"
                  className="mb-2 block font-medium"
                >
                  Time
                </label>

                <input
                  id="reservation-time"
                  type="time"
                  value={time}
                  onChange={(event) => setTime(event.target.value)}
                  required
                  className="w-full rounded-lg border border-stone-300 px-3 py-3 outline-none transition focus:border-amber-600 focus:ring-2 focus:ring-amber-200"
                />
              </div>

            </div>

            <div className="mb-6">
              <label
                htmlFor="reservation-guests"
                className="mb-2 block font-medium"
              >
                Number of Guests
              </label>

              <select
                id="reservation-guests"
                value={guests}
                onChange={(event) => setGuests(event.target.value)}
                className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 outline-none transition focus:border-amber-600 focus:ring-2 focus:ring-amber-200"
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5">5 Guests</option>
                <option value="6">6 Guests</option>
                <option value="7">7 Guests</option>
                <option value="8">8 Guests</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-amber-800 px-5 py-3 font-bold text-white transition hover:bg-amber-900"
            >
              Reserve My Table
            </button>

            <p className="mt-3 text-center text-xs text-stone-500">
              Demo reservation — this form does not save bookings to a server.
            </p>
          </form>

        </div>
      </section>

      {/* FOOTER */}

      <footer className="bg-amber-950 px-5 py-8 text-center text-white">
        <a
          href="#home"
          className="text-2xl font-bold text-amber-300"
        >
          Aura Café
        </a>

        <p className="mt-3 text-sm text-amber-100">
          Good coffee. Good food. Good moments.
        </p>

        <div className="my-5 flex justify-center gap-6 text-sm">
          <a href="#home" className="transition hover:text-amber-300">
            Home
          </a>

          <a href="#menu" className="transition hover:text-amber-300">
            Menu
          </a>

          <a
            href="#reservations"
            className="transition hover:text-amber-300"
          >
            Reservations
          </a>
        </div>

        <p className="border-t border-amber-800 pt-5 text-sm text-amber-200">
          &copy; {new Date().getFullYear()} Aura Café. All rights reserved.
        </p>
      </footer>

    </div >
  );
}

export default App;
