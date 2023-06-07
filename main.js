let raceNumber = Math.floor(Math.random() * 1000);
var earlyRegister = false
var runnerAge = '27'

if (runnerAge >= 18 && earlyRegister) 
console.log(`Your race number is ${raceNumber + 1000}`)

if (earlyRegister === true && runnerAge >= 18)
console.log(`Runner ${raceNumber + 1000} registered early and runs at 9:30am`)

else if (earlyRegister === false && runnerAge >= 18)
console.log(`Runner ${raceNumber + 1000} registered late and runs at 11am. May the Force be with you`)

else if (runnerAge < 18)
console.log(`Youth Runners run at 12:30 regardless of registration. Your number is ${raceNumber}. Good luck!`)
