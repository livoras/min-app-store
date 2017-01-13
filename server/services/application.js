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

export const getApplicationsByCategoryId = (categoryId, offsetArg, limitArg) => {
  const offset = offsetArg * 1 || 0
  const limit = limitArg * 1 || 10
  return Application
    .find({ category: categoryId })
    .select({
      versions: { $slice: -1 }
    })
    .skip(offset)
    .limit(limit)
}
