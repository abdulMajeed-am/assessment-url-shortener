URL Shortener Backend
This is the backend for the URL shortener project, built with Laravel and MySQL. It provides API endpoints for shortening URLs, redirecting short URLs, and retrieving URL history.
Setup

Install dependencies:composer install


Configure .env:cp .env.example .env

Update with MySQL credentials:DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=assessment_db
DB_USERNAME=root
DB_PASSWORD=your_password


Generate application key:php artisan key:generate


Run migrations:php artisan migrate


Start the server:php artisan serve



API Endpoints

POST /api/urls/shorten: Create a short URL.
GET /api/urls/history: Get all shortened URLs.
GET /{shortCode}: Redirect to the original URL.
