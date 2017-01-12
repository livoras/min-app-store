import Application from '../models/application'

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
