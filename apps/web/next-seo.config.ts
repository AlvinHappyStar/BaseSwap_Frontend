import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | BaseSwap',
  defaultTitle: 'BaseSwap',
  description:
    'Cheaper and faster than Uniswap? Discover BaseSwap, the leading DEX on BNB Smart Chain (BSC) with the best farms in DeFi and a lottery for BASE.',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@BaseSwap',
    site: '@BaseSwap',
  },
  openGraph: {
    title: '🥞 BaseSwap - A next evolution DeFi exchange on BNB Smart Chain (BSC)',
    description:
      'The most popular AMM on BSC by user count! Earn BASE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by BaseSwap), NFTs, and more, on a platform you can trust.',
    images: [{ url: 'https://assets.pancakeswap.finance/web/og/hero.jpg' }],
  },
}
