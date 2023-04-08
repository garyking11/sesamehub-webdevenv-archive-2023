# sesamehub-webdevenv

This app simulates the Hub  environment for use for site development on local machines. It will also include an ever growing set of site building tools.

**Maintained by**

Gary King, Sesame Communications

Shaun Hardy, Sesame Communications
 
**Hub Simulation Environment Installation**

1. Download and Install [MAMP](https://www.mamp.info/en/downloads/) (Windows/Mac) 
2. Download and Install [Git](https://git-scm.com).
3. Clone the git repository from GitHub into your MAMP web root. https://github.com/sesacom/sesamehub-webdevenv
4. Add Enviroment Variable for php if needed.
5. Update bin/apache/apache-x-x-xx/conf/httpd.conf (see wwww/dev/docs)
6. Download and install nodejs https://nodejs.org/en/download/
7. Install Gulp

**NOTE: Required minimum: php 5.6**

**NOTE: Required nodejs 6.0+**
 
### PC INSTALLATION
      
#### PC httpd.conf

**1. Copy the contents from/docs/PC/httpd.conf into c:/MAMP/bin/apache/apache2.xx.xx/conf/httpd.conf**

**2. Add Enviroment Variables for php.**

* Open Enviroment vaiables by clicking on system Properties by right clicking on "this PC" or clicking on Advanced systems setting within the control panel.
* Right-click the Start button → Click on "System".
* From there, select “Advanced system settings” → “Environment Variables”.
* Under system variables double click path.
* Click "Browse" to find path. ie: C:\MAMP\bin\php\php5.6.xx
* Click OK, OK, OK

**3. Configure MAMP apache redirects in C:\MAMP\bin\apache\apache2.x.x\conf\http.conf.**

	DocumentRoot "C:/MAMP/www"
	Alias /dashboard/endpoints "C:/MAMP/www/dashboard/endpoints/"
	Alias /dashboard/data "C:/MAMP/www/dashboard/data/"
	Alias /dashboard "C:/MAMP/www/dashboard/dist/"

**4. Configure PC MOD REWRITES:**

Add the following Aliases to /MAMP/bin/apache/apache2.x.xx/conf/httpd.conf

<IfModule rewrite_module> 

	RewriteEngine On 
    RewriteCond %{REQUEST_URI} !^/dashboard($|/) 
	RewriteRule ^/?([^/]+)/assets/(.*)$ /$1/www/assets/$2 [L] 
	RewriteCond %{REQUEST_URI} !^/dashboard($|/) 
	RewriteCond %{REQUEST_URI} !^/dev($|/) 
	RewriteCond %{REQUEST_URI} !/www/assets 
	RewriteRule ^(.*)$ /dev/web/index.php [QSA,L] 
    
</IfModule> 

**NOTE:** Restart MAMP after every change you make to the httpd.conf file. 

**5. Clone from github.com**
**NOTE:** You must first be invited to the SESACOM team on Git.  After an invitation is sent click on the invitation email to ACCEPT.

Then cd to (depending on your MAMP version):
C:\MAMP\www\ 

	$ git clone https://github.com/sesacom/sesamehub-webdevenv .
	(All hidden files are required).
 

**IMPORTANT:** After cloning sesamehub-webdevenv, repo must reside inside the www directory and delete sesamehub-webdevenv directory.** This happens only once on first install.

**NOTE:** Updates will be done using **git checkout and git pull**.
 
---
---

### OSX INSTALLATION

**1. Copy the contents from/docs/OSX/httpd.conf into Applications/MAMP/bin/apache/apache2.xx.xx/conf/httpd.conf**


#### OSX httpd.conf 
Add the following to /MAMP/bin/apache/apache2.x.xx/conf/httpd.conf

**2. Add Enviroment Variables for php.**

**Using the Terminal**

	run vim ~/.bash_profile
	Type i and then paste the following at the top of the file:
	export PATH=/Applications/MAMP/bin/php/php5.6.xx/bin:$PATH 
	Hit ESC 
	Type :wq
	Hit Enter
	Run source ~/.bash_profile

Type in which php again and look for the updated string. If everything was successful, It should output the new path to MAMP PHP install.

In case it doesn't output the correct path, try closing the terminal window (exit fully) and open again, it should apply the changes (Restart server). 
 
-----
 
**Manually edit your httpd.config file**
 
**3. Configure MAMP apache redirects for OSX in: Applications/MAMP/conf/httpd.conf**

	ServerName localhost:8888
	DocumentRoot "/Applications/MAMP/www"
	Alias /dashboard/data /Applications/MAMP/www/dashboard/data
	Alias /dashboard/endpoints /Applications/MAMP/www/dashboard/endpoints
	Alias /dashboard /Applications/MAMP/www/dashboard/dist 
	Reset Skype to not use Port 80. (if needed)
	*Below this line:* **MAMP DOCUMENT_ROOT !! Don't remove this line !!** 
	DocumentRoot "/Applications/MAMP/www/"/> 

	<Directory /> 
	Options Indexes FollowSymLinks
	AllowOverride None
	Order allow,deny
	Allow from all
	</Directory>

**This should be changed to whatever you set DocumentRoot to.**

	<Directory "/Applications/MAMP/www"/>	 
	Options All 
	AllowOverride All 
	Order allow,deny Allow from all 
	</Directory>


**Add to bottom of httpd.conf file**

**4. Configure OSX MOD REWRITE:**

	<IfModule rewrite_module> 
	RewriteEngine On 
	RewriteCond %{REQUEST_URI} !/dashboard 
	RewriteRule ^/?([^/]+)/assets/(.*)$ /Applications/MAMP/www//$1/www/assets/$2 [L] 
	RewriteCond /Applications/MAMP/www//%{REQUEST_URI} !-f
	RewriteCond %{REQUEST_URI} !/dashboard RewriteRule ^(.*)$ /Applications/MAMP/www/dev/web/index.php [QSA,L] 
	</IfModule>
    
    
**5. Clone from github.com**
**NOTE:** You must first be invited to the SESACOM team on Git.  After an invitation is sent click on the invitation email to ACCEPT.

Then cd to (depending on your mamp version):

Applications/MAMP/www

	$ git clone https://github.com/sesacom/sesamehub-webdevenv .

**IMPORTANT:** After cloning sesamehub-webdevenv, repo must resided inside the www directory and delete sesamehub-webdevenv directory.** This happens only once on first install.

**NOTE:** Updates will be done using **git checkout and git pull**.
    
    cd /W/MAMP/www
	git status
    git checkout
	git pull
         
---

### INSTALL nodejs

* Download and install nodejs on you local machine globally.

* Download NodeJs: https://nodejs.org/en/download/ Install instructions: Follow prompts from downloaded installer.

* Node comes with npm installed so you should have a version of npm. However, npm gets updated more frequently than Node does, so you'll want to make sure it's the latest version.

* npm install npm -g 

---

### INSTALL GULP

Create a gulpfile.js file inside the buildkit.
    
	var gulp = require('gulp'),
	livereload = require('gulp-livereload');
	livereload({ start: true });
	less = require('gulp-less');

	gulp.task('watch', function() {
	livereload.listen({start: true});
	gulp.watch(['layout.php', 'assets/**/*.*'], ['reload']);
	gulp.watch(lessSources, ['build-less']);
	});

	var lessSources,
	outputDir;

	// LESS ===========

	lessSources = [
	outputDir + 'assets/css/local.less'
	];

	gulp.task('reload', function () {
	livereload.reload();
	});

	gulp.task('build-less', function(){
	return gulp.src(outputDir + 'assets/css/local.less')
	.pipe(less())
	.pipe(gulp.dest(outputDir + 'assets/css'))
	.pipe(liveReload())

	});

**Install Gulp on your local machine environment. (One time only)-(See above json file) 

	npm install --global gulp-cli**  
    
**Install Gulp in local buildkit**  

	npm install --save-dev gulp     
	Run Gulp gulp    
	Run Gulp Watch gulp watch    

## SITE TOOLS MENU
     
* Reset Navigation HTML
* Reset the visible navigation elements on the home page.
* Open Dashboard
* Opens the site tools dashboard.
* Open Remote Tools
* Opens a website with more Site Dev Tools. Including the Form Builder and other HTML generators.
Select Link
* Opens sesamecommunications.com to view library pages etc.

### psds-buildkit-v5.0
With the new SSL server comes a new PSDS Buildkit. You can find it in the 00-SDS-RWD-TEMPLATES directory on the hub. (There is a copy in the old 00-PSDS-BUILDKIT directory, but it will be removed within the next couple of weeks).

The new kit is SSL friendly and has a couple of other updates included. Notably the data folder has been added to /assets/includes/. These files will be used going forward to facilitate  our onsite local "web dev environment."

**NOTE:** The .metadata, gulpfile.js and package.json files in the buildkit root should be removed prior to launch. New site building tools are available to onsite builders. 

**NOTE:** Remote builders ... not yet, we have to set up a white-listing mechanism to verify IP addresses.
**NOTE:**  Blue placeholder text indicates required field. 

### NAVIGATION MENU

#### Navigation Component (textarea at top of page)

At the top of the home page you will find a textarea with 3 buttons labeled as follows: 
 **GetHUB #main-nav**
 
 This button will load the current sitemap as defined within the Sesame Hub Dashboard into your build.
 
**Get STOCK  #main-nav**

 This button will load stock navigation elements should you not be able to access the Hub version of the sitemap.
 
 Select navigation (optionally add 'dummy nav items' nav by clicking on "Get STOCK #main-nav" button).
 
 Click 'Apply' 
 Apply the selected navigation.
 
**Open the dashboard (http://localhost:8888/dashboard/#/) for more tools.  (In development).**


### How to run Gulp and instructions for building PSDS websites on localhost
 
1. Select site that you want to work on from the "Load Site" dropdown
2. PC: Then from the terminal 
 
	cd /c/MAMP/www/account-name/www
 	npm install
 	gulp watch
 
3. Navigate to localhost/account-name/ (trailing slash required)
4. Restart (**important**) the browser and you should be seeing the Gulp process running.


--- 
 
* Select site that you want to work on from the "Load Site" dropdown

OSX: Then from the terminal 
 
 	cd /Applications/MAMP/www/account-name/www
 	npm install
 	gulp watch
 
* Navigate to localhost:8888/account-name/ (trailing slash required)
* Restart (**important**) the browser and you should be seeing the Gulp process running.
* Select navigation (optionally add 'dummy nav items' nav by clicking on "Get STOCK #main-nav" button).
* Click 'Apply' 


**NOTE**: Do not change the current directory structure. ie: images/callouts etc, includes, uploads/images

**NOTE**: Do not remove the /assets/includes/data directory

### Dashboard Tools

#### Schema Generator

Click "Add Location"
Complete the form as desired.

#### Sitemap XML Generator
Change http://localhost to your site's domain name
#### Callouts HTML Generator

The Callouts HTML Generator will give you a basic set of HTML elements to modify to match the site spec provided by the designer.

#### 301 Redirects

The 301 Redirects form will give you a list of previous urls from the 'previous' website and a list of urls taken from the hub's sitemap as defined within the hub dashboard.
    
Simply match the redirect desired to the previous url.
    
Click Get Urls.

**NOTE:** Not all websites will allow access to their urls. In this case, it is necessary to build your own 301.php file manually. 

EXAMPLE 301.php:

	<?php $redirect = array( 
	"/plans/" => "/refer-a-patient",
	"/patient-engagement/dental-ortho-sesame/" => "/office-visits",
	)

	if(array_key_exists($_SERVER['REQUEST_URI'], $redirect)){ Header( "HTTP/1.1 301 Moved Permanently" ); Header( "Location:
	".$redirect[$_SERVER['REQUEST_URI']]); exit; } 
	?>
    
* Copy the redirects php script into /assets/includes/301.php.  
* You're done!

**NOTE:** http:// OR https:// is required in the domain name that you provide. 
**OPTIONALLY:** You can click 'Set Recirects' to write to a local JSON file located within your local-site/assets/includes/data/redirects/redirects-data.json.

#### Animations/Slideshow
This page will provide some of the commonly used scripts used to build our websites. It is meager at this time but will grow.  Suggestions are welcome.

#### Canadian Content
Now and then we have Canadian doctors who require slightly different content as it references Canadian associations etc.  These pages provide formatted copies this content.

#### Select Quick Links
Opens sesamecommunications.com to view library pages etc.

### TIPS
 
Sub navigation menus are hard coded and cannot be dynamic at this point.
 
**NOTE:** You can reset the displayed navigation by clicking "Reset Navigation HTML" (**only after you have clicked 'Apply'**) in the sidebar flyout menu.

* Open the dashboard (  http://localhost/dashboard/#/ ) for more tools.  (In development).

* Select site from dropdown to view current build project

### AFTER BUILD
* **Remove the following files/directory:**
* .hub-welcome-text
* .metadata
* Upload the www folder and pertinent 'local' directory contents. 

