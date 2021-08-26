from flask import Flask

app = Flask(__name__)

@app.route("/_api/approval-flow")
def build_approval_flow():
    return "Hello world"