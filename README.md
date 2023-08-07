1. Create a new branch from `dev` and push you changes there
2. Create a PR and target the `dev` branch instead of `main`
3. PRs from `feature-branch` to `dev` will be squash merged
4. PRs from `dev` to `main` will be merged as default

---

create a `_redirects` or `netlify.toml` file in root to implement this - https://docs.netlify.com/routing/redirects/redirect-options/#custom-404-page-handling

you can test this locally using `netlify cli`. run `netlify dev`, and it'll start a server on port 8888
