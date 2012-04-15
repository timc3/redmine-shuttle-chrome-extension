----------------
Redmine Shuttle
----------------

A very simple Chrome extension that allows the direct location change to a Redmine instance by searching with a certain prefix in the Chrome URL bar.


Changes
--------

1.0a - This is a simple preview to check that the PoC works. The Redmine instance is hard-coded and so is the prefix ( to # )


Installation
------------
At the moment this is not published to the Google Chrome store, so download/grab the source or install the CRX file straight from here.

1. Open Chrome
2. Open the extensions panel
3. Check developer mode
4. Choose "Load unpacked extensions"
5. Navigate the place that you download the extension and choose it.

Or if you are going to install the CRX

1. Click on the https://github.com/downloads/timc3/redmine-shuttle-chrome-extension/redmine-shuttle.crx file
2. Discard the warning.

Setup
------

Once install you must point the plugin to your Redmine installation. 

1. Right click or option click on the logo and select options.
2. Enter in the URL to your Redmine installation (no trailing slash is needed). 
3. Save.

Usage
------

After installation, configure with the Redmine instance that you want to use then in the URL start typing, first with the prefix to start the extension ('rs'), and then with eith of the follow:

#1234
 Directly leap to a issue number

project:projectname
  Go directly to a project homepage.

string
  Any other string after the prefix will start a search in Redmine.

So to bring it together, with a prefix operator of "rs" simply type:

    rs #1234


Issues
------

* RS is hardcoded as the string to use. There is a ticket for the Chrome team to be able to change these prefix operators.
* Icon in the extension overview is the standard icon. Should update to the new icon.