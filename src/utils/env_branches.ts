interface EnvMapProps {
	base_url: () => string
}

export const queryEnvironment = (): boolean => process.env.NODE_ENV === 'development'

const manageEnvMap: EnvMapProps = {
	base_url: () =>
		queryEnvironment()
			? 'https://development-request-address:40001/api/patient'
			: 'https://production-request-address:40001'
}

export const manageEnvBranches = (type: keyof EnvMapProps) => {
	return manageEnvMap[type]()
}
