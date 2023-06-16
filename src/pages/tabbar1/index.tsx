import { View } from '@tarojs/components'
import { navigateTo } from '@tarojs/taro'

const TabBar1 = () => {
	return (
		<View>
			<View
				onClick={() => {
					navigateTo({
						url: '/pages2/home/index'
					})
				}}
			>
				TabBar1
			</View>
		</View>
	)
}

export default TabBar1
