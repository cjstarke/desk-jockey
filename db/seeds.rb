# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Sample.destroy_all
User.create!(username:"scoobylarson", password: "123456")
common = User.create!(username:"common", password:"123456")
false_string = "false false false false false false false false false false false false false false false false "

Sample.create!(microwave: false_string, stapler: false_string, pentap: false_string, scissors: false_string, spacebar: false_string, mouseclick: false_string, user: common, name: "default 1")
p "#{User.count} users were created"
p "#{Sample.count} samples were created"