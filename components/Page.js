import React from 'react'
import MainMenu from './MainMenu'
import BlockRenderer from './BlockRenderer'

const Page = (props) => {
    return (
        <div>
            <MainMenu items={props.mainMenuItems} callToActionLabel={props.callToActionLabel} callToActionDestination={props.callToActionDestination} />
            <BlockRenderer blocks={props.blocks} />
        </div>
    )
}

export default Page