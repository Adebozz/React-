import React from "react";
import Person from "./person";
function PersonList() {
    const persons = [
        {
            id: 1,
            name: 'Olabode Mariam',
            age: 19,
            course: 'Nursing'

        },
        {
            id: 2,
            name: 'Adeigbe Ademola',
            age: 20,
            course: 'Computer Science'

        },
        {
            id: 3,
            name: 'Balogun Maryam',
            age: 19,
            course: 'Nursing'

        },
        {
            id: 4,
            name: 'Adebayo Olamilekan',
            age: 19,
            course: 'Computer Science'

        }
    ]
    const PersonList =  persons.map(person => (
        <Person key={person.id} person ={person}/>
    ))
    return (
        <div>
            {
               PersonList
            }
        </div>
    )
}

export default PersonList