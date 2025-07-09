import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete, AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

export const TaskCard = ({task, onDelete, onEdit}) => {

    const [isEditing, setIsEditing] = useState(false)
    const [formData, setFormData] = useState({
        title: task.title,
        description: task.description,
        date: task.date?.slice(0, 10)
    })

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    const handleSave = () => {
        onEdit({ ...task, ...formData });
        setIsEditing(false)
    }

    const handleCancel = () => {
        setFormData({
            title: task.title,
            description: task.description,
            date:task.date?.slice(0,10)
        })
        setIsEditing(false)
    }

    return(
        <div className="card">
            <label>
                <input
                    type='text'
                    name='title'
                    value={formData.title}
                    onChange={handleChange}
                    disabled={!isEditing}
                />
            </label>
            <label>
                <input
                    type='text'
                    name='description'
                    value={formData.description}
                    onChange={handleChange}
                    disabled={!isEditing}
                />
            </label>
            <label>
                <input
                    type="date"
                    name='date'
                    value={formData.date}
                    onChange={handleChange}
                    disabled={!isEditing}
                />
            </label>  
            
            <div className="icons-row">
                {isEditing ? (
                    <div>
                        <AiOutlineCheck className="icon" onClick={handleSave} />
                        <AiOutlineClose className="icon" onClick={handleCancel} />
                    </div>
                    ) : (
                    <div>
                        <FiEdit className="icon" onClick={() => setIsEditing(true)} />
                        <AiOutlineDelete className="icon" onClick={() => onDelete(task)} />
                    </div>
                    )
                }
            </div>
        </div>
    )
}