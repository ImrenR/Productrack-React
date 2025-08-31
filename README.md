## Productrack-React

A React + Vite product tracking web application with a modular structure and SCSS styling.
Deployed on GitHub Pages: [View Live](https://imrenr.github.io/productrak-app/)


---

## Features

- Built with React.js and Vite for fast development and optimized - production builds.
- SCSS (Sass) for modular, maintainable styling with variables and mixins.
- CSS Modules for scoped component styles.
- Reusable components: Header, ProductList, ProductCard.
- Dynamic categories and hover effects on product cards.
- Fully production-ready build with vite build and preview with vite preview.

---

## Tech Stack

- React (component-based architecture)
- Vite (fast dev server & optimized builds)
- JavaScript (ES6+)
- SCSS (Sass) for styling
- CSS Modules for scoped component styles
- GitHub Pages for deployment

---

## Folder Structure

```Productrack-React/
├── node_modules/ 
├── public/ 
├── src/ 
│   ├── components/ 
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   └── Header.module.scss
│   │   ├── ProductList/
│   │   │   ├── ProductList.jsx
│   │   │   └── Product.scss
│   │   └── ProductCard/
│   │       └── ProductCard.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── scss/ 
│       ├── variables.scss
│       ├── mixins.scss
│       └── resets.scss
├── package.json 
└── README.md
```


##  Installation & Setup
### Clone the repository

git clone https://github.com/imrenr/productrak-app.git

cd Productrack-React

### Install dependencies

npm install

### Start development server

npm run dev

- Opens app in development mode at http://localhost:5173
 (default Vite port)







