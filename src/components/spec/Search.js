import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { changePathView } from '../../store';

const form = {
    input: ''
}

export const Search = () => {
    const [formValue, setFormValue] = useState(form);
    const { push } = useHistory();

    const handleChange = (e) => {
        e.preventDefault();
        setFormValue({ ...formValue, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        push(formValue.input)
    }

    return (
        <form className='main__search'>
            <label htmlFor='input'>
                <input
                    name='input'
                    type='text'
                    onChange={handleChange}
                    value={formValue.input}
                />
                <button onClick={handleSubmit}>Submit</button>
            </label>
        </form>
    )
}