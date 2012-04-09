----------------
Redmine Shuttle
----------------

A very simple Chrome extension that allows the direct location change to a Redmine instance by searching with a certain prefix in the Chrome URL bar.


Changes
--------

1.0a - This is a simple preview to check that the PoC works. The Redmine instance is hard-coded and so is the prefix ( to # )


Installation
------------
At the moment this is not published to the Google Chrome store, so download/grab the source.

# Open Chrome
# Open the extensions panel
# Check developer mode
# Choose "Load unpacked extensions"
# Navigate the place that you download the extension and choose it.

Usage
------

After installation, configure with the Redmine instance that you want to use then in the URL start typing, first with the prefix to start the extension, and then with eith of the follow:

#1234
 Directly leap to a issue number

project:projectname
  Go directly to a project homepage.

string
  Any other string after the prefix will start a search in Redmine.

So to bring it together, with a prefix operator of "#" simply type:

    # #1234


Issues
------

* As mentioned in the above change log some settings are hard coded.
