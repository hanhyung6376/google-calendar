import React, { useState } from 'react';

const useInputs = (initialForm: any) => {
    const [form, setForm] = useState(initialForm);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({ ...(form as object), [name]: value });
    };

    const reset = () => {
        setForm(initialForm);
    };

    return [form, setForm, onChange, reset];
};

export default useInputs;
