class User < ApplicationRecord
  has_secure_password
  validates :username, presence: true, uniqueness: true
  validates :password, length: { minimum: 6 }

  has_many :samples

  def frontend_data
    {
      id: id,
      username: username,
      created_at: created_at,
      updated_at: updated_at
    }
  end
end
