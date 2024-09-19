import React from "react";
import { useParams } from "react-router-dom";

const DetailUser = () => {
    const { id } = useParams();
    return (
        <div>
            <h1>User Detail</h1>
            <p>User ID: {id}</p>
        </div>
    );
};

export default DetailUser;
