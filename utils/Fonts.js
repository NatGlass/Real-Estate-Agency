/*
*
* Add a tailwind class to the header depending on the settings received from wordpress
*
* Text is aligned to the left by default
* Default alignment can be changed by modifying the parameter below
*/
export const getTextAlign = (textAlign = "left") => {
    const textAlignMap = {
        "left": "text-left",
        "right": "text-right",
        "center": "text-center"
    }
    // If the key provided is invalid, use the default alignment of "left"
    return `${textAlignMap[textAlign] || ""}`
}

/*
*
* Set the level type of the heading, from h1 to h6
*
*/
export const getFontSizeForHeading = (level) => {
    const fontSizeMap = {
        1: "text-6xl",
        2: "text-5xl",
        3: "text-4xl",
        4: "text-3xl",
        5: "text-2xl",
        6: "text-xl"
    }
    return `${fontSizeMap[level] || ""}`
}