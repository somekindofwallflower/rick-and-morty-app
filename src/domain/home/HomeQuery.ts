export class HomeQuery {
    page: Number = 1;
    search: String | undefined;

    static get FILTER_KEYS() {
        return {
            PAGE: "page",
            SEARCH: "search"
        };
    }
}
