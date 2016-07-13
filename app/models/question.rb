class Question < ActiveRecord::Base
  # Remember to create a migration!
  has_many :options
end
