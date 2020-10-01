const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
  try {
    const travis_token = core.getInput('TRAVIS_TOKEN');
    const message = `[![Build Status](https://travis-ci.com/MerchantsBonding/verificator.svg?token=${travis_token}&branch=verificator-runs)](https://travis-ci.com/MerchantsBonding/verificator)`
    const github_token = core.getInput('GITHUB_TOKEN');

    const context = github.context;
    if (context.payload.pull_request == null) {
        core.setFailed('No pull request found.');
        return;
    }
    const pull_request_number = context.payload.pull_request.number;

    const octokit = new github.GitHub(github_token);
    const new_comment = octokit.issues.createComment({
        ...context.repo,
        issue_number: pull_request_number,
        body: message
      });

  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
