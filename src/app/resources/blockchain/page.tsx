import Link from "next/link";

export default function BlockchainResources() {
  return (
    <div className="container mx-auto px-4 py-10 max-w-4xl">
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold">
          Blockchain Development Resources
        </h1>
        <p className="mt-3 text-sm sm:text-base text-white-foreground">
          Comprehensive guide for blockchain development, smart contracts, and
          decentralized application (DApp) development.
        </p>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Prerequisites</h2>
        <div className="rounded-xl border border-white/10 bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900/30 dark:to-gray-900/10 p-5 sm:p-6">
          <div className="space-y-4">
            <div className="flex flex-col gap-1">
              <span className="font-medium">Programming Languages:</span>
              <span className="text-sm text-muted-foreground">
                JavaScript, Python, or Java
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="font-medium">Web Backend Programming:</span>
              <span className="text-sm text-muted-foreground">
                Node.js, Django, etc.
              </span>
            </div>

            <div className="rounded-md border border-amber-200/40 bg-amber-50/60 dark:bg-amber-950/30 px-4 py-3">
              <p className="text-sm text-amber-800 dark:text-amber-200">
                <span className="font-semibold">Note:</span> For backend
                programming requirements, refer to the Web Development section.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">
          Core Blockchain Concepts
        </h2>
        <div className="rounded-xl border border-white/10 bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900/30 dark:to-gray-900/10 p-5 sm:p-6">
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <div>Distributed Ledger Technology</div>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <div>Cryptographic Hash Functions</div>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <div>Consensus Mechanisms</div>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <div>Smart Contracts</div>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <div>Decentralized Applications (DApps)</div>
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">
          Blockchain Development Courses
        </h2>
        <div className="rounded-xl border border-white/10 bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900/30 dark:to-gray-900/10 p-5 sm:p-6">
          <div className="space-y-4">
            <div className="flex flex-col gap-1">
              <span className="font-medium">
                Coursera Blockchain Specialization:
              </span>
              <span className="text-sm text-muted-foreground">
                Complete courses 1, 2, and 3 of the series
              </span>
            </div>

            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                <Link
                  href="https://www.coursera.org/specializations/blockchain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
                >
                  Blockchain Specialization - Coursera
                </Link>
                <span className="text-sm text-muted-foreground">
                  (Courses 1, 2, and 3)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                <Link
                  href="https://www.udemy.com/course/ethereum-and-solidity-the-complete-developers-guide/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
                >
                  Ethereum and Solidity: The Complete Developer's Guide - Udemy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">
          Smart Contract Development
        </h2>
        <div className="rounded-xl border border-white/10 bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900/30 dark:to-gray-900/10 p-5 sm:p-6">
          <div className="space-y-4">
            <div className="flex flex-col gap-1">
              <span className="font-medium">Primary Language:</span>
              <span className="text-sm text-muted-foreground">
                Solidity (for Ethereum)
              </span>
            </div>

            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                <Link
                  href="https://soliditylang.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
                >
                  Solidity Official Documentation
                </Link>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                <Link
                  href="https://remix.ethereum.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
                >
                  Remix IDE
                </Link>
                <span className="text-sm text-muted-foreground">
                  (Online Solidity IDE)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                <Link
                  href="https://trufflesuite.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
                >
                  Truffle Suite
                </Link>
                <span className="text-sm text-muted-foreground">
                  (Development framework)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                <Link
                  href="https://hardhat.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
                >
                  Hardhat
                </Link>
                <span className="text-sm text-muted-foreground">
                  (Ethereum development environment)
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">DApp Development</h2>
        <div className="rounded-xl border border-white/10 bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900/30 dark:to-gray-900/10 p-5 sm:p-6">
          <div className="space-y-4">
            <div className="flex flex-col gap-1">
              <span className="font-medium">Frontend Technologies:</span>
              <span className="text-sm text-muted-foreground">
                React, Vue.js, Angular (with Web3 integration)
              </span>
            </div>

            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                <Link
                  href="https://web3js.readthedocs.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
                >
                  Web3.js
                </Link>
                <span className="text-sm text-muted-foreground">
                  (Ethereum JavaScript API)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                <Link
                  href="https://docs.ethers.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
                >
                  Ethers.js
                </Link>
                <span className="text-sm text-muted-foreground">
                  (Ethereum library)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                <Link
                  href="https://metamask.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
                >
                  MetaMask
                </Link>
                <span className="text-sm text-muted-foreground">
                  (Wallet integration)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                <Link
                  href="https://ipfs.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
                >
                  IPFS
                </Link>
                <span className="text-sm text-muted-foreground">
                  (Decentralized storage)
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Testing & Deployment</h2>
        <div className="rounded-xl border border-white/10 bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900/30 dark:to-gray-900/10 p-5 sm:p-6">
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <div>
                <span className="font-medium">Test Networks:</span> Ropsten,
                Rinkeby, Goerli (Ethereum testnets)
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <Link
                href="https://faucet.paradigm.xyz/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
              >
                Test ETH Faucets
              </Link>
              <span className="text-sm text-muted-foreground">
                (Free test tokens)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <Link
                href="https://github.com/OpenZeppelin/openzeppelin-contracts"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
              >
                OpenZeppelin
              </Link>
              <span className="text-sm text-muted-foreground">
                (Secure smart contract library)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <div>
                <span className="font-medium">Mainnet Deployment:</span>{" "}
                Ethereum, Polygon, Binance Smart Chain
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">
          Additional Learning Resources
        </h2>
        <div className="rounded-xl border border-white/10 bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900/30 dark:to-gray-900/10 p-5 sm:p-6">
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <Link
                href="https://ethereum.org/en/developers/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
              >
                Ethereum Developer Resources
              </Link>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <Link
                href="https://cryptozombies.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
              >
                CryptoZombies
              </Link>
              <span className="text-sm text-muted-foreground">
                (Learn Solidity by building games)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <Link
                href="https://www.dappuniversity.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
              >
                Dapp University
              </Link>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <Link
                href="https://consensys.net/academy/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
              >
                ConsenSys Academy
              </Link>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <Link
                href="https://www.blockchain.com/learning-portal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
              >
                Blockchain.com Learning Portal
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Best Practices</h2>
        <div className="rounded-xl border border-white/10 bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900/30 dark:to-gray-900/10 p-5 sm:p-6">
          <div className="space-y-4">
            <div className="rounded-md border border-red-200/40 bg-red-50/60 dark:bg-red-950/30 px-4 py-3">
              <p className="text-sm text-red-800 dark:text-red-200">
                <span className="font-semibold">Security Warning:</span> Always
                audit smart contracts before deploying to mainnet. Consider
                using established security frameworks and getting professional
                audits for production applications.
              </p>
            </div>

            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                <div>
                  Start with simple smart contracts and gradually increase
                  complexity
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                <div>Always test on testnets before mainnet deployment</div>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                <div>Understand gas optimization techniques</div>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                <div>Learn about common smart contract vulnerabilities</div>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                <div>
                  Keep up with the rapidly evolving blockchain ecosystem
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="pt-6 border-t border-white/10 text-sm text-muted-foreground">
        Blockchain development is rapidly evolving. Stay updated with the latest
        developments and always prioritize security!
      </footer>
    </div>
  );
}
