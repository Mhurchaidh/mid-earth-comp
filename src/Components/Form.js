import { useState } from 'react';

function Form({onFormSubmit}) {

    const initialFormData = {
        name: '',
        race: 'Men',
        gender: '',
        image: '',
        imageA: '',
        description: ''
    }

    const [formData, setFormData] = useState(initialFormData);

    const {name, race, gender, image, imageA, description} = formData;

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
                    <option>Orc-kind</option>
                </select>
                <input value={gender} name='gender' type='text' placeholder="Gender..." onChange={handleFormChange}/>
                <input value={image} name='image' type='text' placeholder="Image URL..." onChange={handleFormChange}/>
                <input value={imageA} name='imageA' type='text' placeholder="Action Image..." onChange={handleFormChange}/>
                <input value={description} name='description' type='text' placeholder='Description...' onChange={handleFormChange}/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form;