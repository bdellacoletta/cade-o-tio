Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :itineraries, only: %i[show update] do
    resources :students, only: %i[new create index]
  end
  resources :students, only: %i[edit update destroy show] do
    member do
      patch :move
    end
  end
  patch 'itineraries/:id/update_coordinates', to: 'itineraries#update_coordinates'
  get 'itineraries/:id/fetch_coordinates', to: 'itineraries#fetch_coordinates'
end
