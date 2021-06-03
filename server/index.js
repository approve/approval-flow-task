const express = require('express');
const { buildApprovalFlow } = require('./approval-flow');

const app = express();
const port = 3001;

app.get('/_api/approval-flow', buildApprovalFlow)

app.listen(port, () => {
    console.log(`app listening on http://localhost:${port}`)
})