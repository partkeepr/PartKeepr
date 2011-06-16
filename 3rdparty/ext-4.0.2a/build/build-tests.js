if (system.args.length !== 1) {
    system.print('Usage:');
    system.print('  hammerjs build-test.js');
    system.exit(-1);
}

// Traverses the specified path and collects all *.js files.
// Note: the traversal is recursive to all subdirectories.

var scanDirectory = function (path) {
    var entries = [],
        subdirs;
    if (fs.exists(path) && fs.isFile(path) && path.match('.js$')) {
        entries.push(path);
    } else if (fs.isDirectory(path)) {
        fs.list(path).forEach(function (e) {
            subdirs = scanDirectory(path + '/' + e);
            subdirs.forEach(function (s) {
                entries.push(s);
            });
        });
    }
    return entries;
};

var getFileContent = function(fname) {
    var f = fs.open(fname, 'r'),
        content = '', 
        line;
    while (true) {
        line = f.readLine();
        if (line.length === 0) {
            break;
        }
        content += line;
    }
    f.close();
    return content;
};

var writeFile = function(fname, content) {
    var f = fs.open(fname, 'w'),
        lines = content.split('\n'),
        length = lines.length,
        i = 0;

    for (; i < length; i++) {
        f.writeLine(lines[i]);
    }
    f.close();
};

// Loads the content of a json file and return an object.
var json2js = function (fname) {
    var content = getFileContent(fname);
    return eval('(' + content + ')');
};

var generateIndexFor = function(config) {
    var packages = json2js(config.sources).packages,
        tpl = getFileContent(config.tpl),
        sources = '',
        specs, slength, j, specPaths, source, name, package, files, file, i, length;
    
    tpl = tpl.replace('_TITLE_', config.title);
    
    for (name in packages) {
        package = packages[name];
        if (config.packages.indexOf(package.name) != -1) {
            files = package.files;
            length = files.length;
            
            for (i = 0; i < length; i++) {
                file = files[i];
                source = file.path + file.name;
                if (config.srcMustMatch) {
                    if (!source.match(config.srcMustMatch)) {
                        continue;
                    }
                }
                if (config.excludes.indexOf(source) === -1) {
                    sources +=  (config.prepare[source] || '') + '{ type: "js", src: "' + source.replace(config.srcReplace[0], config.srcReplace[1]) + '"},\n' + (config.overrides[source] || '');
                }
            }
        }
    }
    
    specPaths = config.specPaths; 
    length = specPaths.length;
    for (i = 0; i < length; i++) {
        specs = scanDirectory(specPaths[i]);
        slength = specs.length;
        for (j = 0; j < slength; j++) {
            source = specs[j];

            if (config.excludes.indexOf(source) === -1) {
                sources += '{ type: "js", src: "' +  source.replace(config.srcReplace[0], config.srcReplace[1]) + '"}'+ (i === length - 1 && j === slength - 1 ? ']' : ',') + '\n';
            }
        }
        
    }
    tpl = tpl.replace('_INCLUDES_', sources);
    writeFile(config.destination, tpl);
};

var indexes = json2js('tests/indexes.json'),
    ilength = indexes.length,
    x = 0;
    
for (; x < ilength; x++) {
    system.print('Generating test index for ' + indexes[x].title);
    generateIndexFor(indexes[x]);
}

system.exit(0);
