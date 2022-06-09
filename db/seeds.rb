# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(
  first_name: 'Branca',
  last_name: 'Teste',
  home_address: 'Rua Santos',
  school_address: 'Rua Jerico',
  car_model: %w[Transit Master Ducato Kombi].sample,
  car_plate: %w[DPG4556 DZH8423 EZE4996 EPC8893].sample,
  car_color: %w[White Black Red Blue Purple].sample,
  email: 'branca@teste.com',
  password: '123123'
)

User.create(
  first_name: 'Bruno',
  last_name: 'Teste',
  home_address: 'Rua Fernandes',
  school_address: 'Rua Original',
  car_model: %w[Transit Master Ducato Kombi].sample,
  car_plate: %w[DPG4556 DZH8423 EZE4996 EPC8893].sample,
  car_color: %w[White Black Red Blue Purple].sample,
  email: 'bruno@teste.com',
  password: 123_123
)

Itinerary.create(
  current_sequence: 1,
  user_id: User.all.ids.sample
)

Itinerary.create(
  current_sequence: 2,
  user_id: User.all.ids.sample
)

Student.create(
  child_name: 'Joãozinho',
  child_address: 'Rua Apucarana',
  sequence: 1,
  parents_name: 'Carol',
  parents_email: 'carol@teste.com',
  itinerary_id: Itinerary.all.ids.sample
)

Student.create(
  child_name: 'Narizinho',
  child_address: 'Rua Azevedo',
  sequence: 2,
  parents_name: 'Lucas',
  parents_email: 'lucas@teste.com',
  itinerary_id: Itinerary.all.ids.sample
)
