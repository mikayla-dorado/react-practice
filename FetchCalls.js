
//gets dogs
export const getDogs = () => {
    return fetch('http://localhost:8088/dogs').then((res) => res.json()
    )
}

//gets dogs by id
export const getDogsById = (id) => {
    return fetch(`http://localhost:8088/dogs/${id}`).then((res) => res.json()
    )
}

//post a new dog
export const createNewDog = (dogs) => {
    return fetch('http://localhost:8088/dogs', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dogs)
    })
}

//delete a dog
export const deleteDog = (dog) => {
    return fetch(`http://localhost:8088/dogs/${dog.id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dog)
    })
}

//edit dog
export const editDog = (dog) => {
    return fetch(`http://localhost:8088/dogs/${dog.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dog)
    })
}