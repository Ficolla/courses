let { people } = require('../data')

const getPeople = (req, res) => {
    res.status(200).json({success: true, data: people})
}

const createPerson = (req, res) => {
    const { name } = req.body

    if (!name) {
        res.status(400).json({success: false, msg: 'please provide name value'})
    } 

    res.status(200).json({person: name})
}

const createPersonPostman = (req, res) => {
    const { name } = req.body
    const person = {id: people.length + 1, name: name}

    if (!name) {
        res.status(400).json({success: false, msg: 'Please provide name value'})
    }

    res.status(200).json({success: true, data: [...people, person]})
}

const updatePerson = (req, res) => {
    const { id } = req.params
    const { name } = req.body
    const person = people.find((person) => person.id === Number (id))

    if (!person) {
        return res
        .status(400)
        .json({success: false, msg: `no person with id ${id}`})
    }

    const newPeople = people.map((person) => {
        if (person.id === Number.id) {
            person.name = name
        }
    })
}

const deletePerson = (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id))

    if (!person) {
        return res
        .status(400)
        .json({success: false, msg: `no person with id ${id}`})
    }

    const newPeople = people.filter((person) => person.id !== Number(req.params.id))

    return res.status(200).json({success:true, data: newPeople})
}

module.exports = {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
}