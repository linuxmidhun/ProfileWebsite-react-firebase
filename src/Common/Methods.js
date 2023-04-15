export const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
};

export const isEmpty = val => {
    if (!val.trim()) { return true; } else { return false; }
};