import React, {useState} from 'react'

const FillText = () => {
  //firstName la state hien tai, setFirstName la de update cho initial state firstName
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  //   const [midName, setMidName] = useState('')
  const [name, setName] = useState('')

  const fill = () => {
    //Update a state // setMidName la function trong state, dung de update variable o day la firstName.
    //Eg: Khi submit 1 gia tri "Huy" cho firstName, midName cung se co gia tri la "Huy". Sau khi thay doi gia tri firstName la "Quang", midName van se co gia tri ban dau la "Huy".
    //Submit thi firstName vs midName deu co gia tri nhu nhau.
    // setMidName(firstName)
    // setName(lastName)

    setName(`${lastName} ${firstName}`) // setName(`${}`) : Syntax to keep the in 1 state
  }
  return (
    <div>
      <p>First Name</p>
      <input
        placeholder="Enter text"
        // value : force the input's value to match the state variable
        value={firstName}
        //Eg: nhap vao state firstName la 1 gia tri, string "ab" thi trong state firstName se include values, string "ab"
        onChange={(e) => {
          setFirstName(e.target.value)
        }}
      />
      <p>Last Name</p>
      <input
        placeholder="Enter text"
        value={lastName}
        onChange={(e) => {
          setLastName(e.target.value)
        }}
      />
      <br />
      <button type="submit" onClick={fill}>
        Submit
      </button>
      <p>
        {/* {midName} {name} */}

        {name}
      </p>
    </div>
  )
}

export default FillText
