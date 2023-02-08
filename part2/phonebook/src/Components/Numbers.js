const Numbers = ({numbers}) => {
// console.log(numbers)

    return(
        numbers.map(number => <li key= {number.id}> {number.name} {number.number}</li>)
    )
}

export default Numbers