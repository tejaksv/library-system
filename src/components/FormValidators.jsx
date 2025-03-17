import React from "react";

const userName = (value) => {
    // Username must be 3-16 characters long and can contain letters, numbers, and underscores
    const pattern = /^[a-zA-Z0-9_]{3,16}$/;
 
    if (pattern.test(value)) {
        return { isValid: true, message: "" };
    } else {
        return { isValid: false, message: "Invalid username: Must be 3-16 characters long and contain only letters, numbers, or underscores." };
    }
}

export default {userName};