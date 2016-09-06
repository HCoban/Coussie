Rails.application.routes.draw do
  root to: "static_pages#root"
  namespace :api, defaults: { format: :json} do
    resources :users
    resource :session
    resources :restaurants
    resources :categories, only: [:index, :show]
    resources :reviews, only: [:create]
  end
end
