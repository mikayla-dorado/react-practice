import { useState } from "react"


export const Form = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({
        username: '',
        email: '',
        password: '',
    });
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    />
                    <span>{errors.username}</span>
                </div>
            </form>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    />
                    <span>{errors.email}</span>
                </div>
            </form>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Password:</label>
                    <input
                    type="text"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    />
                    <span>{errors.password}</span>
                </div>
            </form>
            <button type="submit">Submit</button>
        </div>
    )
}

export default Form;