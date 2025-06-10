import React, { useState } from 'react'

const Demo = () => {
    let [skills, setSkills] = useState(["JavaScript", "React", "NodeJS"]);
    let [user, setUser] = useState({ name: "John", age: 25, ismarried: false });

    console.log(skills);
    console.log(userDetails);

    let { name, age, ismarried } = user;

    return (
        <><hr />
            <h1>Demo</h1>
            {skills.map((e, i) => {
                return <h1 key={i}>{e}</h1>
            })}
            <button onClick={() => { setSkills([...skills, "New Skill"]) }}>Add new Skill</button>
        </>
    )
}

export default Demo
