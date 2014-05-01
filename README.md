# Vauxhall

> Vauxhall is a WordPress project scaffolding workflow created and used by Sharp Machine.

Vauxhall will always grab the latest WordPress and plugins.

### Dependencies

- [Vagrant](http://vagrantup.com)
- [Node.js](http://nodejs.org)
- [Grunt](http://gruntjs.com) - run `$ npm install -g grunt-cli`$ 
- [Yeoman](http://yeoman.io/) - run `$ npm install -g yo`$ 
- [YeoPress](https://github.com/wesleytodd/YeoPress) - run `$ npm install -g yo generator-wordpress`$ 
- [Composer](https://getcomposer.org) - run `$ curl -sS https://getcomposer.org/installer | php`$  then `$ mv composer.phar /usr/local/bin/composer`$ 

### Features

- Vagrant
- Grunt DB Deployments
- Composer WordPress plugin fetching
- WordPress Scaffolding by Yeoman

### Steps:

1. [Download Vauxhall](https://github.com/sharpmachine/vauxhall/archive/master.zip)
2. Unzip and rename to project name
3. Edit Gruntfile.js deployment setting
5. Install and start your server by running `$ vagrant up`$ 
6. Install WordPress by running `$ yo wordpress`$ 
7. Install Grunt by running `$ npm install`$ 
8. Fetch plugins by running `$ composer install`$ 

### That's it!

Point your browser to [http://sharpmachine.dev](http://sharpmachine.dev).  You should see WordPress prompting you for the site title, etc.

### Troubleshooting

#### Vhosts servername (default sharpmachine.dev) not working

You simply need to edit your host file on your computer.  Here's how:

#### Coming Soon

- Capastrano deployments