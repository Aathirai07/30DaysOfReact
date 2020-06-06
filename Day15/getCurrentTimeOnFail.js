export default function getCurrentTimeOnFail(onSuccess, onFail) {
    return setTimeout(function () {
        var didSucceed = Math.random() >= 0.5;
        if (didSucceed) {
            var currentTime = new Date();
            onSuccess(currentTime);
        } else {
            onFail("Unknown error");
        }
    }, 2000);
}