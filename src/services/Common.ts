export const Common = {

    /**
     * @description remove all undefined/null values from an object
     * @param obj
     */
    clean({obj}: { obj: any }) {
        for (let propname in obj) {
            if ((obj[propname] === null || obj[propname] === undefined )) {
                delete obj[propname];
            }
        }
        return obj
    },

    /**
     * @description Get Filter values
     * @param string
     */
    getFilterValues({string}: { string: any }) {
        // Convert string into array of integers
        return string && string.split(",").map(Number);
    },

};
