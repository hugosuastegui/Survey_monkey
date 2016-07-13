class CreateOptions < ActiveRecord::Migration
  def change
    create_table :options do |t|
      t.string :description
      t.belongs_to :question
    end
  end
end
