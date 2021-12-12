User.destroy_all
Post.destroy_all
@john = User.create!(
    username: 'John',
    email: 'john@gmail.com',
    password: '123456'
)

@testpost = Post.create!(
    title: 'First',
    body: 'post',
    user: @john
)