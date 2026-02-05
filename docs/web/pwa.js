let promptEvent;

window.addEventListener("beforeinstallprompt", e => {
    e.preventDefault();
    promptEvent = e;
});

window.installPwa = async () => {
    if (!promptEvent) return false;
    promptEvent.prompt();
    const result = await promptEvent.userChoice;
    promptEvent = null;
    return result.outcome === "accepted";
};

window.isPwaInstalled = () => {
    return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
};

window.isIos = () => {
    return /iphone|ipad|ipod/i.test(navigator.userAgent);
};