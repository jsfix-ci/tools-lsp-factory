import { providers, Signer } from 'ethers';

import { LSP3UniversalProfile } from './classes/lsp3-universal-profile';
import { ProxyDeployer } from './classes/proxy-deployer';
import { LSPFactoryOptions } from './interfaces';

/**
 * Factory for creating LSP3UniversalProfiles / LSP4DigitalCertificates
 */
export class LSPFactory {
  options: LSPFactoryOptions;
  LSP3UniversalProfile: LSP3UniversalProfile;
  ProxyDeployer: ProxyDeployer;
  /**
   * TBD
   *
   * @param {string} deployKey
   * @param {provider} provider
   * @param {number} [chainId=22] Lukso Testnet - 22 (0x16)
   */
  constructor(
    signer: Signer,
    provider: providers.Web3Provider | providers.JsonRpcProvider,
    chainId = 22
  ) {
    this.options = {
      signer,
      provider,
      chainId,
    };

    this.LSP3UniversalProfile = new LSP3UniversalProfile(this.options);
    this.ProxyDeployer = new ProxyDeployer(this.options.signer);
  }
}
