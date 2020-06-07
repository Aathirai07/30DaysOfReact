export default function getCurrentTimeHandlerId() {
    return setTimeout(function () {
        return new Date();
    }, 2000);
}