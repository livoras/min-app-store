import Application from '../models/application'

export const createApplication = async (applicationData) => {
  return await Application.create(applicationData)
}

export const deleteApplication = async (applicationId) => {
  const ret = await Application.remove({ _id: applicationId })
  return ret.result.n === 0
    ? Promise.reject({ status: 404, message: '未能找到相应的应用程序' })
    : Promise.resolve(true)
}

export const updateApplication = async (applicationId, newApplication) => {
  const application = await Application.findOne({ _id: applicationId })
  Object.assign(application, newApplication)
  await application.save()
  return true
}

export const getApplication = async (applicationId) => {
  return Application.findOne({ _id: applicationId })
}

export const voteOnApplication = async (applicationId, vote) => {
  const application = await Application.findOne({ _id: applicationId })
  application.totalVote += vote
  application.voteCount += 1
  await application.save()
  return {
    totalVote: application.totalVote,
    voteCount: application.voteCount
  }
}
