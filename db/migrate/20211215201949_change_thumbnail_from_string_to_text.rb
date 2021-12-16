class ChangeThumbnailFromStringToText < ActiveRecord::Migration[6.1]
  def change
    change_column :posts, :thumbnail, :text
  end
end
