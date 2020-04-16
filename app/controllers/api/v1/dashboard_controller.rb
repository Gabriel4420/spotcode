class Api::V1::DashboardController < ApplicationController
    
    def index 
    end 

    private 

    def load_recent_heard
        @recent_albums = current_user.recently_heards.order('created_at DESC').limit(4).map(&:album)
    end


end
