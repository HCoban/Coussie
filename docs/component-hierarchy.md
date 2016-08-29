Component Hierarchy

Home Container
Home

AuthFormContainer
AuthForm

CategoryContainer
CategoryHeader
CategoryIndex

RestaurantContainer


## Routes

| Path  | Component  |
|-------|------------|
|"/sign-up"|"AuthFormContainer"|
|"/sign-in"|"AuthFormContainer"|
|"home"|"HomeContainer"|
|"home/restaurant/:restaurantId"|"RestaurantContainer"|
|"home/restaurant/:restaurantId/review/reviewId"|"ReviewContainer"|
|"home/user/:userId"|"UserContainer"|
|"new-review"|"NewReviewContainer"|
