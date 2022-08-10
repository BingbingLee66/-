'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	const res = await uniCloud.httpclient.request(`https://oapi.dingtalk.com/robot/send?access_token=e04f7023ec59ad0bda0c6f832402d1e43bdc5b77e6f1f62af2fbec58debed95c&timestamp=${event.timestamp}&sign=${event.sign}`, {
		method: "POST",
		data: {
			msgtype: "link",
			link: {
				text: ` 姓名:${event.username}\n职位:${event.position}`,
				title: `${event.username}的报告生成啦~~`,
				picUrl: "https://static-744e5d5e-393d-4639-b783-616676ea9a34.bspapp.com/static/img/dingdingbg.48682f49.png",
				messageUrl: `https://static-744e5d5e-393d-4639-b783-616676ea9a34.bspapp.com/#/pages/characterAnalysis/characterAnalysis?number=${event.number}`
			}
		},
		contentType: 'json', // 指定以application/json发送data内的数据
		dataType: 'json' ,// 指定返回值为json格式，自动进行parse
	});
	//返回数据给客户端
	return res
};