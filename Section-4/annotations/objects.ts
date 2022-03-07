const profile = {
    name: "knight",
    age: 30,
    coords: {
        lat: 0,
        lng: 12,
    },
    setAge(age: number): void {
        this.age = age;
    },
};

// ignore error on name
// first desctucture : annotation
const { age, name }: { age: number; name: string } = profile;

console.log(name); // name

const {
    coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;

console.log(lat);
console.log(lng);
