import React from 'react'
import client from '@/client'
import { gql } from '@apollo/client'
import BlockRenderer from '@/components/BlockRenderer'
import SanatiseBlocks from '@/utils/SanatiseBlocks'

const Home = (props) => {
  return (
    <div><BlockRenderer blocks={props.blocks} /></div>
  )
}

export default Home

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query NewQuery {
        nodeByUri(uri: "/") {
          ... on Page {
            id
            blocks
          }
        }
      }
    `
  })

  return {
    props: {
      blocks: SanatiseBlocks(data.nodeByUri.blocks)
    }
  }
}