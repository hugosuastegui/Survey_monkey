class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.string :description
      t.belongs_to :survey
    end
  end
end
