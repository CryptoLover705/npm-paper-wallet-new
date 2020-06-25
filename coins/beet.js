var CoinKey = require('coinkey');
var HDKey = require('hdkey');
var CoinInfo = require('coininfo');

exports.generateWallet = function(seed, symbol) {
  var info = {
    versions: {
      bip32: {
        private: 0x0221312b,
        public: 0x022d2573
      },
      bip44: 222,
      private: 0x7F,
      public: 0x4B,
      scripthash: 0x55
    }
  };

  var root = HDKey.fromMasterSeed(seed);
  var key = root.derive(`m/44'/${info.versions.bip44}'/0'/0/0`);
  var ck = new CoinKey(key.privateKey, info.versions);
  
    return {
    publicAddress: ck.publicAddress,
    privateKey: ck.privateWif
  };
};
