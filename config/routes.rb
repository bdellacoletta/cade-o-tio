Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :itineraries do
    resources :students, only: %i[new create index]
  end
  resources :students, only: %i[edit update destroy]
end
