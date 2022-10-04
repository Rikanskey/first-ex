const handler = (req, res) => {
    res.statusCode = 200;
    const requrl = req.url.split('/');
    res.end(JSON.stringify({ result: requrl[3] * requrl[4] }));
};

export default handler;