
Post.destroy_all
User.destroy_all
@john = User.create!(
    username: 'John',
    email: 'john@gmail.com',
    password: '123456'
)

@testpost1 = Post.create!(
    title: 'WEB3',
    body: 'It is a cool concept.',
    user: @john
)
@testpost2 = Post.create!(
    title: 'WEB2',
    body: 'It is soo old.',
    user: @john
)