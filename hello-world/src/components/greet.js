import React from 'react'

// function Greet() {
//     return <h1>Hello Adeboss</h1>
// }
const Greet = props => {
   const {name, job} = props
return<body><h1>Hello {props.name}</h1>
<h2>I am a {props.job} and I love my job</h2></body>
}
export default Greet