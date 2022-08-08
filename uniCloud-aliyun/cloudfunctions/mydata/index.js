'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
   const result =await uniCloud.httpclient.request(event.queryStringParameters.url,{
	method:'POST',
	contentType:'json',
	dataType:'json',
	data:event.queryStringParameters
   })
	
	//返回数据给客户端
	return result
};
