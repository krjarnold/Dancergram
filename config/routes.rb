Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index] do
      resource :follow, only: [:create,:destroy]
    end
    resource :session, only: [:create, :destroy, :show]
    resources :posts, only: [:index, :create, :show, :update, :destroy] do
      resource :like, only: [:create,:destroy]
    end
  
  end
  root "static_pages#root"
end
