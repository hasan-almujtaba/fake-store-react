import { Link } from 'react-router-dom'

import { Button } from '~/components/elements'

export const LimitedOfferBanner = () => {
  return (
    <div className="container p-3">
      <div className="flex h-[80vh] items-center justify-center overflow-hidden rounded-xl bg-black/50 bg-[url('/limited-offer-banner-background.jpg')] bg-cover px-5 text-center text-white bg-blend-multiply lg:h-[500px]">
        <div>
          <h1 className="mb-1 text-2xl font-semibold sm:text-4xl">
            Limited offer are here
          </h1>
          <p className="mx-auto max-w-lg sm:text-lg">
            Check out the latest options from our summer small-batch release
            while they&apos;re still in stock
          </p>

          <Button
            className="mt-5"
            colorScheme="neutral"
            as={Link}
            to="/products/limited-offer"
          >
            Shop Limited Offer
          </Button>
        </div>
      </div>
    </div>
  )
}
