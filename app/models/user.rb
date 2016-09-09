# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  email           :string
#  city            :string
#  motto           :text
#  picture_url     :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  validates :username, :session_token, :password_digest, presence: true,
    uniqueness: true
  validates :password, length: { minimum: 8, allow_nil: true }

  after_initialize :ensure_session_token, :ensure_picture_url

  attr_reader :password

  has_many :restaurants,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: :Restaurant

  has_many :reviews,
    foreign_key: :reviewer_id,
    class_name: :Review

  def ensure_picture_url
    self.picture_url ||= "https://res.cloudinary.com/dguiepgvw/image/upload/v1473401605/cropped_white_profile_noun_468156_cc_lw2b04.png"
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(32)
    self.save
    self.session_token
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    if user && user.is_password?(password)
      return user
    else
      return nil
    end
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(32)
  end
end
