import http from 'k6/http';
import { check } from 'k6';

// const randomId = Math.floor(Math.random() * 12000000);

export let options = {
  vus: 100,
  duration: '30s'
  //   thresholds: {
  //     errors: ['rate<0.01']
  //   }
  // rps: 1800
};

export default function() {
  let res = http.get(`http://localhost:3000`);
  // console.log('Response time was ' + String(res.timings.duration) + ' ms');
  check(res, {
    'status was 200': r => r.status == 200,
    'transaction time was ok': r => r.timings.duration < 600
  });
}
