import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import Form from "./Form";
import FilterButton from "./FilterButton";
import { nanoid } from "nanoid";
import styled from 'styled-components';

const Toggler = styled.div`
  color: ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.background};
`;

const DATA = [

];

const FILTER_MAP = {
    All: () => true,
    Active: task => !task.completed,
    Completed: task => task.completed
};
const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {

    function addTask(name) {
        const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
        setTasks([...tasks, newTask]);
    }

    useEffect(() => {
        const data = localStorage.getItem('listOfTasks');
        if (data) {
            setTasks(JSON.parse(data));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('listOfTasks', JSON.stringify(tasks));
    });





    const [tasks, setTasks] = useState(DATA);
    const [filter, setFilter] = useState('All');

    function toggleTaskCompleted(id) {
        const updatedTasks = tasks.map(task => {
            // if this task has the same ID as the edited task
            if (id === task.id) {
                // use object spread to make a new object
                // whose `completed` prop has been inverted
                return { ...task, completed: !task.completed }
            }
            return task;
        });
        setTasks(updatedTasks);
    }

    function deleteTask(id) {
        const remainingTasks = tasks.filter(task => id !== task.id);
        setTasks(remainingTasks);
    }



    function editTask(id, newName) {
        const editedTaskList = tasks.map(task => {
            // if this task has the same ID as the edited task
            if (id === task.id) {
                //
                return { ...task, name: newName }
            }
            return task;
        });
        setTasks(editedTaskList);
    }


    const taskList = tasks
        .filter(task => FILTER_MAP[filter](task))
        .map(task => (
            <Todo
                id={task.id}
                name={task.name}
                completed={task.completed}
                key={task.id}
                toggleTaskCompleted={toggleTaskCompleted}
                deleteTask={deleteTask}
                editTask={editTask}
            />
        ));
    const filterList = FILTER_NAMES.map(name => (
        <FilterButton
            key={name}
            name={name}
            isPressed={name === filter}
            setFilter={setFilter}
        />
    ));

    const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
    const headingText = `${taskList.length} ${tasksNoun} remaining`;

    return (

        <div>
            <Toggler>
                <Form addTask={addTask} />

                <div className="filters btn-group stack-exception">
                    {filterList}
                </div>

                <h2 id="list-heading">{headingText}</h2>
                <ul
                    role="list"
                    className="todo-list stack-large stack-exception"
                    aria-labelledby="list-heading"
                >
                    {taskList}

                </ul>
            </Toggler>
        </div>
    );
}

export default App;
