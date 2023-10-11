import { user } from "../../lib/types";


interface FormControlProps {
    handleInput: (event: React.FormEvent<HTMLInputElement>, type: 'basic' | 'socialLinks') => void,
    data: user,
    label: string,
    id: string,
    type?: 'text' | 'email' | 'number',
    regex?: string
}

const FormControl: React.FC<FormControlProps> = ({ handleInput, data, id, type, regex, label }) => {
    return (
        <div className="p-2 w-full">
            <label htmlFor={id}>{label}</label><br />
            <input type={type || "text"} id={id} name={id} onInput={(event) => handleInput(event, 'socialLinks')} className="w-full border rounded mx-auto p-2" pattern={regex} value={data?.socialLinks.youtube} placeholder="Eg:- youtube/username" />
        </div>
    );
}

export default FormControl;