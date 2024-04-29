import React from "react";

const Meeting = ({ params }: { params: { id: string } }) => {
    console.log(params);
    return <div>Meeting with id = {params.id} </div>;
};

export default Meeting;
