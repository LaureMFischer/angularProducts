AngularProducts::Application.routes.draw do
  get "main/index"
  root "main#index"
  resources :products, only: [:index, :show, :create]
end
