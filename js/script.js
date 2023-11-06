class User {
  constructor(firstname, lastName, age, location) {
    this.firstname = firstname;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
  static compareAge(userA, userB) {
    if (userA.age > userB.age) {
      console.log("il primo è più grande del secondo");
    } else {
      console.log("il secondo è più grande del primo");
    }
  }
  isSameAge(userCompare) {
    if (this.age > userCompare.age) {
      console.log("il primo è più grande del secondo");
    } else {
      console.log("il secondo è più grande del primo");
    }
  }
}
const users = [
  new User("Mario", "Rossi", 15, "Verona"),
  new User("Luca", "Verdi", 25, "Milano"),
  new User("Marta", "Neri", 16, "Venezia"),
  new User("Giulia", "Blu", 19, "Roma")
];

User.compareAge(users[1], users[0]);
users[0].isSameAge(users[2]);

//
//
//
//

class Pet {
  constructor(patName, ownerName, specieas, breed) {
    this.patName = patName;
    this.ownerName = ownerName;
    this.specieas = specieas;
    this.breed = breed;
  }
  static sameOwner(petA, petB) {
    if (petA.ownerName === petB.ownerName) {
      console.log("I due animali hanno lo stesso proprietario.");
    } else {
      console.log("I due animali hanno proprietari differneti.");
    }
  }
}

const pets = [];
const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let petName = document.getElementById("pet-name").value;
  let ownerName = document.getElementById("owner-name").value;
  let specieas = document.getElementById("species").value;
  let breed = document.getElementById("breed").value;

  pets.push(new Pet(petName, ownerName, specieas, breed));

  document.getElementById("pet-name").value = "";
  document.getElementById("owner-name").value = "";
  document.getElementById("species").value = "";
  document.getElementById("breed").value = "";

  console.log(pets);
});
