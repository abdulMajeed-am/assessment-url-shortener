
# 📌 URL Shortener

This project is a URL shortening service with a web interface, developed for a **PHP Laravel Developer** position assessment.  
It allows users to shorten long URLs, redirect short URLs to their original destinations, and view a history of shortened URLs with click counts.  

The backend is built with **Laravel** and **MySQL**, and the frontend uses **ReactJS** with **Material-UI** for a clean, responsive, and professional user interface.

---

## 🚀 Features
- **URL Shortening**: Converts long URLs into short links (e.g., `http://localhost:8000/abc123`).
- **Redirection**: Redirects short URLs to their original URLs.
- **Click Tracking**: Records the number of clicks for each short URL.
- **History Table**: Displays all shortened URLs with their original URLs, short URLs, click counts, and creation dates.
- **Copy-to-Clipboard**: Allows users to copy short URLs with a single click.
- **Error Handling**: Validates URLs and shows user-friendly error messages via a Snackbar.
- **Responsive UI**: Uses Material-UI for a consistent, visually appealing design across devices.

---

## 📂 Project Structure
```

assessment-url-shortener/
├── backend/              # Laravel backend
│   ├── app/
│   ├── database/
│   ├── routes/
│   └── ...
├── frontend/             # ReactJS frontend
│   ├── src/
│   ├── public/
│   └── ...
└── README.md             # Project documentation

````

---

## 🛠️ Technologies Used
- **Backend:** Laravel (PHP), MySQL  
- **Frontend:** ReactJS, Material-UI, Axios  
- **Tools:** Git, Vite (for React build)  

---

## ⚙️ Setup Instructions

### **Prerequisites**
- PHP >= 8.2
- Composer
- MySQL
- Node.js >= 18
- npm

---

### **1️⃣ Backend Setup (Laravel)**
```bash
cd backend
composer install
cp .env.example .env
````

**Update `.env` with MySQL credentials:**

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=assessment_db
DB_USERNAME=root
DB_PASSWORD=your_password
```

```bash
php artisan key:generate
php artisan migrate
php artisan serve
```

Backend runs at **`http://localhost:8000`**

---

### **2️⃣ Frontend Setup (ReactJS)**

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at **`http://localhost:5173`**

---

## 💻 Usage

1. Open **`http://localhost:5173`** in your browser.
2. Enter a long URL (e.g., `https://www.google.com`) and click **"Shorten URL"**.
3. Copy the generated short URL or click it to be redirected.
4. View the history table for all shortened URLs, click counts, and creation dates.

---

## 🧪 Testing

**Sample URLs:**

```
https://www.google.com
https://www.github.com
https://en.wikipedia.org/wiki/URL_shortening
https://www.youtube.com/watch?v=dQw4w9WgXcQ
https://www.amazon.com
```

**Testing Steps:**

1. Shorten a URL and verify it is displayed in the history.
2. Click the short URL to ensure redirection works.
3. Check that click counts update correctly.
4. Test the **copy-to-clipboard** feature.
5. Try an invalid URL (e.g., `not-a-url`) to verify error handling.

---

## 📡 API Endpoints

### **Create Short URL**

**POST** `/api/urls/shorten`
**Request:**

```json
{ "original_url": "https://www.google.com" }
```

**Response:**

```json
{ "short_url": "http://localhost:8000/abc123" }
```

### **Get All Shortened URLs**

**GET** `/api/urls/history`

### **Redirect Short URL**

**GET** `/{shortCode}` → Redirects to the original URL

---

## 📏 Code Quality

* **Backend:**

  * Laravel coding standards followed.
  * Proper namespaces, `$fillable` attributes, and casts in models.
  * Organized routes with prefixes.
* **Frontend:**

  * Modular React components.
  * Material-UI for consistent UI.
  * Axios for API requests with proper error handling.
* **Maintainability:**

  * Clean, readable code with comments and robust validation.

---

## 📤 Submission Details

* **GitHub Repository:** [https://github.com/abdulMajeed-am/assessment-url-shortener](https://github.com/abdulMajeed-am/assessment-url-shortener)
* **Screen Recording:** [View on Google Drive](https://drive.google.com/file/d/1CYQjCBulqldhK5HmwawuMDsturPmkySV/view?usp=drive_link)

---

## 📝 Notes

* Follows Laravel best practices for models, migrations, controllers, and API routes.
* Material-UI ensures a professional, user-friendly frontend.
* Extra features like **click tracking** and **history table** enhance the experience.

---

```

---

```
