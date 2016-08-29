# Redux Structure

## Auth Cycles

### Session API Request Actions

* `signUp`
  0. invoked from `AuthForm` `SignUp` `onClick`
  0. invoked from `Navbar` `SignUp` `onClick`
  0. `POST /api/users` is called.
  0. `receiveCurrentUser` is set as the success callback.
* `logIn`
  0. invoked from `AuthForm` `Login` `onClick`
  0. invoked from `Navbar` `Login` `onClick`
  0. `POST /api/session` is called.
  0. `receiveCurrentUser` is set as the callback.
* `logOut`
  0. invoked from `Navbar` `Logout` `onClick`
  0. `DELETE /api/session` is called.
  0. `removeCurrentUser` is set as the success callback.
* `fetchCurrentUser`
  0. invoked from `App` in `didMount`
  0. `GET /api/session` is called.
  0. `receiveCurrentUser` is set as the success callback.

### Session API Response Actions

* `receiveCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` stores `currentUser` in the application's state.
* `removeCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` removes `currentUser` from the application's state.

## Error Cycles

### Error API Response Actions
* `setErrors`
  0. invoked from API callbacks on error for actions that generate POST requests
  0. the `ErrorReducer` stores the `form` in the application's state; `errors` are mapped to their respective forms
* `removeErrors`
  0. invoked from API callbacks on success for actions that generate POST requests
  0. the `ErrorReducer` removes `errors` for a given `form` in the application's state.

## Restaurant Cycles

### Restaurants API Request Actions

* `createRestaurant`
  0. invoked from new restaurant button `onClick`
  0. `POST /api/restaurants` is called.
  0. `receiveSingleRestaurant` is set as the success callback.

* `fetchSingleRestaurant`
  0. invoked from `RestaurantDetail` `didMount`/`willReceiveProps`
  0. `GET /api/restaurants/:restaurantId` is called.
  0. `receiveSingleRestaurant` is set as the success callback.

* `updateRestaurant`
  0. invoked from edit restaurant button `onSubmit`
  0. `POST /api/restaurants/:restaurantId` is called.
  0. `receiveSingleRestaurant` is set as the success callback.

* `destroyNote`
  0. invoked from delete note button `onClick`
  0. `DELETE /api/restaurants/:restaurantId` is called.
  0. `removeRestaurant` is set as the success callback.

### Restaurants API Response Actions

* `receiveSingleRestaurant`
  0. invoked from an API callback
  0. the `RestaurantReducer` updates `restaurants[id]` in the application's state.

* `removeRestaurant`
  0. invoked from an API callback
  0. the `RestaurantReducer` removes `restaurants[id]` from the application's state.

## Categories Cycles

### Categories API Request Actions

* `fetchAllCategories`
  0. invoked from `CategoeiesIndex` `didMount`/`willReceiveProps`
  0. `GET /api/categories` is called.
  0. `receiveAllCategories` is set as the success callback.

* `createCategory`
  0. invoked from new category button `onClick`
  0. `POST /api/categories` is called.
  0. `receiveSingleCategory` is set as the callback.

* `fetchSingleCategory`
  0. invoked from `CategoryIndex` `onClick`
  0. `GET /api/categories/:id` is called.
  0. `receiveSingleCategory` is set as the success callback.

### Categories API Response Actions

* `receiveAllCategories`
  0. invoked from an API callback.
  0. The `Category` reducer updates `categories` in the application's state.

* `receiveSingleCategory`
  0. invoked from an API callback.
  0. The `Category` reducer updates `categoeis[id]` in the application's state.

## Users Cycles

### Users API Request Actions

* `fetchSingleUser`
  0. invoked from user btton `onClick`
  0. `GET /api/users/:id` is called.
  0. `receiveSingleUser` is set as the success callback.

### Users API Response Actions
  0. invoked from an API callback
  0. The `User` reducer updates `user[id]` in the application state.

## SearchSuggestion Cycles

### SearchSuggestion API Request Actions

* `fetchSearchSuggestions`
  0. invoked from `NavBarSearch` `onChange` when there is text
  0. `GET /api/restaurants` is called with `text` param.
  0. `receiveSearchSuggestions` is set as the success callback.

### SearchSuggestion API Response Actions

* `receiveSearchSuggestions`
  0. invoked from an API callback.
  0. The `SearchSuggestion` reducer updates `suggestions` in the application's state.

* `removeSearchSuggestions`
  0. invoked from `NavBarSearch` `onChange` when empty
  0. The `SearchSuggestion` reducer resets `suggestions` in the application's state.
