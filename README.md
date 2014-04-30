# Vauxhall

> Vauxhall is a WordPress project scaffolding workflow created and used by Sharp Machine.

Vauxhall will always grab the latest WordPress and plugins.

### Dependencies

- [Vagrant](http://vagrantup.com)
- [Node.js](http://nodejs.org)
- [Grunt](http://gruntjs.com) - run `npm install -g grunt-cli`
- [Yeoman](http://yeoman.io/) - run `npm install -g yo`
- [YeoPress](https://github.com/wesleytodd/YeoPress) - run `npm install -g yo generator-wordpress`

## Features

- Vagrant
- Grunt DB Deployments
- WordPress plugin fetching
- WordPress Scaffolding by Yeoman
- Capastrano deployments: coming soon

## Steps:

1. Download Vauxhall
2. Unzip and rename to project name
3. Edit Gruntfile.js deployment setting and shell settings
4. If you need to, edit your config.yaml file, lines 76 & 78
5. Install and start your server by running `vagrant up`
6. Install WordPress by running `yo wordpress` (must have yeoman installed first)
7. Install Grunt by running `npm install` (must have NPM installed first)(NPM require Node.js be installed)
8. Fetch your plugins by running `grunt shell`

### Yeopress default settings

Here:

## Troubleshooting

### Vhosts servername (default sharpmachine.dev) not working

You simply need to edit your host file on your computer.  Here's how:

## That's it!

#### Coming Soon

- Capastrano deployments
- Preconfigured .yeopress file for faster setup