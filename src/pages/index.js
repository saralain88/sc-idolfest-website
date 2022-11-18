import React from  'react'
import Hero from '@components/hero'
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import NewsletterSignup from '@components/NewsletterSignup'
// import PageHeader from '@components/PageHeader'

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />

      <Hero 
        header="Announcing SC IdolFest 2023!"
      />

      {/* <PageHeader 
        title="Announcing SC IdolFest 2023!" 
      /> */}

      <PageContent>
        <p>We're so excited to announce SoCal IdolFest. SCIF will be coming to the Torrance Cultural Center on August 12, 2023.</p><br />
        <p>Sign up for our email list below to get all the latest SCIF updates!</p>
        <NewsletterSignup />
      </PageContent>
    </Layout>
  )
}

export default IndexPage
