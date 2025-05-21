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
    const dateRef = useRef(null);
    const difficultyRef = useRef(null);

    function swapInputs() {
        const exercise = loggedWorkout.exercises[exerciseNum] ?? {};
        typeRef.current.value = exercise.type ?? "";
        repsRef.current.value = exercise.reps ?? "";
        weightRef.current.value = exercise.weight ?? "";
        notesRef.current.value = exercise.weight ?? "";
        difficultyRef.current.value = exercise.difficulty ?? "";
    }

    function handleExerciseChange(e, element, isNumber) {
        setLoggedWorkout((workout) => {
            workout.exercises[exerciseNum][element] = 
                isNumber ? Number(e.target.value) : e.target.value;
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(loggedWorkout);

        
        try {
            const response = await fetch("http://localhost:3000/api/db/createWorkout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Basic ${localStorage.getItem("token")}`
                },
                body: JSON.stringify(loggedWorkout),
            });

            if (response.ok) {
                console.log(await response);
            } else {
                console.error("Workout log failed");
            }
        } catch (error) {
            console.log("log error");
            console.error(error);
        }
    }

    function getCurrentDate() {
        return(`${new Date().getFullYear()}-` + 
               `${String(new Date().getMonth() + 1).padStart(2, "0")}` +
               `-${String(new Date().getDate()).padStart(2, "0")}`)
    }

    // every time exerciseNum is changed, swapInputs is run.
    useEffect(() => {
        swapInputs();
    }, [exerciseNum]);

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <h1>Log Workout</h1>
            <input
                type="date"
                defaultValue={getCurrentDate()}
                max={getCurrentDate()}
                id="workoutDate"
                ref={dateRef}
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
                onChange={(e) => handleExerciseChange(e, "typeID", true)}
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
            <p>difficulty</p>
            <input
                ref={difficultyRef}
                onChange={(e) => handleExerciseChange(e, "difficulty", true)}
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
