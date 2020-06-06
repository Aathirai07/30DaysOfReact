export default function getCurrentTimeCallback(callback) {
    return setTimeout(function () {
        var currentTime = new Date();
        callback(currentTime);
    }, 2000);
}