
User.create(username: "guest", password: "password", picture_url: Faker::Avatar.image)

20.times { User.create(username: Faker::Internet.user_name, password: Faker::Internet.password(8), picture_url: Faker::Avatar.image) }

Restaurant.create(name: "McKing's", city: "San Francisco", lat: 37.15, lng: 37.12, category_id: 4, owner_id: 3, address: Faker::Address.street_address)
Restaurant.create(name: "Sagalassos", city: "San Francisco", lat: 37.12, lng: 37.112, category_id: 1, owner_id: 1, address: Faker::Address.street_address)
Restaurant.create(name: "Wok", city: "San Francisco", lat: 37.13, lng: 37.123, category_id: 1, owner_id: 1, address: Faker::Address.street_address)
Restaurant.create(name: "Bahnhof", city: "San Francisco", lat: 37.11, lng: 37.132, category_id: 2, owner_id: 2, address: Faker::Address.street_address)
Restaurant.create(name: "Burger World", city: "San Francisco", lat: 37.01, lng: 37.1112, category_id: 3, owner_id: 5, address: Faker::Address.street_address)
