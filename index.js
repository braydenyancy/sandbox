exports.helloSandbox = (req, res) => {
    res.set('Access-Control-Allow-Origin', '*'); // for web/mobile
    res.json({ message: 'Dvoid', status: 'ok' });
  };