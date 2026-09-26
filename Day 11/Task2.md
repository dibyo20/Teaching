# 🛒 React Components & Props — TechCart Product Showcase

## 📌 Task

Build a simple **TechCart Product Showcase** using React.

The main purpose of this project is to revise and practice:

- React Components
- Props
- Passing data from parent → child
- Reusable components
- JSX
- Basic conditional rendering
- `.map()`

> **Important:** This is a React fundamentals exercise. Keep the UI and CSS simple. The focus is on understanding **components and props**, not on building a complex application.

---

## 🎯 Goal

Create a basic e-commerce product page that looks roughly like this:

```text
┌─────────────────────────────────────────────────────┐
│  TechCart                                            │
│  Electronics for Everyone                           │
└─────────────────────────────────────────────────────┘

┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│     IMAGE       │  │     IMAGE       │  │     IMAGE       │
│                 │  │                 │  │                 │
│ Mechanical      │  │ Wireless Mouse  │  │ Gaming Headset  │
│ Keyboard        │  │                 │  │                 │
│ Accessories     │  │ Accessories     │  │ Audio           │
│ ₹2,499          │  │ ₹1,299          │  │ ₹3,499          │
│ ⭐ 4.5          │  │ ⭐ 4.2         │  │ ⭐ 4.7          │
│   In Stock      │  │   In Stock      │  │   In Stock      │
└─────────────────┘  └─────────────────┘  └─────────────────┘

┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│     IMAGE       │  │     IMAGE       │  │     IMAGE       │
│                 │  │                 │  │                 │
│ USB-C Hub       │  │ Laptop Stand    │  │ Webcam          │
│ Accessories     │  │ Accessories     │  │ Cameras         │
│ ₹1,799          │  │ ₹999            │  │ ₹2,299          │
│ ⭐ 4.3          │  │ ⭐ 4.1         │  │ ⭐ 4.6          │
│ Out of Stock    │  │   In Stock      │  │   In Stock      │
└─────────────────┘  └─────────────────┘  └─────────────────┘

┌─────────────────────────────────────────────────────┐
│ © 2026 TechCart                Built for tech lovers│
└─────────────────────────────────────────────────────┘
```

---

# 🧩 Component Structure

Your application should have the following structure:

```text
App
│
├── Header
├── ProductList
└── Footer
```

You can organize the files however you want, but try to create separate components.

Example:

```text
src/
│
├── components/
│   ├── Header.jsx
│   ├── ProductList.jsx
│   ├── ProductCard.jsx
│   └── Footer.jsx
│
├── App.jsx
├── App.css
└── main.jsx
```

---

# 1️⃣ Header Component

Create a reusable `Header` component.

It should receive the following through props:

```jsx
<Header
  title="TechCart"
  subtitle="Electronics for Everyone"
/>
```

Display:

```text
TechCart
Electronics for Everyone
```

### Props

| Prop | Example |
|---|---|
| `title` | `"TechCart"` |
| `subtitle` | `"Electronics for Everyone"` |

---

# 2️⃣ ProductCard Component

Create a reusable `ProductCard` component.

Each product card should display:

- Product image
- Product name
- Category
- Price
- Rating
- Stock status

Example:

```jsx
<ProductCard
  image="keyboard.jpg"
  name="Mechanical Keyboard"
  category="Accessories"
  price={2499}
  rating={4.5}
  inStock={true}
/>
```

### Props

| Prop | Type | Example |
|---|---|---|
| `image` | String | `"keyboard.jpg"` |
| `name` | String | `"Mechanical Keyboard"` |
| `category` | String | `"Accessories"` |
| `price` | Number | `2499` |
| `rating` | Number | `4.5` |
| `inStock` | Boolean | `true` |

### Stock Display

Use the `inStock` prop to display:

```text
true  → In Stock
false → Out of Stock
```

This is your opportunity to practice **conditional rendering**.

---

# 3️⃣ ProductList Component

Create a `ProductList` component.

It should contain at least **6 products**.

Suggested products:

