import { createBranch } from '../src/create-branch';
import { readFileSync } from 'fs';
import { context } from '@actions/github';

describe('Create a branch based on the input', () => {
  let githubToken = 'token';
  let branch = 'release-v1';
  let sha = 'ffac537e6cbbf934b08745a378932722df287a53';
  let contextMock = JSON.parse(readFileSync('__tests__/context.json', 'utf8'));
  let githubMock = jest.fn();
  let octokitMock = {
    rest: {
      git: {
        createRef: jest.fn(),
      },
      repos: {
        getBranch: jest.fn(),
      },
    },
  };

  beforeEach(() => {
    jest.resetAllMocks();
    githubMock.mockImplementation(() => octokitMock);
  });

  it('gets a branch', async () => {
    octokitMock.rest.repos.getBranch.mockRejectedValue(new HttpError());
    process.env.GITHUB_REPOSITORY = 'peterjgrainger/test-action-changelog-reminder';
    await createBranch(githubMock, context, githubToken, branch);
    expect(octokitMock.rest.repos.getBranch).toHaveBeenCalledWith({
      repo: 'test-action-changelog-reminder',
      owner: 'peterjgrainger',
      branch,
    });
  });

  it('Creates a new branch if not already there', async () => {
    octokitMock.rest.repos.getBranch.mockRejectedValue(new HttpError());
    await createBranch(githubMock, contextMock, githubToken, branch);
    expect(octokitMock.rest.git.createRef).toHaveBeenCalledWith({
      ref: 'refs/heads/release-v1',
      sha: 'ebb4992dc72451c1c6c99e1cce9d741ec0b5b7d7',
    });
  });

  it('Creates a new branch from a given commit SHA', async () => {
    octokitMock.rest.repos.getBranch.mockRejectedValue(new HttpError());
    await createBranch(githubMock, contextMock, githubToken, branch, sha);
    expect(octokitMock.rest.git.createRef).toHaveBeenCalledWith({
      ref: 'refs/heads/release-v1',
      sha: 'ffac537e6cbbf934b08745a378932722df287a53',
    });
  });

  it('Replaces refs/heads in branch name', async () => {
    octokitMock.rest.repos.getBranch.mockRejectedValue(new HttpError());
    await createBranch(githubMock, contextMock, githubToken, `refs/heads/${branch}`);
    expect(octokitMock.rest.git.createRef).toHaveBeenCalledWith({
      ref: 'refs/heads/release-v1',
      sha: 'ebb4992dc72451c1c6c99e1cce9d741ec0b5b7d7',
    });
  });
});

class HttpError extends Error {
  name = 'HttpError';
  status = 404;
}
