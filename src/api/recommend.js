/**
 * Created by appy on 2017/7/14.
 */
import jsonp from 'common/js/jsonp'
import { commonParams, options } from 'api/config'
import axios from 'axios'

export function getRecommend () {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data = Object.assign({}, commonParams, {
    plateform: 'h5',
    uin: 0,
    needNewCode: 1
  })
  return jsonp(url, data, options)
}

export function getDiscList () {
  const url = '/api/getDiscList'
  const data = Object.assign({}, commonParams, {
    hostUin: 0,
    platform: 'yqq',
    categoryId: 10000000,
    sortId: 5,
    sin: 0,
    ein: 29,
    needNewCode: 0,
    rnd: Math.random(),
    format: 'json'
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

