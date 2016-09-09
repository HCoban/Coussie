# Coussie

[coussie.herokuapp.com][link]

[link]: http://coussie.herokuapp.com

## Minimum Viable Product

Coussie is a web application inspired by Yelp built using Ruby on Rails
and React / Redux. By the end of Week 9, this app will, at a minimum,
satisfy the following criteria with smoothing, bug-free navigation,
adequate seed data and sufficient CSS styling:

- [ ] Hosting at Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Restaurant pages
- [ ] Reviews / ratings
- [ ] Google-map integration
- [ ] Auto-complete search
- [ ] Production README

## Design Docs

* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][endpoints]
* [DB schema][schema]
* [Redux Structure][structure]
* [Sample State][state]

[wireframes]: /docs/wireframes/
[components]: /docs/component-hierarchy.md
[endpoints]: /docs/api-endpoints.md
[schema]: /docs/schema.md
[structure]: /docs/redux-structure.md
[state]: /docs/sample-state.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

- [ ] New Rails project
- [ ] `User` model/migration
- [ ] Back end authentication (session/password)
- [ ] `StaticPages` controller and root view
- [ ] Webpack & react/redux modules
- [ ] `APIUtil` to interact with the API
- [ ] Redux cycle for frontend authentication
- [ ] User components
- [ ] Style signup/signin components
- [ ] Seed users
- [ ] Review phase 1

### Phase 2: Restaurants Model, API, and components (2 days)

**Objective:** Restaurants can be created, read, updated and destroyed through
the API.

- [ ] `Restaurant` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for restaurants (`RestaurantsController`)
- [ ] JBuilder views for restaurants
- Restaurant components and respective Redux loops
  - [ ] `RestaurantIndex`
  - [ ] `RestaurantIndexItem`
  - [ ] `RestaurantDetail`
- [ ] Style Restaurant components
- [ ] Seed restaurants

### Phase 3: Users Model, API, and components (1 days)

**Objective:** Users can be created, read, updated and destroyed through
the API.

- [ ] `User` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for user (`UsersController`)
- [ ] JBuilder views for users
- User components and respective Redux loops
  - [ ] `UserIndex`
  - [ ] `UserIndexItem`
- [ ] Style User components
- [ ] Seed users

### Phase 4: Categories (1 day)

**Objective:** Restaurants belong to Categories that can be created, read, edited and destroyed through the API.

- [ ] `Category` model
- [ ] Seed database with a small amount of test data
- [ ] JBuilder views for categories
- [ ] Adding restaurant requires a category
- [ ] Viewing restaurants by category
- [ ] Style category components
- [ ] Seed categories

### Phase 5: Reviews (1 days)

**Objective:** Reviews can be added to Restaurants.

- [ ] `Review` model
- [ ] Fetching reviews for restaurants
- [ ] Adding reviews to restaurants
- [ ] Seed reviews with seed data

### Phase 6: - Infinite scroll for ReviewsIndex (1 day)

**objective:** Add infinite scroll to Reviews

- [ ] Paginate Reviews Index API to send 20 results at a time
- [ ] Append next set of results when user scrolls and is near bottom
- [ ] Style scroll components and transitions
- [ ] Ensure seed data demonstrates infinite scroll

### Bonus Features (TBD)
- [ ] Users have profile pages
- [ ] Restaurants have menus
- [ ] Users can vote menu items
