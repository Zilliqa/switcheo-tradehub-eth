// See http://truffleframework.com/docs/advanced/configuration for more details
module.exports = {
    plugins: [
        'truffle-plugin-verify'
    ],
    api_keys: {
        etherscan: 'M56BUJAR279SGEEZIGYE94C4R1EB3RBYMY'
    },
    networks: {
        development: {
            host: '127.0.0.1',
            port: 7545,
            network_id: '*' // Match any network id
        },
        ropsten: {
            provider: function() {
                const PrivateKeyProvider = require('truffle-privatekey-provider')
                return new PrivateKeyProvider(
                    process.env.controlKey,
                    'https://ropsten.infura.io/v3/' + process.env.infuraKey
                )
            },
            network_id: 3,
            gasPrice: 50 * 1000000000
        },
        mainnet: {
            provider: function() {
                const PrivateKeyProvider = require('truffle-privatekey-provider')
                return new PrivateKeyProvider(
                    process.env.controlKey,
                    'https://mainnet.infura.io/v3/' + process.env.infuraKey
                )
            },
            network_id: 1,
            gasPrice: 20 * 1000000000
        },
        bsctestnet: {
            provider: function() {
                const PrivateKeyProvider = require('truffle-privatekey-provider')
                return new PrivateKeyProvider(
                    process.env.controlKey,
                    `https://data-seed-prebsc-1-s2.binance.org:8545/`
                )
            },
            network_id: 97,
            confirmations: 5,
            timeoutBlocks: 200,
            skipDryRun: true
        },
        bscmainnet: {
            provider: function() {
                const PrivateKeyProvider = require('truffle-privatekey-provider')
                return new PrivateKeyProvider(
                    process.env.controlKey,
                    `https://bsc-dataseed.binance.org/`
                )
            },
            network_id: 56,
            confirmations: 5,
            timeoutBlocks: 200,
            skipDryRun: true
        },
        hecomainnet: {
            provider: function() {
                const PrivateKeyProvider = require('truffle-privatekey-provider')
                return new PrivateKeyProvider(
                    process.env.controlKey,
                    `https://http-mainnet.hecochain.com/`
                )
            },
            network_id: 128,
            confirmations: 5,
            timeoutBlocks: 200,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '0.6.12',
            settings: {
                optimizer: {
                    enabled: true,
                    runs: 200
                }
            }
        }
    }
}
