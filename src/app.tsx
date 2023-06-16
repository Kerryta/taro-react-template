import { PropsWithChildren } from 'react'
import './app.scss'
import 'taro-ui/dist/style/index.scss'
import { useDidShow } from '@tarojs/taro'
import { userLogin } from './utils/userLogin'

const App = (props: PropsWithChildren) => {
	useDidShow(async () => {
		const res = await userLogin()
	})

	return props.children
}

export default App
