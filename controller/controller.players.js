const getAll = (req, res) => 
    res.json({msg: "Hello I return all of the players"});

const createOne = (req, res) => {
    const data = req.body;
    console.log(data);

    res.status(404).json({data: req.body })
};

module.exports = {
    getAll,
    createOne,
}