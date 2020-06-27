var CoinKey = require('coinkey');
var HDKey = require('hdkey');
var CoinInfo = require('coininfo');

exports.generateWallet = function(seed, symbol) {
  var info = {
    versions: {
      bip32: {
        private: 0x0488b21e,
        public: 0x0488ade4
      },
      bech32_hrp: 'sugar',
      public: 0x3F
      private: 0x80
      scripthash: 0x7D
    }
  }
  
  var root = HDKey.fromMasterSeed(seed);
  var key = root.derive(`m/44'/${info.versions.bech32_hrp}'/0'/0/0');
  var ck = new CoinKey(key.privateKey, info.versions);
  
    return {
    publicAddress: ck.publicAddress
    privateKey: ck.privateWif
    };
};
