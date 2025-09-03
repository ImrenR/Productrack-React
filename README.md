# Electronics Store App

A simple React e-commerce app built with **React 18**, **Vite**, and **SCSS**, displaying products from a static dataset. This project demonstrates component-based architecture, props, and basic styling.

---

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)


---

## Features

- Display a list of products with images, title, and price
- Filter products by category (electronics, jewelry, men's clothing, women's clothing)
- Reusable components: `Header`, `ProductList`, `ProductCard`
- Styled with SCSS modules for modular and scoped CSS

---

## Technologies

- **React 18**
- **Vite** – fast frontend build tool
- **SCSS / CSS Modules** – modular styling
- **JavaScript (ES6+)**

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/ImrenR/Productrack-React.git
cd Productrack-React
npm install
npm run dev
http://localhost:5173
```

---

## Project Structure

```productrak-react/
├── src/
│   ├── components/
│   │   ├── header/
│   │   │   ├── Header.jsx
│   │   │   └── Header.module.scss
│   │   ├── products/
│   │   │   ├── ProductList.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   └── Product.scss
│   ├── helper/
│   │   └── data.js
│   ├── scss/
│   │   ├── _mixins.scss
│   │   ├── _variables.scss
│   │   └── _resets.scss
│   ├── App.jsx
│   ├── main.jsx
│   ├── App.scss
│   └── index.css
├── eslint.config.js
├── vite.config.js
├── package.json
└── README.md
```




