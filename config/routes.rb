Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index] do
      resource :follow, only: [:create,:destroy]
    end
    resource :session, only: [:create, :destroy, :show]
    resources :posts, only: [:index, :create, :show, :update, :destroy]
    # resource :follow, only: [:index, :create, :show, :destroy]
    # delete "/follows", to: "follows#destroy"
  end
  root "static_pages#root"
end
