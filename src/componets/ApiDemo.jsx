import React, { useEffect, useState } from 'react';
import axios from 'axios';
//import { AirlineSeatReclineExtraOutlined, AspectRatioSharp } from '@material-ui/icons';

const APIDemo = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos").then(
            response => setData(response.data))
    }, [])



    const filterid = data.filter(info => info.id > 100)
    console.log(filterid);
    return (<div>
        {filterid.map(items => <li key={items.id}>{items.title} </li>)}
    </div>
    )
}

export default APIDemo;


/*
const APIDemo = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos").then(
            response => setData(response.data)
        )
    }, [])

    return (
        <div>
            {data.map(item => <li key={item.id}>{item.title}</li>)}
        </div>
    )
}*/
