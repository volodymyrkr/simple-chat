# GIT Config
# Add acount config
git config --global user.name "volodymyrkr"
git config --global user.email volodymyr.keavchenko.2000@gmail.com

# SSH creation
# https://help.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
ssh-keygen -t rsa -b 4096 -C "volodymyr.kravchenko.2000@gmail.com"

# volodymyrkr_macmini_rsa
mv volodymyrkr_macmini_rsa.pub ~/.ssh

open ~/.ssh/config
touch ~/.ssh/config

# Add config
# Host *
#  AddKeysToAgent yes
#  UseKeychain yes
#  IdentityFile ~/.ssh/id_rsa

# pbcopy < ~/.ssh/volodymyrkr_macmini_rsa.pub

eval "$(ssh-agent -s)"
ssh-add -l /home/volodymyrkr/.ssh/volodymyrkr_rsa
ssh -vT git@github.com

# GIT add SSH
# https://help.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account