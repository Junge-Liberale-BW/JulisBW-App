function getSampleFile(dirEntry) {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://cordova.apache.org/static/img/cordova_bot.png', true);
    xhr.responseType = 'blob';

    xhr.onload = function () {
        if (this.status == 200) {

            var blob = new Blob([this.response], { type: 'image/png' });
            saveFile(dirEntry, blob, "downloadedImage.png");
        }
    };
    xhr.send();
}

function saveFile(dirEntry, fileData, fileName) {

    dirEntry.getFile(fileName, { create: true, exclusive: false }, function (fileEntry) {

        writeFile(fileEntry, fileData);

    }, fail);
}

function writeFile(fileEntry, dataObj/*, isAppend*/) {

    // Create a FileWriter object for our FileEntry (log.txt).
    fileEntry.createWriter(function (fileWriter) {

        fileWriter.onwriteend = function () {
            console.log("Successful file write...");
            /*if (dataObj.type == "image/png") {
                readBinaryFile(fileEntry);
            }
            else {
                readFile(fileEntry);
            }*/
        };

        fileWriter.onerror = function (e) {
            console.log("Failed file write: " + e.toString());
        };

        fileWriter.write(dataObj);
    });
}

function fail(e) {
    console.log("FileSystem Error");
    console.dir(e);
}




class StorageManager {

    test() {
        console.log("test")
        window.resolveLocalFileSystemURL(window.cordova.file.dataDirectory,
            function (dir) {
                getSampleFile(dir)
            })
    }



    /*update() {
        console.log(window)
        window.resolveLocalFileSystemURL(window.cordova.file.dataDirectory, function (dir) {
            console.log("got main dir", dir);
            dir.getFile("log.txt", { create: true }, function (file) {
                console.log("got the file", file);
                logOb = file;
                writeLog("App started");
                writeLog("Test2");
                justForTesting();
            });
        });
        console.log("Device ready")
    }

    

    writeLog(str) {
        if (!logOb) return;
        var log = str + " [" + (new Date()) + "]\n";
        console.log("going to log " + log);
        logOb.createWriter(function (fileWriter) {

            fileWriter.seek(fileWriter.length);

            var blob = new Blob([log], { type: 'text/plain' });
            fileWriter.write(blob);
            console.log("ok, in theory i worked");
        }, fail);
    }

    justForTesting() {
        logOb.file(function (file) {
            var reader = new FileReader();

            reader.onloadend = function () {
                console.log(this.result);
            };

            reader.readAsText(file);
        }, fail);

    }*/
}
export default new StorageManager()