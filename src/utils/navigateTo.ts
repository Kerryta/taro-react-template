import { navigateTo } from '@tarojs/taro'

interface Query {
	[key: string]: string
}

export const routerPush = (url: string, query?: Query) => {
	if (!query) {
		navigateTo({ url })
	} else {
		let formatQuery = ''
		query &&
			Object.keys(query).forEach((item: string, index: number) => {
				formatQuery = formatQuery + item + '=' + Object.values(query)[index] + '&'
			})
		const formatUrl = url + '?' + formatQuery
		navigateTo({ url: formatUrl.substring(0, formatUrl.length - 1) })
	}
}
