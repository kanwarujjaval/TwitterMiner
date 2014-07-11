TwitterMiner
============

Twitter Live Stream Tweets Mining Script in Node.js
---------------------------------------------------

Simple script to mine the live Twitter Stream API V1.1

You can apply geographic, track and other filters.

Takes arguments filename

`node index.js output`

Will give output in String JSON format

To add filters:
---------------

Change line 28

` .stream('statuses/filter', {'track':'Search or Hashtags', 'locations':'-122.75,36.8,-121.75,37.8'} `

You may add other filters compatible with filter or change this  to statuses/sample

"Will be adding option to change searches as arguments to script"

----------------------------------------------------

Licensed under AGPL

Please share the improvments to the code!
