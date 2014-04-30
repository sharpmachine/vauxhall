# Vauxhall

Vauxhall is a WordPress project scaffolding workflow created and used by Sharp Machine.

Features
- Vagrant: just run $vagrant up and your server/stack will be running in no time
- Grunt DB Deployments: Migrate your WordPress databases effortless
- Install all your usual plugins with one command: $grunt shell
- WordPress Installation by Yeoman: Just run $wordpress yo in the project directory, and you'll be walked through a quick and painless setup process
- Capastrano deployments: coming soon

Steps:

1. Download Vauxhall
2. Unzip and rename to project name
3. Edit Gruntfile.js deployment setting and shell settings
4. If you need to, edit your config.yaml file, lines 76 & 78
5. Install and start your server by running `$vagrant up`
6. Install WordPress by running `$wordpress yo` (must have yeoman installed first)
7. Install Grunt by running `$npm install` (must have NPM installed first)(NPM require Node.js be installed)
8. Fetch your plugins by running `$grunt shell`

That's it!  