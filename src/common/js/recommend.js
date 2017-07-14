/**
 * Created by appy on 2017/7/14.
 */
import jsonp from 'common/js/jsonp'
import { commonParams, options } from 'api/config'

export function getRecommend () {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data = Object({}, commonParams, {
    plateform: 'h5',
    uin: 0,
    needNewCode: 1
  })
  return jsonp(url, data, options)
}
