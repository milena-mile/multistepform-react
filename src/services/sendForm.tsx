const saveFormData = (formData: {[key: string]: string | string[]}) => {
    return new Promise((resolve, reject) => {
        try {
            const formDataStr = JSON.stringify(formData);
            setTimeout(() => {
                localStorage.setItem('formData', formDataStr);
                resolve('Form data saved successfully to localStorage');
            }, 1000);
        } catch (error) {
            reject(error);
        }
    });
};

export default saveFormData;