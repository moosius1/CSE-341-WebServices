const arthurRoute = (req, res) =>{
    res.send('Arthur Moes');
};

const maxwellRoute = (req, res) =>{
    res.send('Maxwell Moes');
};

module.exports = {
    arthurRoute,
    maxwellRoute
};