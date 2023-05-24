import React from 'react'
import client from '@/client'
import { gql } from '@apollo/client'
import SanatiseBlocks from '@/utils/SanatiseBlocks'
import BlockRenderer from '@/components/BlockRenderer'

const Page = (props) => {
    return (
        <div>
            <BlockRenderer blocks={props.blocks} />
        </div>
    )
}

export default Page

export const getStaticProps = async (context) => {
    const uri = `/${context.params.slug.join('/')}/`
    const { data } = await client.query({
        query: gql`
        query PageQuery($uri: String!) {
          nodeByUri(uri: $uri) {
            ... on Page {
              id
              title
              blocks
            }
          }
        }
      `,
        variables: {
            uri,
        }
    })

    return {
        props: {
            title: data.nodeByUri.title,
            blocks: SanatiseBlocks(data.nodeByUri.blocks)
        }
    }
}

export const getStaticPaths = async () => {
    const { data } = await client.query({
        query: gql`
            query GetAllPagesQuery {
                nodeByUri(uri: "/") {
                    ... on Page {
                        id
                        blocks
                    }
                }
            pages {
                nodes {
                    uri
                }
            }
        }
        `
    })

    return {
        paths: data.pages.nodes.filter(page => page.uri !== "/").map(page => ({
            params: {
                slug: page.uri.substring(1, page.uri.length - 1).split('/'),
            }
        })),
        fallback: "blocking",
    }
}