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

nomicsci = "false false false false false false false false false true true false false false false false "
nomicsta = "false false false false true false false false false false false false true false false false "
nomicpen = "false false true true false false false false false false false false false true true true "
nomicmous = "false true false true false false false true false true false true false false false false "
nomicspac = "true false false false false false true true false false false false false false false false "

micone = "false false false false false false true false false false true false false false true false "
scione = "false false false false true false false false false false false false true false true false "
staone = "true false false true false true false false true false false true false false false false "
spaone = "true false false true false true false false true false false true false false false false "
mouone = "false false false false true false false false false false false false true false true false "
penone = "false true true true false false true true false false false false false true false true "
tmic = "false false true false false false true false false false true false false false false false "
tsci = "false false false false false false false false false false false false false true true false "
tsta = "false false true false false false true false false false true false false false false false "
tspa = "true false true false true false true false true false true false true false false false "
tmou = "false true false false false true false false false true false false false false false false "
tpen = "false false false true false false false true false false false true false false false false "

Sample.create!(microwave: false_string, stapler: every_other, pentap: every_other, scissors: false_string, spacebar: every_other, mouseclick: false_string, user: common, name: "default 1")
FreeSample.create!(microwave: micone, stapler: staone, pentap: penone, scissors: scione, spacebar: spaone, mouseclick: mouone, name: "Free3")
FreeSample.create!(microwave: false_string, stapler: nomicsta, pentap: nomicpen, scissors: nomicsci, spacebar: nomicspac, mouseclick: nomicmous, name: "Free1")
FreeSample.create!(microwave: tmic, stapler: tsta, pentap: tpen, scissors: tsci, spacebar: tspa, mouseclick: tmou, name: "Free2")
p "#{User.count} users were created"
p "#{Sample.count} samples were created"
p "#{FreeSample.count}  free samples were created"
