const title = 'A Dvoid Concept';

const show = true;

exports.helloWorld = (req, res) => {
    res.set('Access-Control-Allow-Origin', '*'); // for web/mobile
    res.json({ message: 'A Dvoid Concept', status: 'ok' });
  };