| Product | Category | Price | Rating | Stock |
|---|---|---:|---:|---|
| Mechanical Keyboard | Accessories | ₹2,499 | ⭐ 4.5 | ✅ |
| Wireless Mouse | Accessories | ₹1,299 | ⭐ 4.2 | ✅ |
| Gaming Headset | Audio | ₹3,499 | ⭐ 4.7 | ✅ |
| USB-C Hub | Accessories | ₹1,799 | ⭐ 4.3 | ❌ |
| Laptop Stand | Accessories | ₹999 | ⭐ 4.1 | ✅ |
| Webcam | Cameras | ₹2,299 | ⭐ 4.6 | ✅ |

You can create an array:

```jsx
const products = [
  {
    name: "Mechanical Keyboard",
    category: "Accessories",
    price: 2499,
    rating: 4.5,
    inStock: true
  },

  // more products...
];
```

Then use `.map()` to create the cards.

### Important

Do **not** create six separate components like:

```jsx
<Keyboard />
<Mouse />
<Headset />
```

Instead, create **one reusable `ProductCard`**:

```jsx
<ProductCard ... />
```

and pass different props for every product.

---

# 4️⃣ Footer Component

Create a reusable `Footer` component.

Example:

```jsx
<Footer
  company="TechCart"
  year={2026}
  message="Built for modern tech lovers"
/>
```

Display something similar to:

```text
© 2026 TechCart
Built for modern tech lovers
```

### Props

| Prop | Example |
|---|---|
| `company` | `"TechCart"` |
| `year` | `2026` |
| `message` | `"Built for modern tech lovers"` |

---

# 🎨 CSS Requirements

Keep the CSS **very basic**.

You only need:

- Header styling
- Product grid
- Product card border
- Image sizing
- Basic spacing
- Price styling
- Stock status styling
- Footer styling

Don't spend most of your time making the project beautiful.

The goal is **React practice**, not CSS practice.

---

# 🚫 Restrictions

For this project, **do NOT use**:

```text
❌ useState
❌ useEffect
❌ useContext
❌ useReducer
❌ useRef
❌ React Router
❌ Redux
❌ API calls
❌ fetch()
❌ Axios
❌ Backend
❌ Database
```

You should be able to complete the entire project using:

```text
✅ Components
✅ Props
✅ JSX
✅ JavaScript arrays
✅ .map()
✅ Conditional rendering
✅ Basic CSS
```

---

# 🧠 What You Should Learn

By the end of this project, you should understand:

### Parent → Child

```text
        DATA
         │
         ↓
      PARENT
         │
       PROPS
         │
         ↓
       CHILD
         │
         ↓
        UI
```

For example:

```jsx
<ProductCard
  name="Gaming Mouse"
  price={1299}
  rating={4.5}
/>
```

Inside `ProductCard`:

```jsx
function ProductCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>₹{props.price}</p>
      <p>⭐ {props.rating}</p>
    </div>
  );
}
```

---

# ⭐ Bonus Challenge

After completing the basic version, try to make `ProductCard` completely reusable.

Changing:

```jsx
<ProductCard
  name="Mechanical Keyboard"
  price={2499}
  rating={4.5}
  inStock={true}
/>
```

to:

```jsx
<ProductCard
  name="Gaming Monitor"
  price={15999}
  rating={4.8}
  inStock={false}
/>
```

should automatically produce a different card **without changing the `ProductCard` component itself**.

---

# ✅ Completion Checklist

Before considering the task complete:

- [ ] Created `Header` component
- [ ] Created `ProductList` component
- [ ] Created reusable `ProductCard` component
- [ ] Created `Footer` component
- [ ] Used props in all reusable components
- [ ] Passed product data through props
- [ ] Used `.map()` for products
- [ ] Used conditional rendering for stock
- [ ] Added at least 6 products
- [ ] Did not use hooks
- [ ] Did not use APIs
- [ ] Kept CSS simple
- [ ] Can explain how data flows from parent → child

---

# 🚀 Main Objective

Don't try to make this production-ready.

The entire exercise is about getting comfortable with this idea:

```text
DATA
  ↓
PARENT COMPONENT
  ↓
PROPS
  ↓
CHILD COMPONENT
  ↓
UI
```

**Build it yourself without following a tutorial.**

Once you've finished, review your code and make sure you can explain:

1. Why `ProductCard` is reusable.
2. Which data is being passed through props.
3. Where the product data lives.
4. How `.map()` creates multiple `ProductCard` components.
5. How `inStock` controls the stock message.
6. How data flows from the parent component to the child component.