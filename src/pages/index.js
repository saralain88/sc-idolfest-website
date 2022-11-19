import React from  'react'
import Hero from '@components/hero'
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import NewsletterSignup from '@components/NewsletterSignup'
// import PageHeader from '@components/PageHeader'
import { StaticImage } from 'gatsby-plugin-image'
import { makeStyles } from '@material-ui/styles'
import CenteredBox from '@components/CenteredBox'

const useStyles = makeStyles(theme => ({
    partnerLogo: {
      textDecoration: 'none',
      boxShadow: 'none',
      '& :hover': {
          opacity: '.85'
      }
    },
    cross: {
      fontSize: '2em',
      fontFamily: 'Junegull',
      margin: '1em'
    }
}))

const IndexPage = () => {
  const classes = useStyles()

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

        <br /><br />
        <CenteredBox>
        <h3>A partnership between</h3> 
        <a href="https://animarketplace.org" target="_blank" rel="noreferrer" className={classes.partnerLogo}>
            <StaticImage
              // This is a presentational image, so the alt should be an empty string
              alt=''
              src='../images/partners/AniMarketplace Logo.png'
              loading='eager'
              placeholder='blurred'
              quality='100'
              height={100}
            />
          </a>
        <span className={classes.cross}>x</span>
        <a href="https://nwidolfest.com" target="_blank" rel="noreferrer" className={classes.partnerLogo}>
            <StaticImage
              // This is a presentational image, so the alt should be an empty string
              alt=''
              src='../images/icon/Icon-Pink.png'
              loading='eager'
              placeholder='blurred'
              quality='100'
              height={100}
            />
          </a>
        </CenteredBox>
      </PageContent>
    </Layout>
  )
}

export default IndexPage
