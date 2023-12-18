import React from "react";
import buyerSectionImage from "../assets/images/buyer.png"
import PurchasesImage from "../assets/images/purchases.jpg"
import ExpensesImage from "../assets/images/expenses.jpg"
import GoalsImage from "../assets/images/goals.jpg"


export default function BuyersFeatures() {
    return (
        <div className="buyers-card">
            <div className="buyers-features">
                <h2>Unleash the power of smart shopping</h2>
                <ul>
                    <li>
                        <img src={ PurchasesImage } alt="icon" className="features-icon"/>
                        <div className="feature">
                            <h4>Unleash Shopping Zen</h4>
                            <p> Never lose a receipt again. Track all your marketplace buys, past and present, in one secure vault. Planning a splurge? Set budget-saving reminders and conquer shopping lists like a pro.</p>
                        </div>
                    </li>
                    <li>
                        <img src={ ExpensesImage } alt="icon" className="features-icon" />
                        <div className="feature">
                            <h4>Tame Your Financial Jungle</h4>
                            <p>Tame Your Financial Jungle</p>
                        </div>
                    </li>
                    <li>
                        <img src={ GoalsImage } alt="icon" className="features-icon" />
                        <div className="feature">
                            <h4>Crush Your Targets, Not Your Wallet</h4>
                            <p>Set monthly spending limits and conquer them like a warrior. Say goodbye to overspending surprises, hello to financial victory dances!</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="buyers-image">
                <img src={buyerSectionImage} alt="shopping image"/>
            </div>
        </div>
    )
}