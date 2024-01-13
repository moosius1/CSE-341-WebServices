const arthurRoute = (req, res) =>{
    res.send('Arthur Moes');
};

const maxwellRoute = (req, res) =>{
    res.send('Maxwell Moes');
};

const eddyRoute = (req, res) =>{
    res.send('Eddy Moes');
};

module.exports = {
    arthurRoute,
    maxwellRoute,
    eddyRoute
};