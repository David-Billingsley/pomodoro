import './header.style.css'
import DayChart from "../dayChart.Componet/dayChart.componet";

const Header = () => {
    const date = new Date().toString()

    const dateconv = (date) => {
        const datestring = new Date(date)
        const dateFormatted = new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit"
        }).format(datestring);

        return dateFormatted
    }

    return (
        <div>
            <div className='headerInfo'>
                <div className='headerGrouping'>
                    <p className='Date'> <u>Date: {dateconv(date)} </u> </p>
                <div className='headerelements'>
                    <ol>Number of Tasks: 6</ol>
                    <ol>Number of Completed Tasks: 2</ol>
                </div>
                <div className='headerelements'>
                    <ol>Time Spent: 50 Minutes</ol>
                    <ol>Time Remaining: 45 Minutes</ol>
                </div>
                    </div>
                <div className='headerelements'>
                    <DayChart className='dayChart'/>
                </div>
            </div>
        </div>
    )
}

export default Header