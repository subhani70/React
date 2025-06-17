import React from 'react'

const Switch = () => {
    const day = Number(prompt("Enter a num for knowing the day "))
    let dayName;

    switch (day) {
        case 1:
            dayName = "Sunday";
            break;
        case 2:
            dayName = "Monday";
            break;
        case 3:
            dayName = "Tuesday";
            break;
        case 4:
            dayName = "Wednesday";
            break;
        case 5:
            dayName = "Thursday";
            break;
        case 6:
            dayName = "Friday";
            break;
        case 7:
            dayName = "Saturday";
            break;
        default:
            dayName = "Unknown";
    }

    return (
        <div>
            <h2>Today is {dayName}</h2>
        </div>
    );
}

export default Switch