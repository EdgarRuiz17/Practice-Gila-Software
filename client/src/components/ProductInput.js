import React from 'react'

//icons
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

//styled components
import { WrongInput, Input, Label, IconValidation, GroupInput } from '../styles/FormStyles'



const ProductInput = (props) => {

    const handleInput = (e) => {
        if (e.target.name === "screen" || e.target.name === "size" || e.target.name === "CPU" || e.target.name === "RAM" || e.target.name === "material" || e.target.name === "number") {
            props.changeState({ ...props.state, value: e.target.value, name: e.target.name });
        } else {
            props.changeState({ ...props.state, value: e.target.value });
        }
    }

    const validation = () => {
        if (props.regularExpresion) {
            if (props.regularExpresion.test(props.state.value)) {
                props.changeState({ ...props.state, flag: 'true' });
            } else {
                props.changeState({ ...props.state, flag: 'false' });
            }
        }
    }

    return (
        <div className="form-group mx-2 w-50">
            <Label htmlFor={props.name} flag={props.state.flag}>{props.label}</Label>
            <GroupInput>
                <Input
                    type={props.type}
                    name={props.name}
                    id={props.name}
                    placeholder={props.placeholder}
                    value={props.state.value}
                    onChange={handleInput}
                    onBlur={validation}
                    onKeyUp={validation}
                    flag={props.state.flag}
                />
                <IconValidation
                    icon={props.state.flag === 'true' ? faCheckCircle : faTimesCircle}
                    flag={props.state.flag}
                />
            </GroupInput>
            <WrongInput flag={props.state.flag} >{props.error}</WrongInput>
        </div>
    )
}

export default ProductInput