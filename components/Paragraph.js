import React from 'react'
import { GetTextAlign } from '@/utils/Fonts'
import RelativeToAbsoluteUrl from '@/utils/RelativeToAbsoluteUrl'

const Paragraph = ({ textAlign = "left", content, textColor }) => {
    // It must be 'dangerouslySetInnerHTML' to support inline tags such as <strong></strong>
    return (
        <p
            className={`max-w-5xl mx-auto ${GetTextAlign(textAlign)}`}
            style={{ color: textColor }}
            dangerouslySetInnerHTML={{ __html: RelativeToAbsoluteUrl(content) }}
        />
    )
}

export default Paragraph