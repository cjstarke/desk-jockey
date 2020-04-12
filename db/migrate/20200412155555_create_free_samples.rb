class CreateFreeSamples < ActiveRecord::Migration[6.0]
  def change
    create_table :free_samples do |t|
      t.string :name
      t.string :microwave
      t.string :stapler
      t.string :pentap
      t.string :scissors
      t.string :spacebar
      t.string :mouseclick

      t.timestamps
    end
  end
end
