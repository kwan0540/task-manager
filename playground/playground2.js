require('../src/db/mongoose')
const Task = require('../src/models/task')
const User = require('../src/models/user')

// Task.findByIdAndDelete('612110cd6db6641ec1e3e733').then((result) => {
//     console.log(result)
//     return Task.countDocuments({completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })

const updateAgeandCount = async (id, age) => {
    try {
        const user = await User.findByIdAndUpdate(id, { age })
        const count = await User.countDocuments({ age })
        console.log(count)
    } catch (error) {
        console.log(error)
    }
    
}

// updateAgeandCount('61210d4569b7921e441cd7a0', 40)

const deleteandConut = async(id) => {
    try {
        const task = await Task.findByIdAndDelete(id)
        const count = await Task.countDocuments({completed: true})
        console.log(count)
    } catch(error) {
        console.log(error)
    }
}

deleteandConut('612110a93e469b1eb9ab728f')