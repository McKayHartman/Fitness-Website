import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import "./calendarPage.css"
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';


export default function CalendarPage() {
    return (
        <>
            <FullCalendar 
            plugins={[dayGridPlugin]} 
            initialView="dayGridMonth" 
            height="auto"
            aspectRatio={1}/>
            <div className="gridContainer">
                <AddGoal id="addGoal"/>
                <StreakGraph className="gridItem"/>
            </div>
            
        </>
        
    );
}

function AddGoal() {
    return (
        <div className="addGoalReturn">
            <h2>Edit Goal</h2>

            <label htmlFor="startDate" className="title">Start Date</label>
            <input name="startDate" type="date" className="inputDate"/>

            <label htmlFor="endDate" className="title">End Date</label>
            <input name="endDate" type="date" className="inputDate"/>

            <label htmlFor="frequency">Goal Frequency</label>
            <select name="frequency" className="inputDate">
                <option value="weekly">Weekly</option>
                <option value="biweekly">Biweekly</option>
                <option value="monthly">Monthly</option>
            </select>
                
            <label htmlFor="numberWorkouts">Goal number of workouts</label>
            <select name="numberWorkouts" className="inputDate">
                {Array.from({ length: 9}, (_, i) => (
                    <option key={i + 1} value={i + 1}>
                        { i + 1 }
                    </option>
                ))}
            </select>

            <button id="submitButton">Submit</button>
                
        </div>
    );
}

function StreakGraph() {
    // define test values
    const data = [
        { name: "Completed", value: 75 },
        { name: "Remaining", value: 25 },
      ];

    // define messages
    let streak = "Day Streak!";
    let remaining = "Days to go!";
    
    const COLORS = ["#c28aff", "#f9f9f9"];
          
    return (
        <div className="flexSource">
            <div className="flexItem">
                <h2>Progress</h2>
                <PieChart width={300} height={300}>
                    <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </div>
            
            <div className="flexItem textField">
                {Array.from({ length: data.length }, (_, i) => (
                    <p key={ i }>
                        { data[i].value } { data[i].name == "Completed" ? streak : remaining }
                    </p>
                ))}
            </div>
        </div>
    )
}