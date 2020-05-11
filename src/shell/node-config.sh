# Fixing npm permission
# https://stackoverflow.com/questions/47252451/permission-denied-when-installing-npm-modules-in-osx

# Find the path to npm's directory:
npm config get prefix

# Change the owner of npm's directories to the name of the current user (your username):
sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share}