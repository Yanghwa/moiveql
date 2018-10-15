const junghwan = {
    name: "Junghwan",
    age: 30,
    gender: "Male"
}

const resolvers = {
    Query: {
        person: () => junghwan
    }
};

export default resolvers;