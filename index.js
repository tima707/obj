let car = {
    Model: "Huracan",
    company: "Lamborghini",
    color: "black",
    
}


let info = {
    HorsePower: 639,
    Year: 2023,
    Mileage: "0km",
    Motor: "5.2L",
    Price: 360.000
}

Object.assign(car, {info})

console.log(
    car
)
