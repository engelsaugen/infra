Mostly infrastructurea but contains an app too. It's a demo.


If you're looking to reproduce (for some reason):

On a good day, the ansible playbook will install everything needed for the setup to run. It aims to be idemportent in that it doesnt call any special lib that wont be present across different distributions. I hit ansible-galaxy init roles to get some empty ones, so ignore all those (they are empty), but the ones installing tools. If you're fancy and have disposable cloud nodes - use a different host when running the playbook or specify them in the inventory - mine uses local.

Setup itself will assume you have (at least) the monitoring namespace, so hit kubectl create ns monitoring & argocd

I use a ghcr secret - it is referred in multiple manifests. In order to reproduce it, find the creation command manifests/secret.txt. Obviously, use your PAT.

Most of the stuff is insturcted to go into different dirs in /opt

