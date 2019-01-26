"use strict";

module.exports = () => {
    /**
     * UK Government Postcode Regex.
     *
     * @type {RegExp}
     */
    let postcodeRegex = /^([Gg][Ii][Rr] ?0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z])))) ?[0-9][A-Za-z]{2})$/;

    /**
     * Parse a UK postcode.
     *
     * @param postcode
     */
    let parse = (postcode) => {
        let output = false,
            postcodeObject = postcode.split(postcodeRegex);

        if (postcodeObject.length > 1) {
            output = {
                'district' : postcodeObject[3]
            }
        }

        return output;
    };

    return {
        parse : parse
    }
};