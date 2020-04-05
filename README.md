# desk-jockey

## Description
Desk Jockey is a full CRUD application with a React frontend and a Rails backend. Users sign in and create beat samples based on 6 unique sounds and a loop of 16 syncapations. The theme is sounds you would find in a workplace, such as a stapler, or a pencil tapping a desk. Users have will have the oppurtunity to work from a blank slate and toggle which sounds they want to play at each beat, and then save and return to their own samples.

## MVP
1. User Authentication
2. a working Player component that plays, loops, and stops.
3. a set 6X16 table of node components that toggle on and off to create a sample.
4. Users able to create, and update their own samples to the database.
5. responsive design including a burger menu for mobile devices

## Post MVP
1. users able to choose BPM (beats per minute)
2. custom samples each user has access to
3. pause function on Player
4. user can choose their sound rows
5. user can choose their time signature

## WireFrames

#### Web Main Page
![Webpage](https://imgur.com/2PIZ6o2) 

#### Web Sign In/Up

#### Mobile Main Page

#### Tablet Main Page

## Server Side Routes
1. Create User  POST (`users`)
2. Find User by Id GET (`users/:id`)
3. Update User PUT (`users/:id`)
4. Destroy User DELETE (`users/:id`)
5. Find all User Samples GET (`users/:id/samples`)
6. Find User Sample by Id GET (`users/:id/samples/:sampleid`)
7. Create  User Sample POST (`users/:id/samples`)
8. Update User Sample PUT (`users/:id/samples/:sampleid`)
8. Destroy User Sample DELETE (`users/:id/samples/:sampleid`)
9. Find all Sounds GET (`sounds`)
10. Find Sound by Id GET (`sounds/:id`)

## Technologies Used
1. React
2. Ruby on Rails
3. PostgreSQL
4. Heroku/Surge on Deployment

## Challenges
the biggest challenges I expect to face are working with music files and creating a player. I have never done either of these things at all so it will have to all be through research that I teach myself. On top of this, the idea of a BeatMaker is that have certain sounds play together perfectly each beat so I will have to figure out how to make sure each file is loaded and plays exactly when it is supposed to.



## Timeline
| Component |  Estimated Time | Actual Time |
| --- | :---: | :---: | 
| Backend routes and seed data | 8 hrs| ?|
| Create User/sign in | 4 hrs| ?|
| Player that plays, loops, stops | 8hrs| ?| 
| Song nodes play at intervals | 8 hrs| ?|
| User create/update Sample | 4 hrs| ?|
| Design/CSS | 12 hrs| ?|
| Total | 48 hrs| ?|





