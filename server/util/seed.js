const {
  Contact,
  Story,
  Blog,
} = require('./models');

const contacts = [
  {firstname: "Billy", lastname: "Smith", email: "billy@email.com", phone: "1231231234", address: "", newsletter: false, lead: true, notes: "Has a large back yard that would be a great fit for clover"},
  {firstname: "Bobby", lastname: "Martin", email: "bobby@email.com", phone: "2342342345", address: "", newsletter: true, lead: false, notes: "May be interested but does not yet have funds"},
  {firstname: "Jeffery", lastname: "Swinger", email: "jeffery@email.com", phone: "3453453456", address: "", newsletter: false, lead: true, notes: "Starting on lawn next week"},
  {firstname: "Tommy", lastname: "Hill", email: "tommy@email.com", phone: "4564564567", address: "", newsletter: true, lead: true, notes: "Met at farmers market, was very interested in replacing lawn"},
  {firstname: "Timmy", lastname: "Tom", email: "timmy@email.com", phone: "5675675678", address: "", newsletter: false, lead: false, notes: "Another interested individual, need to follow up"},
  {firstname: "Martin", lastname: "Blanding", email: "martin@email.com", phone: "6786786789", address: "", newsletter: true, lead: true, notes: "Scheduled a consultation for next week"},
  {firstname: "Chuck", lastname: "Norris", email: "chuck@email.com", phone: "7897897890", address: "", newsletter: false, lead: false, notes: "Already replaced lawn but may be interested in future"},
  {firstname: "Andrew", lastname: "Bob", email: "andrew@email.com", phone: "1234567890", address: "", newsletter: true, lead: false, notes: "Another happy customer"}
]
const storys = [
  {storyTitle: "Cottage Style Success", storyDescription: "Et commodo dolore exercitation labore qui. Deserunt pariatur minim nostrud laboris exercitation ullamco aute laboris amet amet enim eu. Nulla dolor non tempor voluptate esse excepteur adipisicing deserunt do ad. Laboris anim proident consectetur consectetur ea cillum aliqua.", storyPhoto: ""},
  {storyTitle: "Large Scale Operation", storyDescription: "Do voluptate duis aliqua anim dolor. Veniam fugiat irure do commodo cupidatat occaecat pariatur eu est enim dolore mollit esse adipisicing. Mollit in sint ad aliquip culpa. Nulla qui labore veniam Lorem nostrud ex consequat enim cillum. Est nisi deserunt consectetur et elit. Velit est officia ullamco incididunt occaecat non eu.", storyPhoto: ""},
  {storyTitle: "Some of Our Best Work", storyDescription: "Id cillum tempor adipisicing sit officia ex dolor minim. Quis adipisicing dolore quis in consequat reprehenderit velit sunt do et ullamco sunt ea. Ipsum anim et consequat reprehenderit irure qui exercitation eu do reprehenderit. Officia velit irure qui in laboris nisi ad laborum sint esse do laboris Lorem. Incididunt quis quis excepteur do ex sunt. Adipisicing nostrud eiusmod amet in pariatur consectetur minim.", storyPhoto: ""},
  {storyTitle: "Cabin in the Woods", storyDescription: "In duis dolor cupidatat eiusmod ipsum veniam. Ex enim enim voluptate nulla quis eu consequat magna do quis esse pariatur. Nulla qui proident laboris tempor non non commodo mollit aliquip. Aliqua quis fugiat irure nulla. Commodo duis sint culpa reprehenderit fugiat enim anim. Proident ut labore ex ullamco sint et culpa ipsum laborum consequat consectetur ad. Nostrud minim cillum consequat enim do id cupidatat occaecat.", storyPhoto: ""},
  {storyTitle: "Front and Back", storyDescription: "Mollit reprehenderit ipsum anim ipsum laborum. Sit tempor nostrud qui eiusmod sit. Consequat commodo incididunt qui minim aliqua minim. Voluptate pariatur id veniam laboris dolore id incididunt nisi est ut. Dolore nulla irure reprehenderit fugiat enim et anim nulla quis elit incididunt eu anim ullamco. Ad veniam eu labore mollit consectetur sit labore aliquip cupidatat ipsum duis. Excepteur velit minim esse non ex excepteur occaecat laboris anim.", storyPhoto: ""},
  {storyTitle: "Greener than Green", storyDescription: "Elit dolore cillum enim amet proident et velit irure esse. Et proident anim occaecat sint qui et sit. Culpa cupidatat consectetur nostrud exercitation sit proident dolore in duis.", storyPhoto: ""}
]
const blogs = [
  {blogTitle: "Benefits of Clover", blogDescription: "Exercitation amet veniam ipsum aliqua veniam Lorem. Lorem enim adipisicing aute ut nisi sit. Commodo non excepteur proident fugiat do anim nostrud. Aliqua labore consectetur consectetur ullamco officia consequat dolor officia enim. Exercitation ad adipisicing do proident adipisicing quis nisi anim. Dolore laboris cupidatat eu excepteur.", blogPhoto: "", blogLink: ""},
  {blogTitle: "Science behind Clover", blogDescription: "Aute adipisicing veniam elit sint fugiat laborum qui sit Lorem id irure. Non enim nisi esse voluptate. Labore tempor tempor qui mollit velit deserunt nisi quis do cupidatat dolore. Ea aliqua et aliqua in adipisicing commodo sunt fugiat proident sit. Aliqua nostrud fugiat labore sunt ex occaecat ea do. Officia non veniam quis ullamco do Lorem. Proident quis ex quis cillum fugiat culpa in non amet nulla.", blogPhoto: "", blogLink: ""},
  {blogTitle: "How Clover Works", blogDescription: "Eiusmod laborum sint nisi anim labore labore nulla ea nostrud eu dolore. Do Lorem nulla occaecat cillum irure quis aliqua. Nisi dolor excepteur nostrud voluptate labore eu aliquip est fugiat elit sunt officia deserunt in. Laborum officia et exercitation cillum occaecat eu ad mollit adipisicing elit non. Adipisicing id do nisi cillum ad cupidatat et esse velit est. Irure nulla nulla anim dolore nulla adipisicing velit. Fugiat irure Lorem Lorem ullamco nulla.", blogPhoto: "", blogLink: ""},
  {blogTitle: "Types of Clover", blogDescription: "Ipsum qui ad voluptate velit voluptate enim irure sint incididunt sunt ipsum dolor nulla. Et Lorem dolore reprehenderit sint reprehenderit officia commodo exercitation. Enim in tempor amet officia id velit exercitation ea aliquip et sunt ad exercitation. Ut ad reprehenderit minim esse velit do amet incididunt exercitation minim culpa nulla dolor aliqua.", blogPhoto: "", blogLink: ""},
  {blogTitle: "Clover Economics", blogDescription: "Ullamco consectetur consequat consectetur reprehenderit. Excepteur magna Lorem nulla enim mollit ea amet. Nostrud proident anim cillum velit. Ea consectetur elit minim laborum culpa exercitation do proident incididunt exercitation in nulla aute excepteur. Consectetur eu amet id consequat magna sint ut ad. Elit id officia exercitation nulla dolor dolore deserunt non elit Lorem deserunt.", blogPhoto: "", blogLink: ""},
  {blogTitle: "Why Clover?", blogDescription: "Eiusmod voluptate elit sint fugiat magna. Qui et et nulla amet consequat enim minim nostrud culpa. Et fugiat aliquip laborum qui. Est irure ullamco duis aliquip elit dolor labore et elit ex officia ipsum ullamco ex. Eu eu ut mollit incididunt elit anim occaecat consequat fugiat mollit ullamco proident. Consequat voluptate enim pariatur esse sint aliqua ullamco duis consequat reprehenderit magna ea eu velit.", blogPhoto: "", blogLink: ""}
]

const seed = async () => {
  try {
    await Contact.bulkCreate(contacts)
    await Story.bulkCreate(storys)
    await Blog.bulkCreate(blogs);
  }
  catch(err) {
    console.log(err)
  }
};

module.exports = seed;