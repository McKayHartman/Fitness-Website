export default function Diary() {
    return (
        <div>
            <form>
                <p>Log Workout</p>
                <p>Date</p>
                <input
                    type="date"
                    value={`${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, "0")}-${String(new Date().getDate()).padStart(2, "0")}`}
                    id="workoutDate"
                />
                <p>Exercises</p>
                <p>1, 2, 3...</p>
                <button />
                <div id="exerciseInput">
                    <p>Type</p>
                    <input type="select" />
                    <p>Weight</p>
                    <input type="text" />
                    <p>Reps</p>
                    <input type="text" />
                </div>
            </form>
        </div>
    );
}
