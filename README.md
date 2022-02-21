# Create Branch GitHub Action

[![actions-workflow-checkin][actions-workflow-checkin-badge]][actions-workflow-checkin]
[![actions-workflow-testrun][actions-workflow-testrun-badge]][actions-workflow-testrun]
[![release][release-badge]][release]

This action creates a new branch with the same commit reference as the branch it is being ran on, or your chosen reference when specified.

## Inputs

| NAME           | DESCRIPTION                              | TYPE     | REQUIRED | DEFAULT             |
| -------------- | ---------------------------------------- | -------- | -------- | ------------------- |
| `GITHUB_TOKEN` | GitHub Actions Token                     | `string` | `true`   |                     |
| `branch`       | The name of the branch to create.        | `string` | `false`  | `release-candidate` |
| `sha`          | The SHA1 value for the branch reference. | `string` | `false`  |                     |

## Outputs

| NAME      | DESCRIPTION                                                         | TYPE   |
| --------- | ------------------------------------------------------------------- | ------ |
| `created` | Boolean value representing whether or not a new branch was created. | `bool` |

## Example usage

```
uses: dmsi-io/gha-create-branch@main
with:
  GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
  branch: 'release-notes'
```

For a further practical example, see [.github/workflows/test-run.yaml](.github/workflows/test-run.yaml).

<!-- badge links -->

[actions-workflow-checkin]: https://github.com/dmsi-io/gha-create-branch/actions/query?workflow%3APR%20Checks
[actions-workflow-checkin-badge]: https://img.shields.io/github/workflow/status/dmsi-io/gha-create-branch/PR%20Checks?label=PR%20Checks&style=for-the-badge&logo=github
[actions-workflow-testrun]: https://github.com/dmsi-io/gha-create-branch/actions/query?workflow%3APR%20Test%20Run
[actions-workflow-testrun-badge]: https://img.shields.io/github/workflow/status/dmsi-io/gha-create-branch/PR%20Test%20Run?label=PR%20Test%20Run&style=for-the-badge&logo=github
[release]: https://github.com/dmsi-io/gha-create-branch/releases
[release-badge]: https://img.shields.io/github/v/release/dmsi-io/gha-create-branch?style=for-the-badge&logo=github
