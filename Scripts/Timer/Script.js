let previous = $previous;
let delay = $delay;
if(!delay) return null;
await new Promise(function (resolve) {
    return setTimeout(resolve, delay);
});
if(!delay)return null;
return Date.now() + delay;
