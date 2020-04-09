class CreateSamples < ActiveRecord::Migration[6.0]
  def change
    create_table :samples do |t|
      t.string :microwave
      t.string :stapler
      t.string :pentap
      t.string :scissors
      t.string :spacebar
      t.string :mouseclick
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
