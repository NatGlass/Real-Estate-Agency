import React from 'react'
import client from '@/client'
import { gql } from '@apollo/client'
import BlockRenderer from '@/components/BlockRenderer'
import SanatiseBlocks from '@/utils/SanatiseBlocks'
import MainMenu from '@/components/MainMenu'
import MapMainMenuItems from '@/utils/MapMainMenuItems'

const Home = (props) => {
  return (
    <div>
      <MainMenu items={props.mainMenuItems} callToActionLabel={props.callToActionLabel} callToActionDestination={props.callToActionDestination} />
      <BlockRenderer blocks={props.blocks} />
    </div>
  )
}

export default Home

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query PageQuery {
        nodeByUri(uri: "/") {
          ... on Page {
            id
            blocks
          }
        }
        acfOptionsMainMenu {
    mainMenu {
      callToActionButton {
        label
        destination {
          ... on Page {
            uri
          }
        }
      }
      menuItems {
        menuItem {
          destination {
            ... on Page {
              uri
            }
          }
					label
        }
        items {
          destination {
            ... on Page {
              uri
            }
          }
          label
        }
      }
    }
  }
      }
    `
  })

  return {
    props: {
      mainMenuItems: MapMainMenuItems(data.acfOptionsMainMenu.mainMenu.menuItems),
      callToActionLabel: data.acfOptionsMainMenu.mainMenu.callToActionButton.label,
      callToActionDestination: data.acfOptionsMainMenu.mainMenu.callToActionButton.destination.uri,
      blocks: SanatiseBlocks(data.nodeByUri.blocks)
    }
  }
}