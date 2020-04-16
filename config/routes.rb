Rails.application.routes.draw do
  devise_for :users
  get 'home/index'
  root "home#index"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json} do
    namespace :v1 do  
        resources :dashboard, only: :index
        resources :categories, only: %i[index show]
        resources :search, only: :index
        
    end 
  end
end
