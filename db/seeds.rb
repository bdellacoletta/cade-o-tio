# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

bino = User.create!(
  first_name: 'Bino',
  last_name: 'da Silva',
  home_address:"Rua Fradique Coutinho São Paulo - São Paulo, 05416, Brasil",
  school_address: 'Rua Jericó 193, São Paulo - São Paulo, 05435, Brasil',
  car_model: "Ducato",
  car_plate: "EPC8893",
  car_color: "Blue",
  email: 'bino@teste.com',
  password: '123123',
  latitude_home: -23.55746480559857,
  longitude_home: -46.69019615879404,
  latitude_school: -23.551674517446198,
  longitude_school: -46.68933490112346
)
puts "user created"

Itinerary.create!(
  user_id: bino
)
puts "itinerary created"

Student.create!(
  child_name: 'Narizinho',
  child_address: 'Rua Purpurina São Paulo - São Paulo, 05435, Brasil',
  sequence: 2,
  parents_name: 'Lucas',
  parents_email: 'lucas@teste.com',
  itinerary_id: 1,
  latitude_child: -23.55351375011551,
  longitude_child: -46.69098063365381
)

Student.create!(
  child_name: 'Joãozinho',
  child_address: 'Rua Fidalga São Paulo - São Paulo, 05432, Brasil',
  sequence: 1,
  parents_name: 'Caio',
  parents_email: 'caio@teste.com',
  itinerary_id: 1,
  latitude_child: -23.55549550948403,
  longitude_child: -46.690309145300176
)
