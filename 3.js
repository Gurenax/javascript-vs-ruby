function displayMovie(movie) {
  const title = movie.title
  const yearReleased = movie.yearReleased
  const stars = movie.stars
  const directors = movie.directors

  console.log(`Title: ${title}`)
  console.log(`Year released: ${yearReleased}`)

  const getFullName = person => {
    return `${person.firstName} ${person.lastName}`
  }

  // If stars is present, display stars
  if( stars ) console.log(`Stars: ${stars.map( star => getFullName(star) ).join(', ')}`)

  // If directors is present, display directors
  if( directors ) console.log(`Directors: ${directors.map( director => getFullName(director) ).join(', ')}`)
}

const forestGump = {
  title: 'Forest Gump',
  yearReleased: 1994,
  stars: [
    {
      firstName: 'Tom',
      lastName: 'Hanks'
    },
    {
      firstName: 'Robin',
      lastName: 'Wright'
    }
  ]
}

const backToTheFuture = {
  title: 'Back to the Future',
  yearReleased: 1985,
  stars: [
    {
      firstName: 'Michael J.',
      lastName: 'Fox'
    },
    {
      firstName: 'Christopher',
      lastName: 'Lloyd'
    }
  ]
}

displayMovie(forestGump)
displayMovie(backToTheFuture)

/*

Challenges:
1. Add another three movies
2. Add a property for director to each movie, and display it
3. Convert people from being strings (`Tom Hanks`) to objects (with e.g. first & last name)

*/

// 3 new movies
// Star Wars Episde 8
const starWarsEpisode8 = {
  title: 'Star Wars Episode 8: The Last Jedi',
  yearReleased: 2017,
  stars: [
    {
      firstName: 'Daisy',
      lastName: 'Ridley'
    },
    {
      firstName: 'John',
      lastName: 'Boyega'
    } 
  ],
  directors: [
    {
      firstName: 'Rian',
      lastName: 'Johnson'
    }
  ]
}

// Justice League
const justiceLeague = {
  title: 'Justice League',
  yearReleased: 2017,
  stars: [
    {
      firstName: 'Gal',
      lastName: 'Gadot'
    },
    {
      firstName: 'Ben',
      lastName: 'Affleck'
    } 
  ],
  directors: [
    {
      firstName: 'Zack',
      lastName: 'Snyder'
    }
  ]
}

// Avengers: Infinity War
const avengersInfinityWar = {
  title: 'Avengers: Infinity War',
  yearReleased: 2018,
  stars: [
    {
      firstName: 'Chris',
      lastName: 'Evans'
    },
    {
      firstName: 'Robert',
      lastName: 'Downey Jr'
    } 
  ],
  directors: [
    {
      firstName: 'Anthony',
      lastName: 'Russo'
    },
    {
      firstName: 'Joe',
      lastName: 'Russo'
    } 
  ]
}

displayMovie(starWarsEpisode8)
displayMovie(justiceLeague)
displayMovie(avengersInfinityWar)