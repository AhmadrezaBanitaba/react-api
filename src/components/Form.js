import { faDivide } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import styled from 'styled-components';

const H1 = styled.h1`
  color: ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.background};
`;


function Form(props) {
    const [name, setName] = useState('');

    function handleChange(e) {
        setName(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (name !== '') {
            props.addTask(name);
        }
        else { alert('please fill in something ! ') }
        setName("");
    }
    function handleClear(e) {
        localStorage.clear();

    }
    return (
        <div>        <form onSubmit={handleSubmit}>
            <h2 className="label-wrapper">
                <label htmlFor="new-todo-input" className="label__lg">
                    What needs to be done?
      </label>
            </h2>
            <input
                type="text"
                id="new-todo-input"
                className="input input__lg"
                name="text"
                autoComplete="off"
                value={name}
                onChange={handleChange}
            />
            <button type="submit" className="btn btn__primary btn__lg">
                Add
    </button>

        </form>

            <form onSubmit={handleClear}>

                <button type="submit" className="btn btn__primary btn__lg">
                    Clear tasks
        </button>

            </form>

        </div>


    );
}

export default Form;