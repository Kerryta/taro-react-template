import type { IResponse } from './services'

export declare namespace LoginService {
	interface Params {
		code: string
		hospitalId: string
	}

	interface PatientProps {
		name: string
		nickName: string
		idCard: string
		contactPhone: string
		photo: string
		wxOpenId: string
		wxUnionId: string
		registerType: string
	}

	interface HospitalInfoProps {
		id: string
		hospitalName: string
		secretKey: string
	}

	interface Data {
		openId: string
		isPatientRegistered: boolean
		contactPhone: string
		token: string
		sessionKey: string
		patient: PatientProps
		hospitalInfo: HospitalInfoProps
	}

	type Res = IResponse<Data>
}
