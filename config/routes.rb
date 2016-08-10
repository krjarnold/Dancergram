Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index]
    resource :session, only: [:create, :destroy, :show]
    resources :posts, only: [:index, :create, :show, :update, :destroy]
    resources :follows, only: [:index, :create, :show, :destroy]
  end
  root "static_pages#root"
end
