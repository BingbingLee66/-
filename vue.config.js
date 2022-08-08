module.exports = {
	devServer:{
		port:'8080',
		disableHostCheck:true,
		proxy:{
			'/dpc':{
				target:'https://oapi.dingtalk.com',
				changeOrigin:true,
				pathRewrite:{
					'^/dpc': ''
				}
			}
		}
	}
}