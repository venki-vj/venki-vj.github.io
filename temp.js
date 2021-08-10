class Thermostat{
    constructor(f){
        this.c=5/9*(f-32),
        this.f=c*9.0/5+32
    }
    get temperature(){
        return this.c
    }
    set temperature(updateTemp){
      this.c=updateTemp;
    }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log(temp)