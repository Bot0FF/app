import React from "react";

export const Textarea = ({input, meta, ...props}) => {
    return(
        <div>
            <textarea {...input} {...props}/>
        </div>
    );
};