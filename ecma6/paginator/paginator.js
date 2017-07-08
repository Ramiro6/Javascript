const DB = [{
    id: 1,
    name: "Ramiro",
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  {
    id: 2,
    name: "jose",
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicingelit."
  },
  {
    id: 3,
    name: "Pepe",
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicingelit."
  },
  {
    id: 4,
    name: "tomas",
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicingelit."
  },
  {
    id: 5,
    name: "joselo",
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicingelit."
  },
  {
    id: 6,
    name: "another",
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicingelit."
  },
  {
    id: 7,
    name: "nacho",
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicingelit."
  },
  {
    id: 8,
    name: "salmon",
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicingelit."
  },
]


$( document ).ready(()=> {
  let find = () => {
    for( let i of DB) {
      $(".pp").append(`<ul>${i.id}</ul>`)

      if (i.id > 7) {
        $(".buttom").append(`<buttom class="btn btn-primary">
          Next
          </buttom>`)
      }
      console.log(i);
    }
  }


  find()

});
