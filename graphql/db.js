export const people = [
    {
        id: "0",
        name: "Junghwan",
        age: 30,
        gender: "Male"
    },
    {
        id: "1",
        name: "Te1",
        age: 11,
        gender: "Male"
    },
    {
        id: "2",
        name: "Ang",
        age: 50,
        gender: "Female"
    },
    {
        id: "3",
        name: "Hnv",
        age: 28,
        gender: "Male"
    }
];

export const getById = id  => {
    const filteredPeople = people.filter(person => String(id) === person.id);
    return filteredPeople[0];
};