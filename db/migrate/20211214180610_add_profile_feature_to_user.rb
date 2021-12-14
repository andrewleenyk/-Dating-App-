class AddProfileFeatureToUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :profile_pic, :string
    add_column :users, :bio, :text
    add_column :users, :interests, :text, array: true, default: []
  end
end
