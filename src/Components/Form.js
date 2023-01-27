import { useState } from 'react';
import stamp from "../Symbols/stamp.png";

function Form({onFormSubmit}) {

    const initialFormData = {
        id: '',
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

        fetch('http://localhost:3000/characters', config)
        .then(resp => resp.json())
        .then((newChar) => {onFormSubmit(newChar)})
        .then(setFormData(initialFormData))
    }

    const handleFormChange = (e) => {
        const {name, value} = e.target;
        setFormData((formData) => ({...formData, [name]: value}))
    }

    return (
        <div className="form-container">
            <form className='form' onSubmit={handleSubmit}>
                <input className='inputType' id='formName' value={name} name='name' type='text' placeholder="Name..." onChange={handleFormChange}/>
                <select className='inputType' id='formRace' value={race} name='race' onChange={handleFormChange}>
                    <option>Men</option>
                    <option>Elves</option>
                    <option>Maiar</option>
                    <option>Dwarves</option>
                    <option>Orcs</option>
                </select>
                <input className='inputType' id='formCulture' value={culture} type='text' name='culture' placeholder='Culture...' onChange={handleFormChange}/>
                <input className='inputType' id='formGender' value={gender} name='gender' type='text' placeholder="Gender..." onChange={handleFormChange}/>
                <input  className='inputType' id='formText' value={text} name='text' type='text' placeholder='Description...' onChange={handleFormChange}/>
                <input type='image' src={stamp} alt='Wax Stamp' id='formButton'/>
            </form>
        </div>
    )
}

export default Form;