import { sleep, check } from 'k6'
import { Rate } from 'k6/metrics'
import http from 'k6/http'

var url = require('url');
//var resolver = require('dns');

import { Resolver } from 'dns'
//import { URL } from 'url'

export let options = {
  thresholds: {
    error_rate: ['rate < 0.1'],
  },
  stages: [
    { duration: '1m', target: 1 },
  ],
  ext: {
    loadimpact: {
      distribution: {
        Tokyo: { loadZone: 'amazon:jp:tokyo', percent: 10 },
        Seoul: { loadZone: 'amazon:kr:seoul', percent: 10 },
        Singapore: { loadZone: 'amazon:sg:singapore', percent: 10 },
        Sydney: { loadZone: 'amazon:au:sydney', percent: 10 },
        HongKong: { loadZone: 'amazon:cn:hong kong', percent: 10 },
        Ohio: { loadZone: 'amazon:us:columbus', percent: 10 },
        London: { loadZone: 'amazon:gb:london', percent: 10 },
        Paris: { loadZone: 'amazon:fr:paris', percent: 10 },
        Dublin: { loadZone: 'amazon:ie:dublin', percent: 10 },
        Frankfurt: { loadZone: 'amazon:de:frankfurt', percent: 10 },
      },
    },
  },
}

export default function () {
  console.log("ok");


 
  var addr = 'http://www.aol.com';
  var q = url.parse(adr, true);
  //var myURL = new URL("http://www.aol.com");
  console.log(q);
  
}
