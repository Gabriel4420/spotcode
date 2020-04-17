class Api::V1::CategoriesController < ApplicationController
    def index
        @categories = Category.all
    end 

    def show
        @category = Category.find(params[:id].to_i+4)
    end 
end
