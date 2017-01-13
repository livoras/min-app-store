import Collection from '../models/collection'

export const getCollectionsByCategoryId = async (categoryId) => {
  const colletions = await Collection.find({
    category: categoryId,
    isVisible: true
  })
  .sort({ priority: -1 })
  .populate('category')
  .populate({
    path: 'applications',
    select: { versions: { $slice: -1 } }, // 返回最新的版本就可以了
    populate: {
      path: 'category'
    }
  })
  return colletions
}
