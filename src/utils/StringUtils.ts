/** Module containing util functions concerning strings */
const StringUtils = (() => {
    // List containing abbreviations for thousand - million - billion and trillion
    const NUMBER_LETTERS = ["k", "m", "b", "t"];

    /**
     * Simplifies a number so that thousands are shown by letters instead of all zeros
     */
    const simplify = (number: number) => {
        let divisionsBy1000 = 0;

        while (number >= 10000) {
            number = Math.round(number / 1000);

            divisionsBy1000++;
        }

        const letter = divisionsBy1000 > 0 ? NUMBER_LETTERS[divisionsBy1000 - 1] : "";

        return `${number}${letter}`;
    };

    return {
        simplify
    };
})();

export default StringUtils;
