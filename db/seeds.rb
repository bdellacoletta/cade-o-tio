# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!(
  first_name: 'Bruno',
  last_name: 'dos Santos',
  home_address: 'R. João Moura – Pinheiros, São Paulo',
  school_address: 'Rua Jerico, 193 - São Paulo',
  car_model: 'Ducato',
  car_plate: 'BGZ3055',
  car_color: 'branco',
  email: 'bruno@teste.com',
  password: 'bruno123',
  latitude_home: -23.558507103834526,
  longitude_home: -46.67898633245983,
  latitude_school: -23.55162534181393,
  longitude_school: -46.68939927413561
)

Student.create!(
  child_name: 'Luisa',
  child_address: 'Rua Alves Guimarães, Pinheiros - São Paulo',
  position: 1,
  parents_name: 'Gina',
  parents_email: 'gina@teste.com',
  itinerary_id: 1,
  latitude_child: -23.555640193166862,
  longitude_child: -46.678308087498024
)

Student.create!(
  child_name: 'Joãozinho',
  child_address: 'Rua Montezuma, Jardim das Bandeiras',
  position: 2,
  parents_name: 'Carol',
  parents_email: 'carol@teste.com',
  itinerary_id: 1,
  latitude_child: -23.552014492500938,
  longitude_child: -46.68310539905946
)

# Itinerary.create
#   current_sequence: 2,
#   user_id: User.all.ids.sample
# )


Student.create!(
  child_name: 'Narizinho',
  child_address: 'Rua Gabriel de Brito, Pinheiros - São Paulo',
  position: 3,
  parents_name: 'Lucas',
  parents_email: 'lucas@teste.com',
  itinerary_id: 1,
  latitude_child: -23.550784727962498,
  longitude_child: -46.68281507663113
)

Student.create!(
  child_name: 'Kiko',
  child_address: 'Rua João Moura, Pinheiros - São Paulo',
  position: 4,
  parents_name: 'Carlos',
  parents_email: 'carlos@teste.com',
  itinerary_id: 1,
  latitude_child: -23.550103179004772,
  longitude_child: -46.686551485405694
)

Student.create!(
  child_name: 'Malu',
  child_address: 'Rua Girassol, Vila Madalena - São Paulo',
  position: 5,
  parents_name: 'Jorge',
  parents_email: 'jorge@teste.com',
  itinerary_id: 1,
  latitude_child: -23.552475874859844,
  longitude_child: -46.691296554989606
)

Student.create!(
  child_name: 'Guilherme',
  child_address: 'Rua Purpurina, Vila Madalena - São Paulo',
  position: 6,
  parents_name: 'Beth',
  parents_email: 'beth@teste.com',
  itinerary_id: 1,
  latitude_child: -23.5525082,
  longitude_child: -46.6888568
)
