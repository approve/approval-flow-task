const express = require('express');

const { buildApprovalFlow } = require('./approval-flow-builder');

const app = express();
const port = 3001;

app.get('/', buildApprovalFlow)

app.listen(port, () => {
    console.log(`app listening on http://localhost:${port}`)
})