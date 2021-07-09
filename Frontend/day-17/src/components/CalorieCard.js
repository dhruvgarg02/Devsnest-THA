import './CalorieCard.css'

const CalorieCard = ({Title, calories}) => {
    return (
        <div className="calorie-card">
            <h1>{Title}</h1>
            <h2>You have consumed {calories} cal today</h2>
        </div>
    )
}

export default CalorieCard;