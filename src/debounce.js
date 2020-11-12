export const debounce = (fn, wait, immediate = true) => {
    let immediatelyCalled = false;
    let timerId;

    return function debounced() {
        if (immediate && !immediatelyCalled) {
            immediatelyCalled = true;

            fn();

            return;
        }

        clearTimeout(timerId);

        timerId = setTimeout(fn, wait);
    };
};
