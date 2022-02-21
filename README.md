# Create Branch GitHub Action

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
  branch: 'release-notes'
  GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
