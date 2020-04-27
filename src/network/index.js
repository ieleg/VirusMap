import jsonp from 'jsonp'
export function geteData(){
  
  return new Promise((resove,reject) => {
    jsonp(
      'http://interface.sina.cn/news/wap/fymap2020_data.d.json?_=1580892522427', {}, (err, data) => {
        if(err) reject(err);
        else resove(data);
      })
  })

}

