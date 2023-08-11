import { ChainId, WETH9 } from '@pancakeswap/sdk'
import { USDC, USDT, BASE } from './common'

export const zksyncTokens = {
  weth: WETH9[ChainId.ZKSYNC],
  usdc: USDC[ChainId.ZKSYNC],
  usdt: USDT[ChainId.ZKSYNC],
  cake: BASE[ChainId.ZKSYNC],
}
