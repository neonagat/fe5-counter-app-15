import {useState} from "react";

function Controller(props) {

    const [value, setValue] = useState('')

    const inputHandler = (event) => {
        setValue(event.target.value);
    }

    const addButtonHandler = () => {
        props.addCounter(value);
        setValue('');
    }

    return (
        <div>
            <button onClick={props.counterReset}>Reset to init</button>
            <button onClick={addButtonHandler}>Add new</button>
            <input type="text" onChange={inputHandler} value={value}/>
            <hr/>
        </div>
    );
}

export default Controller;
