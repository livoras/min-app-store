import Application from '../daos/application'

export const createApplication = async (applicationData) => {
  return await Application.create(applicationData)
}

export const deleteApplication = async (applicationId) => {
  const ret = await Application.remove({ _id: applicationId })
  // console.log('This result is ', ret.result)
  return ret.result.n === 0
    ? Promise.reject('未能找到相应的应用程序')
    : Promise.resolve(true)
}
