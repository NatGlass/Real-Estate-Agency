import React from 'react'
import client from '@/client'
import { gql } from '@apollo/client'
import SanatiseBlocks from './SanatiseBlocks'
import MapMainMenuItems from './MapMainMenuItems'

const GetPageStaticProps = async (context) => {
    console.log('Context', context)
    const uri = context.params?.slug ? `/${context.params.slug.join('/')}/` : "/"

    const { data } = await client.query({
        query: gql`
          query PageQuery($uri: String!) {
            nodeByUri(uri: $uri) {
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
        `,
        variables: {
            uri
        }
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

export default GetPageStaticProps
