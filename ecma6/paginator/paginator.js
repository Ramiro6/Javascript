const DB = [{
    id: 1,
    name: "Ramiro",
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  {
    id: 2,
    name: "another",
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicingelit."
  },
  {
    id: 3,
    name: "another",
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicingelit."
  },
  {
    id: 4,
    name: "another",
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicingelit."
  },
  {
    id: 5,
    name: "another",
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicingelit."
  },
  {
    id: 6,
    name: "another",
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicingelit."
  },
  {
    id: 7,
    name: "another",
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicingelit."
  },
  {
    id: 8,
    name: "another",
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicingelit."
  },
]


$( document ).ready(()=> {
  let find = () => {
    for( let i of DB) {
      $(".pp").append(`<ul>${i.id}</ul>`)

      console.log(i);
    }
  }


  find()

});
