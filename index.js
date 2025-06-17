const core = require('@actions/core');
const github = require('@actions/github');
try {
    const myInput = core.getInput('myInput');
    console.log(`Input received: ${myInput}`);
    const timestamp = new Date().toISOString();
    core.setOutput('time', timestamp);
    const payload = JSON.stringify(github.context.payload, undefined, 2);
    console.log(`The event payload: ${payload}`);
} catch (error) {
    core.setFailed(`Action failed with error: ${error}`);
}