'use strict';
module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    deployments: {
      options: {
        backup_dir: "db_backups"
      },
      local: {
        title: "Local",
        database: "projectdb",
        user: "projectdb",
        pass: "password",
        host: "localhost",
        url: "sharpmachine.dev"
      },
      alpha: {
        title: "Alpha",
        database: "alpha.clientsite.com",
        user: "dbusername",
        pass: "password",
        host: "localhost",
        url: "alpha.clientsite.com",
        ssh_host: "ssh_user@ssh_host"
      },
      beta: {
        title: "Beta",
        database: "beta.clientsite.com",
        user: "dbusername",
        pass: "password",
        host: "localhost",
        url: "beta.clientsite.com",
        ssh_host: "ssh_user@ssh_host"
      },
      production: {
        title: "Production",
        database: "clientsite.com",
        user: "dbusername",
        pass: "password",
        host: "localhost",
        url: "clientsite.com",
        ssh_host: "ssh_user@ssh_host"
      }
    },
    shell : {
      install_wordpress_plugins: {
        command: [
          // 404 Redirected
          'svn checkout http://plugins.svn.wordpress.org/404-redirected/trunk/ wp-content/plugins/404-redirected',

          // Admin Menu Editor
          'svn checkout http://plugins.svn.wordpress.org/admin-menu-editor/trunk/ wp-content/plugins/admin-menu-editor',

          // Advanced Custom Fields
          'svn checkout http://plugins.svn.wordpress.org/advanced-custom-fields/trunk/ wp-content/plugins/advanced-custom-fields',

          // Broken Link Checker
          'svn checkout http://plugins.svn.wordpress.org/broken-link-checker/trunk/ wp-content/plugins/broken-link-checker',

          // Contact Form 7
          'svn checkout http://plugins.svn.wordpress.org/contact-form-7/trunk/ wp-content/plugins/contact-form-7',

          // Custompress
          'git clone git@github.com:sharpmachine/custompress.git wp-content/plugins/custompress',

          // Google Analytics for WordPress
          'svn checkout http://plugins.svn.wordpress.org/google-analytics-for-wordpress/trunk/ wp-content/plugins/google-analytics-for-wordpress',

          // Google Sitemap Generator
          'svn checkout http://plugins.svn.wordpress.org/google-sitemap-generator/trunk/ wp-content/plugins/google-sitemap-generator',

          // Jetpack
          'svn checkout http://plugins.svn.wordpress.org/jetpack/trunk/ wp-content/plugins/jetpack',

          // Maintenance Mode
          'svn checkout http://plugins.svn.wordpress.org/maintenance-mode/trunk/ wp-content/plugins/maintenance-mode',

          // Post Types Order
          'svn checkout http://plugins.svn.wordpress.org/post-types-order/trunk/ wp-content/plugins/post-types-order',

          // SEO Ultimate
          'svn checkout http://plugins.svn.wordpress.org/seo-ultimate/trunk/ wp-content/plugins/seo-ultimate',

          // W3 Total Cache
          'svn checkout http://plugins.svn.wordpress.org/w3-total-cache/trunk/ wp-content/plugins/w3-total-cache',

          // WP-DBManager
          'svn checkout http://plugins.svn.wordpress.org/wp-dbmanager/trunk/ wp-content/plugins/wp-dbmanager',
        ].join('&&')
      }
    }
  });

  // load tasks
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-deployments');

  // register task

};