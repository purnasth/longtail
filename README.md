# Longtail.info

Longtail.info is a modern, fast, and responsive website built for Longtail e-Media. It is built using React, Vite, and TailwindCSS. The website is designed to be user-friendly and easy to navigate. It includes features like a modern UI design, donate us, and more.

---

## 🚀 Features

- **Modern UI Design**:
- **About & History**:
- **Services**:
- **Portfolio**:
- **Career**:
- **Contact Us**:
- **Client Testimonials**:
- **Quotation**:

---

## 🛠️ Technologies Used

- **React**: Frontend library
- **Vite**: Fast build tool
- **TypeScript**: For static typing
- **TailwindCSS**: Utility-first CSS framework
- **Axios**: Promise-based HTTP client
- **React Router DOM**: Declarative routing for React
- **TanStack/react-query**: Data fetching and caching library
- **Lightgallery**: Full-featured JavaScript lightbox gallery
- **Swiper**: Modern touch slider
- **Lenis Smooth Scroll**: Smooth scrolling library

---

## 🎨 Pnpm Setup codes

```bash
pnpm i axios @tanstack/react-query react-router-dom lightgallery react-icons swiper lenis
---

## 📁 Project Structure

### **src/**

| Folder            | Description                                      |
|--------------------|--------------------------------------------------|
| `components/`     | Contains reusable React components               |
| `hooks/`          | Custom React hooks                               |
| `pages/`          | Page-level components                            |
| `styles/`         | Global CSS and TailwindCSS configurations         |
| `utils/`          | Utility functions and API calls                  |
| `types/`          | TypeScript type definitions                      |

---

## ⚙️ Setup and Installation

1. Clone the repository:
   ```bash
   git clone 
    ```

2. Install dependencies:
    ```bash
    pnpm install
    ```
3. Create an `.env` file: 
    ```bash
    VITE_API_URL=https://api.com # Your API URL
    VITE_RECAPTCHA_SITE_KEY=6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI # Your reCAPTCHA site key
    ```
4. Start the development server:
    ```bash
    pnpm run dev
    ```

---

## API Endpoints and Usage

---


## 📂 File Structure

``` plaintext
📂 longtail
├── 📂 public
│   ├── favicon.ico
│   ├── robots.txt
│   └── index.html
├── 📂 src
│   ├── 📂 components
│   │   ├── 📂 ui
│   │   └── [Other Components]
|   ├── 📂 components
│   │   ├── 📂 ui
│   │   └── [Other Components]
|   ├── 📂 constants
│   │   └── data.ts
|   ├── 📂 layouts
│   │   └── [Layout Components]
│   ├── 📂 hooks
│   │   └── useCustomHook.tsx
│   ├── 📂 pages
│   │   ├── Home.tsx
│   │   └── About.tsx
│   ├── 📂 utils
│   │   ├── api.tsx
│   ├── App.tsx
│   ├── global.d.ts
│   ├── main.tsx
│   ├── vite-env.d.ts
│   └── index.css
├── .env
├── .gitignore
├── .prettierignore
├── .prettierrc
├── eslintrc.config.js
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## Available Scripts
- `dev`: vite
- `build`: vite build
- `preview`: vite preview

---

## 📝 Frontend Documentation

### 1. For Deployment on Cloudflare:
``` plaintext
1. Go to the Cloudflare dashboard.
2. Select the website you want to deploy.
3. Go to the `Workers & Pages` tab.
4. Connect your GitHub repository.
5. Select the branch you want to deploy.
6. Click on the `Deploy` button.
    - use the following command: `pnpm run build`
    - use the following directory: `dist`
```

### 2. For Deployment on Longtail cpanel server:

```bash
pnpm run build
```
and then upload the build folder to the server on the root directory.

`NOTE:` Add these files for no production error:

- Create a `.htaccess` file in the root directory of the project and add the following code:
```
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```
`NOTE:` This code will redirect all the requests to the index.html file which prevents the 404 error after user navigates to the different pages and refreshes the page.

#### [Optional]: Only if the folder has /folder-name in the URL then add the following code:

`.htaccess`
```
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /folder-name/
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /folder-name/index.html [L]
</IfModule>
```

`vite.config.js`
```jsx
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/folder-name/',
})
```

`App.tsx`
```jsx
import { BrowserRouter as Router } from 'react-router-dom';

<Router basename="/folder-name">
  <App />
</Router>
```

---

## Team Members

- **[Purna Shrestha](https://www.purnashrestha.com.np)** - _Frontend Developer_ - _UI/UX Designer_
- **[Swarna Shakya](https://www.swarnashakya.com.np)** - _Backend Developer_
- **[Sunita Shakya](#)** - _Team Lead_
- **[Bijan Bajracharya](#)** - _Project Lead_

---

## License

All designs, code, and assets used in this project are the property of `Longtail e-Media`. Unauthorized use, reproduction, or distribution of any designs, code, or assets without the express written permission of the owners is strictly prohibited and is subject to legal action.