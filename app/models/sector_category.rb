class SectorCategory < ApplicationRecord
  has_many :sectors
  has_many :opportunities, through: :sectors
end
