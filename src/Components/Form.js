import { useState } from 'react';

function Form({onFormSubmit}) {

    const initialFormData = {
        name: '',
        race: 'Men',
        gender: '',
        culture: '',
        text: '',
    }

    const [formData, setFormData] = useState(initialFormData);

    const {name, race, culture, gender, text} = formData;

    const handleSubmit = (e) => {
        e.preventDefault();

        const config = {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(formData)
        }

        fetch('http://localhost:4000/characters', config)
        .then(resp => resp.json())
        .then(onFormSubmit)
        .then(setFormData(initialFormData))
    }

    const handleFormChange = (e) => {
        const {name, value} = e.target;
        setFormData((formData) => ({...formData, [name]: value}))
    }

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <input value={name} name='name' type='text' placeholder="Name..." onChange={handleFormChange}/>
                <select value={race} name='race' onChange={handleFormChange}>
                    <option>Men</option>
                    <option>Elves</option>
                    <option>Maiar</option>
                    <option>Dwarves</option>
                    <option>Orcs</option>
                </select>
                <input value={culture} type='text' name='culture' placeholder='Culture...' onChange={handleFormChange}/>
                <input value={gender} name='gender' type='text' placeholder="Gender..." onChange={handleFormChange}/>
                <input value={text} name='text' type='text' placeholder='Description...' onChange={handleFormChange}/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form;