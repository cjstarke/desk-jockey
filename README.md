# Desk Jockey
[Deployed Site](http://deskjockey.surge.sh)

## Description
Desk Jockey is a full CRUD application with a React frontend and a Ruby on Rails backend. Users sign in and create sample "beats" based on 6 unique sounds and a loop of 16 syncopations. All of the available sounds you would find in your workplace such as a stapler, mouse click or a pencil tapping a desk. Users have the oppurtunity to work from a blank slate and toggle which sounds they want to play at each beat, and then save, update or delete their own samples. There are also 3 free samples available for each user to use as templates.

<!-- ## MVP
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
5. user can choose their time signature -->

## WireFrames

#### Main Page
![Webpage](https://i.imgur.com/2PIZ6o2.png) 
#### Sign In/Up
![Websignin](https://i.imgur.com/T2K09JP.png)

## Component Tree
![ComponentTree](https://i.imgur.com/WCeSDBL.png)

## Database Structure
![Database](https://i.imgur.com/hfcvlpD.png)

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

<!-- ## Challenges
the biggest challenges I expect to face are working with music files and creating a player. I have never done either of these things at all so it will have to all be through research that I teach myself. On top of this, the idea of a BeatMaker is that have certain sounds play together perfectly each beat so I will have to figure out how to make sure each file is loaded and plays exactly when it is supposed to. -->



<!-- ## Timeline
| Component |  Estimated Time | Actual Time |
| --- | :---: | :---: | 
| Backend routes and seed data | 8 hrs| 10hrs|
| Create User/sign in | 4 hrs| 4hrs|
| Player that plays, loops, stops | 8hrs| 6 hrs| 
| Song nodes play at intervals | 8 hrs| 8hrs|
| User create/update Sample | 4 hrs| 10hrs|
| Design/CSS | 12 hrs| 16hrs|
| Total | 48 hrs| 54| -->


## Code

```
  componentDidUpdate = (prevProps) => {
    if (this.props.player !== prevProps.player) {
      if (this.props.toggle) {
        if (this.props.player === "stopped") {
          this.onStop()
        }
        else {
          this.onPlay()
        }
      }
    }
  }
  setSound = () => {
    let sample = this.props.track
    this.sound.src = tracks[sample]
    this.sound.load()
  }
 
  onPlay = () => {
    this.timer = setTimeout(() => {
      this.sound.play()
    }, (this.props.place*200))
  }
  onStop = () => {
    clearTimeout(this.timer)
    this.sound.pause()
    this.sound.currentTime=0
  }
```

This code is in in the Node component. It recieves props from the Songrow, such as the index in the array that the song node sits. on click, it toggles the state the beatmaker function to play or not play that node. when the beatmaker plays, an interval is set to play the node after a time based off of the place. on Stop, the interval is cleared

## Issues and Resolutions
My biggest issue was storing the data for each song row. It need to be an array on the front end, but I wanted to store it as a string in the backend. So I set it all up thinking a simple join/split would work fine, but I had already developed a front end that checked for booleans, and I could not find a way to split a string into boolean values. So for each songrow I had to do a loop function which is a little timely, and I would have done it much differently starting from scratch. I also ran into problems with the design, because beatmaker table is so big (6X16), so I couldn't fit much else on the page. I was able to transfer all of the sample data Into a navbar on the side of the page, but I had to lift some state to pull it off.







