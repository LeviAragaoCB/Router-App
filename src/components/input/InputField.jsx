import React from 'react'

export const InputField = (props) => {
    return (
        <div>
            <div className="form-control">
                <label htmlFor="floatingInput">{props.label}</label>
                <input type={props.type} className="form-control" id={props.id} placeholder={props.placeholder}
                value={props.value} onChange={props.onChange} />
            </div>
        </div>
    )
}
