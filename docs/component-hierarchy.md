## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**Home Container**
 - Home
 - Navbar

**RestaurantContainer**
 - RestaurantHeader
  + RestaurantIndex


**CategoryContainer**
 - CategoryHeader
  + CategoryIndex

**SearchResultsContainer**
 - Search
 - RestaurantIndex

**UserContainer**
 - UserHeader
  + UserIndex
   - ReviewsIndex
    + ReviewsIndexItem

**NewReviewContainer**
 - NewReview

**NewRestaurantContainer**
 - NewRestaurant

**RestaurantIndex**
 - RestaurantIndexItem
  + RestaurantDetail
   * ReviewsIndex
    - ReviewsIndexItem

**Search**

**NewCategory**
 - NewCategory

## Routes

| Path  | Component  |
|-------|------------|
|"/sign-up"|"AuthFormContainer"|
|"/sign-in"|"AuthFormContainer"|
|"/home"|"HomeContainer"|
|"/home/restaurant/:restaurantId"|"RestaurantContainer"|
|"/home/category/:categoryId/"|"CategoryContainer"|
|"home/search-results"|"SearchResultsContainer"|
|"/home/user/:userId"|"UserContainer"|
|"/home/restaurant/restaurantId/new-review"|"NewReviewContainer"|
|"/search"|"Search"|
|"/new-restaurant"|"NewRestaurantContainer"|
|"/new-category"|"NewCategory"|
