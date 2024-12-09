import { TokenStandard, WarpCoreConfig } from '@hyperlane-xyz/sdk';

// A list of Warp Route token configs
// These configs will be merged with the warp routes in the configured registry
// The input here is typically the output of the Hyperlane CLI warp deploy command
export const warpRouteConfigs: WarpCoreConfig = {
  tokens: [
    {
      chainName: 'ethereum',
      standard: TokenStandard.EvmHypCollateral,
      decimals: 6,
      symbol: 'USDC',
      name: 'USDC',
      addressOrDenom: '0x2e14C105767026E5e186037198E93D7aE0639937',
      collateralAddressOrDenom: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      logoURI: '/logo.png',
      connections: [
        {
          token: 'ethereum|oortmainnet|0x0c2FA0738a8D44A20F0742Fbfc3d5f7DD056d0E2',
        },
      ],
    },
    {
      chainName: 'oortmainnet',
      standard: TokenStandard.EvmHypCollateralFiat,
      decimals: 6,
      symbol: 'USDC.e',
      name: 'USDC.e',
      addressOrDenom: '0x0c2FA0738a8D44A20F0742Fbfc3d5f7DD056d0E2',
      collateralAddressOrDenom: '0xD803E5a381887613d9cFa7820D53441D3C966AD2',
      logoURI: '/logo.png',
      connections: [
        {
          token: 'ethereum|ethereum|0x2e14C105767026E5e186037198E93D7aE0639937',
        },
      ],
    },
    {
      chainName: 'oorttesnet',
      standard: TokenStandard.EvmHypCollateralFiat,
      decimals: 6,
      symbol: 'USDC.e',
      name: 'USDC.e',
      addressOrDenom: '0x75533e1014203cD0BEdCf9c443a074441ADC96b4',
      collateralAddressOrDenom: '0x75e65e717AD1E55fa2A8B4B3A65F612b95A7B4A7',
      logoURI: '/logo.png',
      connections: [
        {
          token: 'ethereum|sepolia|0x4952db8F0EB3a9a3F99be161e5d8B6372cfC0746',
        },
      ],
    },
    {
      chainName: 'sepolia',
      standard: TokenStandard.EvmHypCollateral,
      decimals: 6,
      symbol: 'USDC',
      name: 'USDC',
      addressOrDenom: '0x4952db8F0EB3a9a3F99be161e5d8B6372cfC0746',
      collateralAddressOrDenom: '0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238',
      logoURI: '/logo.png',
      connections: [
        {
          token: 'ethereum|oorttesnet|0x75533e1014203cD0BEdCf9c443a074441ADC96b4',
        },
      ],
    },
  ],
  options: {},
};
