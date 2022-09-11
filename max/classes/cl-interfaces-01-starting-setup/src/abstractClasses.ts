/*
abstract method can only be added to abstract class  
*/
abstract class Departmental {
  abstract kutchBhi: string

  constructor(protected readonly id: string, public name: string) {}

  abstract describe(): void
}

// you can't create an instance of an abstract class
class Stores extends Departmental {
  // inherited class must add all the
  // abstract methods and property
  // from parent class
  kutchBhi

  constructor(id: string, name: string, urBtao: string) {
    super(id, name)
    this.kutchBhi = urBtao
  }

  describe() {
    console.log("Yeeehhh")
  }
}

const trial = new Stores("007", "randome store1", "Babu Bhai")
trial.describe()
console.log("trial", trial)
