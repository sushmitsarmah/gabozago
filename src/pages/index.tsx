import { Text } from '@chakra-ui/react'
import { Head } from 'components/layout/Head'
import { HeadingComponent } from 'components/layout/HeadingComponent'
import { LinkComponent } from 'components/layout/LinkComponent'

import { SITE_NAME, SITE_DESCRIPTION } from 'utils/config'

export default function Home() {
  return (
    <>
      <Head />

      <main>
        <HeadingComponent as="h2">{SITE_NAME}</HeadingComponent>
        <Text>{SITE_DESCRIPTION}</Text>
        {/* <Text py={4}>
          <LinkComponent href="examples">View examples</LinkComponent> to bootstrap development.
        </Text> */}
      </main>
    </>
  )
}
