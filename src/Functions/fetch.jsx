import { useEffect, useState } from 'react';
import Client from '../Main Files/sanity';

function textFetch(query) {
    const [data, setData] = useState(null);

    useEffect(() => {
        Client
            .fetch(query)
            .then(data => {
                const textValue = data.map(item => item.textContent);
                setData(textValue);
            })
            .catch(console.error);
    }, []);

    return data;
}


export default textFetch;