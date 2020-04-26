json.recent_albums @recent_albums.each do |album|
    json.id album.id
    json.title album.title
    json.artist_name album.artist.name
    json.cover_url url_for(album.cover) 
end

json.recomend_albums @recomend_albums.each do |album|
  json.id album.id
    json.title album.title
    json.artist_name album.artist.name
    json.cover_url url_for(album.cover)
end 