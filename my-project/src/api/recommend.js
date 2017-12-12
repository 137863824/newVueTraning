import jsonp from 'common/js/jsonp'
import { commonParams,options } from './config'
import axios from 'axios'

export function getRecommend() {
    const url = 'https://c.y.qq.com/splcloud/fcgi-bin/p.fcg?g_tk=5381&format=jsonp&jsonpCallback=jsonp1'
    const data = Onject.assign({},commonParams,{
        
    })
    return jsonp(url,data,options)
}




// 自己随便定义的接口
export const recommendCarousel = '/static/recommend.json'