// import React, { Component } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { logger } from './logService';
// toast

// axios
axios.interceptors.response.use(null, error => {
    const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;

    if (!expectedError) {
        logger.log(error);
        toast.error('Sorry. An unexpected error occured!');
    }

    return Promise.reject(error);
});

export default {
    get: axios.get,
};