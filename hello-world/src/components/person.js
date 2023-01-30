import React from "react";

function Person({person}){
    return(
        <div>
   <h2>I am {person.name}. I am {person.age} years old and I am Studying {person.course} in Fountain University</h2>

        </div>
    )
}

export default Person