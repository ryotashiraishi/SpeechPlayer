class CreateSpeeches < ActiveRecord::Migration
  def change
    create_table :speeches do |t|
      t.string :host_url
      t.string :description
      t.text :subtitle_context_array
      t.text :subtitle_time_array

      t.timestamps
    end
  end
end
