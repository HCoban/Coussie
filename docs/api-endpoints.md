# API Endpoints

## HTML API

### Root
 - `GET /` - loads React web app

## JSON API

### Users
 - `GET /api/users/:userId` (Bonus)
 - `POST /api/users`
 - `PATCH /api/users/:userId`
 - `DELETE /api/usrs/:userId`

### Session
 - `GET /api/session`
 - `POST /api/session`
 - `DELETE /api/session`

### Restaurants
 - `GET /api/restaurants`
 - `POST /api/restaurants`  
 - `GET /api/restaurants/:restaurantId`
 - `PATCH /api/restaurants/:restaurantId`
 - `DELETE /api/restaurants/:restaurantId`

### Categories
 - `GET /api/categories`
 - `POST /api/categories`
 - `GET /api/categories/:categoryId`
 - `POST /api/categories/:categoryId`
 - `DELETE /api/categories/:categoryId`

### Reviews
 - `POST /api/restaurants/:restaurantId/reviews`
 - `DELETE /api/restaurants/:restaurantId/reviews`
