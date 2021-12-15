import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux';
import { apiData } from '../../Actions/index';

const useHttp = () => {
    const dispatch = useDispatch()
    const sendRequest = useCallback(async (requestConfig) => {
        console.log("requestConfig", requestConfig)
        try {
            const response = await fetch(requestConfig)
            if (!response.ok) {
                throw new Error('Request failed!');
            }
            const data = await response.json();
            console.log(data.list)
            dispatch(apiData(data.list))
        } catch (err) {
            console.log(err.message)
        }
    }

    )

    return {
        sendRequest
    };


}
export default useHttp;
