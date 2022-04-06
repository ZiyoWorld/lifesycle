import React from "react";

class Note extends React.Component{
    
    componentWillUnmount(){
        console.log("WillUnmount")
    }
    render(){
        return(
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus sequi at numquam et incidunt. Itaque doloribus incidunt eum id est? Consequatur assumenda et natus, omnis nulla sit suscipit perspiciatis quis placeat cupiditate, dolorem ea voluptatem. Minima necessitatibus, recusandae voluptas reiciendis laudantium beatae. Asperiores, tempore sit pariatur ducimus cupiditate aut accusantium adipisci praesentium voluptates id, amet nihil quam sunt officiis labore sapiente iste impedit, deleniti sint nemo quas qui et nulla. Obcaecati debitis iure, illum reprehenderit perferendis, provident, amet pariatur praesentium consectetur ab labore iusto est sit laborum explicabo non iste commodi tenetur ratione. Accusantium odit nobis magnam nostrum? Officia, nulla?
            </p>
        )
    }
}
export default Note