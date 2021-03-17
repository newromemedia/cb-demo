import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changePathView } from '../../store';

const form = {
    input: ''
}

export const Search = () => {
    const [formValue, setFormValue] = useState(form);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        e.preventDefault();
        setFormValue({ ...formValue, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(changePathView(formValue.input))
    }

    return (
        <div className='main__search__container'>
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
        </div>
    )
}