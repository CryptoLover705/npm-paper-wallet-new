var CoinKey = require('coinkey');
var HDKey = require('hdkey');
var CoinInfo = require('coininfo');

exports.generateWallet = function(seed, symbol) {
  var info = {
    versions: {
      bip32: {
        private: 0x0488ade4,
        public: 0x0488b21e
      },
      bip44: 222,
      private: 0x53,
      public: 0x17,
      scripthash: 0x3F
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
