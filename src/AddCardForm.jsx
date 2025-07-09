import { useState } from "react"


export const AddCardForm = ({ onSubmit }) => {
    const [formData,setFormData] = useState({
        title: '',
        description: '',
        date: ''
    })

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!formData.title.trim()) return;
        onSubmit(formData);
        setFormData({ title: '', description: '', date: ''})
    }
    return (
        <div>
            <form className="card" onSubmit={handleSubmit}>
                <label>
                    <input 
                        type='text' 
                        name='title' 
                        placeholder="Task"
                        value={formData.title}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <input 
                        type='text' 
                        name='description' 
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <input 
                        type='date' 
                        name='date' 
                        value={formData.date}
                        onChange={handleChange}
                    />
                </label> 
                
                <button className='submit'>Add task</button>
            </form>
        </div>
    )
}