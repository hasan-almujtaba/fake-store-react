import { Head } from '~/components/seo'
import { LimitedOfferBanner } from '~/features/products'

export const LandingPage = () => {
  return (
    <>
      <Head title="Home" />

      <LimitedOfferBanner />
    </>
  )
}
