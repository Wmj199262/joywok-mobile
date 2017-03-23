import request from '../utils/request';
import qs from 'qs';

export async function query(params) {
  return request('/api/message');//传递参数
}

export async function update(params) {
  return request('/api/message', {
    method: 'put',
    body: qs.stringify(params),
  });
}
