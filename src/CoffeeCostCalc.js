//? create an app that allows you to calculate the cost of coffee over a week, a month, and a year
//! need the state for a cup of coffee
//! what if someone drinks more than one cup? need state for cups per day

//! need to create the calculation for the cost of coffee for each time period (week, month, year)
//! then multiply the cost per cup by the period of time chosen

//! return an input field so user can change number of cups per day and cost of the coffee
//! display the number for the calculated week, month, and year

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

export default CoffeeCostCalc;