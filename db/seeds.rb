
Post.destroy_all
User.destroy_all
@john = User.create!(
    username: 'John',
    email: 'john@gmail.com',
    password: '123456',
    profile_pic: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcultivatedculture.com%2Flinkedin-profile-picture%2F&psig=AOvVaw2rA5be-XUnHwuRJbx2Fk0v&ust=1639593184309000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCPDv_9z24_QCFQAAAAAdAAAAABAI',
    bio: "I love decentralization and can't wait to see it happen in the future!",
    interests: ['WEB3', 'Crypto', 'NFTs', 'Metaverse', 'DeFi']
)
@sam = User.create!(
    username: 'Sam',
    email: 'sam@gmail.com',
    password: '123456',
    profile_pic: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcultivatedculture.com%2Flinkedin-profile-picture%2F&psig=AOvVaw2rA5be-XUnHwuRJbx2Fk0v&ust=1639593184309000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCPDv_9z24_QCFQAAAAAdAAAAABAI',
    bio: "I love decentralization and can't wait to see it happen in the future!",
    interests: ['WEB3', 'Crypto', 'NFTs', 'Metaverse', 'DeFi', 'AI']
)

@testpost1 = Post.create!(
    title: 'WEB3',
    body: 'It is a cool concept.',
    user: @john
)
@testpost2 = Post.create!(
    title: 'WEB2',
    body: 'It is soo old.',
    user: @sam
)