class Sorter1 {
  //   collection: number[];

  //   constructor(collection: number[]) {
  //     this.collection = collection;
  //   }

  // using modifier inside of constructor argument
  constructor(public collection: number[]) {}

  // creating a sort method
  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection[j] > this.collection[j + 1]) {
          const leftHand = this.collection[j];
          this.collection[j] = this.collection[j + 1];
          this.collection[j + 1] = leftHand;
        }
      }
    }
  }
}

const sorter1 = new Sorter1([10, 3, -5, 0]);
sorter1.sort();
console.log(sorter1.collection);
