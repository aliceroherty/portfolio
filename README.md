# Alice Roherty-Carrier's Portfolio

## Setup

To setup this repo for development, clone it from GitHub and initialize the submodules.

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
git submodule init
git submodule update
```

Open the `portfolio.code-workspace` file in VS Code.

## Running the Application

The VS Code workspace includes launch configurations for the client, server, and both at once. Select the desired launch configuration from the `Run and Debug` pane and run the application.

- The client will run on <http://localhost:5173>
- The server will run on <http://localhost:5000>
- The Next.js app will run on <http://localhost:3000>

## Managing Submodules

### Pulling

When running `git pull` in the root portfolio folder only this repo's contents will be pulled. The submodule repos will not be pulled. In order to pull changes from all the submodules from the root repo you have a few options.

1. **Pull with submodule recursion**

   `git pull --recurse-submodules`
2. **Configure git to always recurse submodules on pull**

   `git config --global submodule.recurse true`
3. **Create a git alias to allow for both behaviours**

   `git config --global alias.update-all '!git pull && git submodule update --init --recursive'`
    - This alias creates a custom `git update-all` command to pull main repo and submodules or `git pull` to only update the main repo.

### Pushing

When working with submodules, pushing changes requires a two-step process:

1. **Push changes in the submodule first**:

   ```bash
   # Navigate to the submodule directory
   cd portfolio-client

   # Commit and push your changes
   git add .
   git commit -m "Update client features"
   git push

   # Return to the parent repository
   cd ..
   ```

2. **Update and push the main repository**:

   ```bash
   # The main repository tracks which commit of the submodule to use
   # You need to commit this change in the main repository
   git add portfolio-client
   git commit -m "Update portfolio-client submodule reference"
   git push
   ```

#### Pushing All Changes with a Single Command

To update all submodules and push everything at once you have two options:

1. **Create a git alias for pushing all submodules**

    ```bash
    git config --global alias.push-all '!git push && git submodule foreach "git push"'
    ```
2. **Use the following command**

    ```bash
    # For each submodule, add, commit, and push changes
    git submodule foreach 'git add . && git commit -m "Submodule updates" && git push || true'

    # Then update and push the main repository
    git add .
    git commit -m "Update submodule references"
    git push
    ```

**Warning**: Be careful when using automated scripts to push changes. Always review your changes before committing and pushing.
