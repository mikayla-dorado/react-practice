//! create an app that allows you to calculate the cost of coffee over a week, a month, and a year

import { useState } from "react"

export const CoffeeCostCalc = () => {
    const [costPerCup, setCostPerCup] = useState(0)
    const [cupsPerDay, setCupsPerDay] = useState(0)

    const calculateCost = (period) => {
        const cupsPerPeriod = period === 'week' ? cupsPerDay * 7 :
                            period === 'month' ? cupsPerDay * 30 :
                            cupsPerDay * 365;

                            return costPerCup * cupsPerPeriod
    }

    return (
        <div>
            <h1>Coffe Cost Calculator</h1>
            <label>
                Cost per cup of coffee:
                <input
                type="number"
                value={costPerCup}
                onChange={(e) => setCostPerCup(e.target.value)}
                />
            </label>
            <label>
                Cups per day:
                <input
                type="number"
                value={cupsPerDay}
                onChange={(e) => setCupsPerDay(e.target.value)}
                />
            </label>
            <p>Weekly cost of coffee: ${calculateCost('week')}</p>
            <p>Monthly cost of coffee: ${calculateCost('month')}</p>
            <p>Yearly cost: ${calculateCost('year')}</p>
        </div>
    )
    //called this in App.js
}

//? need to set state for cost of coffee

//? need to come up with the function to calculate the cost

//? need to return the display


//! i would not have thought of 'cups per day' need to redo this how i would have thought of it.
//! can i use something else other than inputs and labels?