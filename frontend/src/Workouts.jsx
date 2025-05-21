import { useImmer } from "use-immer";
import { useState, useRef, useEffect } from "react";
function Workouts() {
    // immer is a library that lets you update objects a lot easier than
    // useState, as it treats them as if they're mutable.
    const [loggedWorkout, setLoggedWorkout] = useImmer({
        exercises: [{}],
    });
    const [exerciseNum, setExerciseNum] = useState(0);

    const typeRef = useRef(null);
    const repsRef = useRef(null);
    const weightRef = useRef(null);
    const notesRef = useRef(null);

    function swapInputs() {
        const exercise = loggedWorkout.exercises[exerciseNum] ?? {};
        typeRef.current.value = exercise.type ?? "";
        repsRef.current.value = exercise.reps ?? "";
        weightRef.current.value = exercise.weight ?? "";
        notesRef.current.value = exercise.weight ?? "";
    }

    function handleExerciseChange(e, element, isNumber) {
        setLoggedWorkout((workout) => {
            workout.exercises[exerciseNum][element] = isNumber
                ? Number(e.target.value)
                : e.target.value;
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(loggedWorkout);
    }

    function getCurrentDate() {
        return(`${new Date().getFullYear()}-` + 
               `${String(new Date().getMonth() + 1).padStart(2, "0")}` +
               `-${String(new Date().getDate()).padStart(2, "0")}`)
    }

    useEffect(() => {
        swapInputs();
    }, [exerciseNum]);

    return (
        <form onSubmit={handleSubmit}>
            <h1>Log Workout</h1>
            <input
                type="date"
                defaultValue={getCurrentDate()}
                max={getCurrentDate()}
                id="workoutDate"
            />
            <div className="exercise-picker">
                <button
                    type="button"
                    onClick={() => {
                        setExerciseNum(
                            exerciseNum >= 1 ? exerciseNum - 1 : exerciseNum,
                        );
                    }}
                >
                    -
                </button>
                <p>{exerciseNum + 1}</p>
                <button
                    type="button"
                    onClick={() => {
                        if (exerciseNum + 2 > loggedWorkout.exercises.length) {
                            setLoggedWorkout((workout) => {
                                workout.exercises.push({});
                            });
                        }
                        setExerciseNum(exerciseNum + 1);
                    }}
                >
                    +
                </button>
            </div>
            
            <p>type</p>
            <input
                ref={typeRef}
                onChange={(e) => handleExerciseChange(e, "type")}
            />
            <p>reps</p>
            <input
                ref={repsRef}
                onChange={(e) => handleExerciseChange(e, "reps", true)}
            />
            <p>weight</p>
            <input
                ref={weightRef}
                onChange={(e) => handleExerciseChange(e, "weight", true)}
            />
            <p>notes</p>
            <input
                ref={notesRef}
                onChange={(e) => handleExerciseChange(e, "notes")}
            />
            <button type="submit">Submit</button>
        </form>
    );
}
export default Workouts;
