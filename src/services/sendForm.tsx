const saveFormData = (formData: {[key: string]: string | string[]}) => {
    return new Promise((resolve, reject) => {
        try {
            localStorage.setItem('formData', JSON.stringify(formData));
            resolve('Form data saved successfully to localStorage');
        } catch (error) {
            reject(error);
        }
    });
};

export default saveFormData;