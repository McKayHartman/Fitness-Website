import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!

export default function CalendarPage() {
    return (
        <FullCalendar 
        plugins={[dayGridPlugin]} 
        initialView="dayGridMonth" 
        height="auto"
        aspectRatio={1}/>
    );
}
