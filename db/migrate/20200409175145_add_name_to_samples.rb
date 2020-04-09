class AddNameToSamples < ActiveRecord::Migration[6.0]
  def change
    add_column :samples, :name, :string
  end
end
