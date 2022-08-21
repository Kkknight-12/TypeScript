"use strict";
class API {
    constructor(options) {
        this.options = options;
    }
    getValue() {
        return this.options;
    }
}
new API({
    baseURL: "https://api.mysite.com",
    tier: "prod",
});
new API({
    baseURL: "https://api.mysite.com",
    tierr: "prod",
});
let badOptions = {
    baseURL: "https://api.mysite.com",
    badTier: "prod",
};
new API(badOptions);
//# sourceMappingURL=app.js.map