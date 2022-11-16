import React, { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import styled from 'styled-components'


const Infinite_scroll = () => {
    const [items, setItems] = useState([1,2,3,4]);
    // const [page, setPage] = useState(1);
    // const [loading, setLoading] = useState(false);

    const [ref, inView] = useInView({
        threshold : 0
    });

    const getItems = () => {
        setItems((prev)=>[...prev, "1"])
        console.log("items",items)
    }

    useEffect(() => {
        if(!inView){ return}
        getItems();
    }, [inView])

    const index = 
    items.map((data, idx) => <ComponentItems key={idx} ref={ref}>{data}</ComponentItems>)

    return (
        <div>
            {index}
        </div>
    );
};

export default Infinite_scroll;

const ComponentItems = styled.div`
    width : 100%;
    height : 500px;
    background-color : tomato;
    margin-bottom : 10px;
`