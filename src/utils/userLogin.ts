import { login } from '@tarojs/taro'
import { loginApi } from '../service/login'

export const userLogin = () => {
	return new Promise((resolve, reject) => {
		login({
			success: async (result) => {
				const res = await loginApi({
					code: result.code,
					hospitalId: '1'
				})
				res.code === '200' ? resolve(res) : reject(res)
			}
		})
	})
}
