import React from 'react'
import { getFontSizeForHeading, getTextAlign } from '@/utils/Fonts';

const Heading = ({ textAlign, content, level }) => {
    const tag = React.createElement(`h${level}`, {
        dangerouslySetInnerHTML: { __html: content },
        className: `font-heading max-w-5xl mx-auto my-5 ${getFontSizeForHeading(level)} ${getTextAlign(textAlign)}`,

    })
    return tag;
}

export default Heading