#!/bin/sh
echo "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\"
  \"http://www.w3.org/TR/html4/loose.dtd\">
<html>
    <head>
        <title>Jasmine Test Runner - Platform Core</title>
            <link rel=\"stylesheet\" type=\"text/css\" href=\"../../../../testreporter/deploy/testreporter/resources/reporter.css\">
            <script type=\"text/javascript\" src=\"../../../../testreporter/deploy/testreporter/reporter.js\"></script>
        </head>
        <body>
            <script type=\"text/javascript\">
                            Test.SandBox.setup({
                                    includes: [{ type: \"js\", src: \"../../../../testreporter/deploy/testreporter/jasmine.js\" },"  > index.html

# Add ext-core include        
sed 's/\.\.\/platform\/core/\.\./' ../../../../extjs/build/sdk.jsb3 | grep "path" | tr -d '"' | tr -d "," | tr -d "}" > dump.tmp

cat dump.tmp | awk '{    
    path = $2 $4;
    print "                               { type: \"js\", src: \"" path "\" },";
    if (path == "../../src/class/Loader.js") {
        print "                               { type: \"js\", src: \"resources/BlockLoader.js\" },";
    }
}'  >> index.html
rm dump.tmp

# Add env files
find ../../src/env -name *.js | awk '{print "                               { type: \"js\", src: \"" $0 "\" },";}'  >> index.html

echo "                               { type: \"js\", src: \"resources/EventUtils.js\" }," >> index.html
        
# Add specs include
find spec -name "*.js" > dump.tmp
lastRec=`awk 'END{print NR}' dump.tmp`
awk -v aLastRec="$lastRec" '{
    if (NR == aLastRec) {
        print "                               { type: \"js\", src: \"" $0 "\" }]";
    } else {
        print "                               { type: \"js\", src: \"" $0 "\" },";
    }

}' dump.tmp >> index.html

rm dump.tmp
echo "                });

        </script>
    </body>
</html>" >> index.html
