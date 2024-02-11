import Link from "next/link"

// import { productCategories } from "@/config/products"
import { siteConfig } from "@/config/site"
// import { type getGithubStars } from "@/lib/fetchers/github"
// import { type getFeaturedProducts } from "@/lib/fetchers/product"
// import { type getFeaturedStores } from "@/lib/fetchers/store"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
// import { ProductCard } from "@/components/cards/product-card"
// import { StoreCard } from "@/components/cards/store-card"
import { Icons } from "@/components/icons"
// import { ContentSection } from "@/components/shells/content-section"
import { Shell } from "@/components/shells/shell"

// import { CategoryCard } from "./category-card"

// interface LobbyProps {
//   productsPromise: ReturnType<typeof getFeaturedProducts>
//   storesPromise: ReturnType<typeof getFeaturedStores>
//   githubStarsPromise: ReturnType<typeof getGithubStars>
// }

export async function Lobby() {
  // See the "Parallel data fetching" docs: https://nextjs.org/docs/app/building-your-application/data-fetching/patterns#parallel-data-fetching
  // const [products, stores, githubStars] = await Promise.all([
  //   productsPromise,
  //   storesPromise,
  //   githubStarsPromise,
  // ])

  return (
    <Shell className="max-w-6xl">
      <section className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-4 py-24 text-center md:py-32">
        <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
          <Badge
            aria-hidden="true"
            className="rounded-md px-3.5 py-1.5"
            variant="secondary"
          >
            <Icons.gitHub className="mr-2 size-3.5" aria-hidden="true" />
            {/* {githubStars}  */}
            {/* stars on GitHub */}
            GitHub
          </Badge>
          <span className="sr-only">GitHub</span>
        </Link>
        <h1 className="text-balance font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
          Design Your Next Sneakers
        </h1>
        <p className="max-w-[42rem] text-balance leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          {/* Buy and sell skateboarding gears from independent brands and stores
          around the world with ease */}
          do whatever you want
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button asChild>
            {/* <Link href="/products"> */}
            <Link href="/playground">
              Design now
              <span className="sr-only">Design now</span>
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/dashboard/stores">
              Preview now
              <span className="sr-only">Preview now</span>
            </Link>
          </Button>
        </div>
      </section>
      {/* <section className="grid grid-cols-1 gap-4 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {productCategories.map((category) => (
          <CategoryCard key={category.title} category={category} />
        ))} 
        </section>
        <ContentSection
        title="Featured products"
        description="Explore products from around the world"
        href="/products"
        linkText="View all products"
        className="pt-8 md:pt-10 lg:pt-12"
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ContentSection>
      <ContentSection
        title="Featured stores"
        description="Explore stores from around the world"
        href="/stores"
        linkText="View all stores"
        className="py-8 md:py-10 lg:py-12"
      >
        {stores.map((store) => (
          <StoreCard
            key={store.id}
            store={store}
            href={`/products?store_ids=${store.id}`}
          />
        ))}
      </ContentSection> */}
    </Shell>
  )
}
