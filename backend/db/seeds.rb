# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require ('faker')
cities = ['Montreal', 'Toronto', 'Quebec City']


Gender.create(name: "Male", description: "")
Gender.create(name: "Female",description: "")
Gender.create(name: "Non-binary", description: "")
genders = Gender.all

40.times do |i|
  User.create(
    email: Faker::Internet.email,
    name: Faker::Name.name,
    password: 'password',
    age: rand(18..40),
    points: rand(0..1000),
    bio: Faker::Hipster.paragraph(sentence_count: 4),
    city: cities.sample,
    gender: Gender.find(rand(1..3)),
    image_url: '',
    is_looking: true
  )

  LookingFor.create(
    user: User.find(i+1),
    gender: genders.sample(rand(1..2))
  )
end