// firePosition will be the position in which the gun will fire.
let firePosition = 1;

// The output of spinChamber will be a number and it can be passed as a parameter to the fireGun function.
const spinChamber = () => {
    let chamberPosition = Math.floor((Math.random() * 6) + 1);
    console.log(chamberPosition)
    return chamberPosition;
};

// Remove the // below and complete the commented lines
const fireGun = (bulletPosition) => {
    if (firePosition === bulletPosition) {
        console.log("You are dead!")
    } else {
        console.log("Keep playing!")
    }
    // if (... === firePosition) return ("You're dead!");
    // else return ("Keep playing!");
};

console.log(fireGun(spinChamber()));
