import request from './axios'
import type { LoginService } from '../types/login'

// 1. 小程序登录
export const loginApi = (params: LoginService.Params): Promise<LoginService.Res> => {
	return request.post('/sys/wxMiniProgramr/wxLogin', params)
}
