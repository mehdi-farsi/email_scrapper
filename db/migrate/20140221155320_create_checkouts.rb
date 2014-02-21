class CreateCheckouts < ActiveRecord::Migration
  def change
    create_table :checkouts do |t|
      t.string :name
      t.string :email

      t.timestamps
    end
  end
end
