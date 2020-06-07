export default function getCurrentTimePromise() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            var didSucceed = Math.random() >= 0.5;
            didSucceed ? resolve(new Date()) : reject("Error");
        }, 2000);
    });
}