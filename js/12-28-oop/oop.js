class CarId {
  constructor(id, model, brand, image) {
    this.id = id;
    this.model = model;
    this.brand = brand;
    this.image = image;
  }
}

fetch("http://localhost:3333/api/cars")
  .then((res) => res.json())
  .then((res) => {
    res.map((car) => {
      console.log(new CarId(car.id, car.model, car.brand, car.image));
    });
  });
