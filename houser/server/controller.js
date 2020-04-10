const getHouses = (req, res) => {
    const db = req.app.get('db')

    db.get_houses().then(result => {
        res.status(200).send(result)
    }).catch(error => {
        console.log(error)
    })
}

const addHouse = (req, res) => {
    const {name, address, city, state, zip} = req.body

    const db = req.app.get('db')
    db.post_house(name, address, city, state, zip).then(result => {
        res.status(200).send(result)
    })
}

const removeHouse = (req, res) => {
    const db = req.app.get('db')
    const{id} = req.params;
    db.remove_house(id).then(product => {
        res.status(200).json(product);
    }).catch(error => {
        console.log(error)
        res.status(500).json('does not work');
    })
};

module.exports = {
    getHouses,
    addHouse,
    removeHouse
}