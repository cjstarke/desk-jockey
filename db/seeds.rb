# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Sample.destroy_all
User.destroy_all
FreeSample.destroy_all
User.create!(username:"scoobylarson", password: "123456")
common = User.create!(username:"common", password:"123456")
false_string = "false false false false false false false false false false false false false false false false "
every_other = "false true false true false true false true false true false true false true false true "
Sample.create!(microwave: false_string, stapler: every_other, pentap: every_other, scissors: false_string, spacebar: every_other, mouseclick: false_string, user: common, name: "default 1")
FreeSample.create!(microwave: every_other, stapler: every_other, pentap: every_other, scissors: false_string, spacebar: false_string, mouseclick: false_string, name: "Sample1")
p "#{User.count} users were created"
p "#{Sample.count} samples were created"
p "#{FreeSample.count}  free samples were created"
