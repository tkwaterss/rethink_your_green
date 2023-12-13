const {
  Contact,
  Blog,
  Admin,
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
const blogs = [
  {blogTitle: "Cottage Style Success", blogDescription: "Et commodo dolore exercitation labore qui. Deserunt pariatur minim nostrud laboris exercitation ullamco aute laboris amet amet enim eu. Nulla dolor non tempor voluptate esse excepteur adipisicing deserunt do ad. Laboris anim proident consectetur consectetur ea cillum aliqua.", blogPhoto: "https://static.wixstatic.com/media/dd9265_a8f0635e7dff47f195446fe40c34f66b~mv2.jpeg/v1/fill/w_1110,h_833,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/dd9265_a8f0635e7dff47f195446fe40c34f66b~mv2.jpeg"},
  {blogTitle: "Large Scale Operation", blogDescription: "Do voluptate duis aliqua anim dolor. Veniam fugiat irure do commodo cupidatat occaecat pariatur eu est enim dolore mollit esse adipisicing. Mollit in sint ad aliquip culpa. Nulla qui labore veniam Lorem nostrud ex consequat enim cillum. Est nisi deserunt consectetur et elit. Velit est officia ullamco incididunt occaecat non eu.", blogPhoto: "https://i0.wp.com/laidbackgardener.blog/wp-content/uploads/2022/02/2022022I-thoracentesis.science-jpeg.jpeg?w=1000&ssl=1"},
  {blogTitle: "Some of Our Best Work", blogDescription: "Id cillum tempor adipisicing sit officia ex dolor minim. Quis adipisicing dolore quis in consequat reprehenderit velit sunt do et ullamco sunt ea. Ipsum anim et consequat reprehenderit irure qui exercitation eu do reprehenderit. Officia velit irure qui in laboris nisi ad laborum sint esse do laboris Lorem. Incididunt quis quis excepteur do ex sunt. Adipisicing nostrud eiusmod amet in pariatur consectetur minim.", blogPhoto: "https://thinkoutsidethelawn.com/wp-content/uploads/2020/08/clover-lawn-tree-hugger-1024x1024.jpg"},
  {blogTitle: "Cabin in the Woods", blogDescription: "In duis dolor cupidatat eiusmod ipsum veniam. Ex enim enim voluptate nulla quis eu consequat magna do quis esse pariatur. Nulla qui proident laboris tempor non non commodo mollit aliquip. Aliqua quis fugiat irure nulla. Commodo duis sint culpa reprehenderit fugiat enim anim. Proident ut labore ex ullamco sint et culpa ipsum laborum consequat consectetur ad. Nostrud minim cillum consequat enim do id cupidatat occaecat.", blogPhoto: "https://hips.hearstapps.com/hmg-prod/images/maedayfarm-instagram-clover-lawn-641cbc4a7f54b.png?crop=1xw:0.7991513437057991xh;center,top&resize=980:*"},
  {blogTitle: "Front and Back", blogDescription: "Mollit reprehenderit ipsum anim ipsum laborum. Sit tempor nostrud qui eiusmod sit. Consequat commodo incididunt qui minim aliqua minim. Voluptate pariatur id veniam laboris dolore id incididunt nisi est ut. Dolore nulla irure reprehenderit fugiat enim et anim nulla quis elit incididunt eu anim ullamco. Ad veniam eu labore mollit consectetur sit labore aliquip cupidatat ipsum duis. Excepteur velit minim esse non ex excepteur occaecat laboris anim.", blogPhoto: "https://lirp.cdn-website.com/05d483cd/dms3rep/multi/opt/Clover-Lawn-in-Minneapolis-Minnesota-1920w.jpeg"},
  {blogTitle: "Greener than Green", blogDescription: "Elit dolore cillum enim amet proident et velit irure esse. Et proident anim occaecat sint qui et sit. Culpa cupidatat consectetur nostrud exercitation sit proident dolore in duis.", blogPhoto: "https://preview.redd.it/qond7fs6n09b1.jpg?width=640&crop=smart&auto=webp&s=ae488935e294d27fde1893f7ccf1976173391726"},
  {blogTitle: "Benefits of Clover", blogDescription: "Exercitation amet veniam ipsum aliqua veniam Lorem. Lorem enim adipisicing aute ut nisi sit. Commodo non excepteur proident fugiat do anim nostrud. Aliqua labore consectetur consectetur ullamco officia consequat dolor officia enim. Exercitation ad adipisicing do proident adipisicing quis nisi anim. Dolore laboris cupidatat eu excepteur.", blogPhoto: "https://i0.wp.com/www.housebythebaydesign.com/wp-content/uploads/2019/08/lawn-after-2.jpg?w=800&ssl=1", blogLink: ""},
  {blogTitle: "Science behind Clover", blogDescription: "Aute adipisicing veniam elit sint fugiat laborum qui sit Lorem id irure. Non enim nisi esse voluptate. Labore tempor tempor qui mollit velit deserunt nisi quis do cupidatat dolore. Ea aliqua et aliqua in adipisicing commodo sunt fugiat proident sit. Aliqua nostrud fugiat labore sunt ex occaecat ea do. Officia non veniam quis ullamco do Lorem. Proident quis ex quis cillum fugiat culpa in non amet nulla.", blogPhoto: "https://www.fleetscience.org/sites/default/files/2020-11/4-leaf_clover.jpg", blogLink: ""},
  {blogTitle: "How Clover Works", blogDescription: "Eiusmod laborum sint nisi anim labore labore nulla ea nostrud eu dolore. Do Lorem nulla occaecat cillum irure quis aliqua. Nisi dolor excepteur nostrud voluptate labore eu aliquip est fugiat elit sunt officia deserunt in. Laborum officia et exercitation cillum occaecat eu ad mollit adipisicing elit non. Adipisicing id do nisi cillum ad cupidatat et esse velit est. Irure nulla nulla anim dolore nulla adipisicing velit. Fugiat irure Lorem Lorem ullamco nulla.", blogPhoto: "https://i0.wp.com/boxycolonial.com/wp-content/uploads/2016/05/clover07s.jpg?w=700&ssl=1", blogLink: ""},
  {blogTitle: "Types of Clover", blogDescription: "Ipsum qui ad voluptate velit voluptate enim irure sint incididunt sunt ipsum dolor nulla. Et Lorem dolore reprehenderit sint reprehenderit officia commodo exercitation. Enim in tempor amet officia id velit exercitation ea aliquip et sunt ad exercitation. Ut ad reprehenderit minim esse velit do amet incididunt exercitation minim culpa nulla dolor aliqua.", blogPhoto: "https://diggingri.files.wordpress.com/2014/07/img_2104.jpg?w=768&h=1024", blogLink: ""},
  {blogTitle: "Clover Economics", blogDescription: "Ullamco consectetur consequat consectetur reprehenderit. Excepteur magna Lorem nulla enim mollit ea amet. Nostrud proident anim cillum velit. Ea consectetur elit minim laborum culpa exercitation do proident incididunt exercitation in nulla aute excepteur. Consectetur eu amet id consequat magna sint ut ad. Elit id officia exercitation nulla dolor dolore deserunt non elit Lorem deserunt.", blogPhoto: "https://preview.redd.it/c90v2wrag0u61.jpg?width=960&crop=smart&auto=webp&s=87781f6998d13a6d9579307af21e4367a1e257a1", blogLink: ""},
  {blogTitle: "Why Clover?", blogDescription: "Eiusmod voluptate elit sint fugiat magna. Qui et et nulla amet consequat enim minim nostrud culpa. Et fugiat aliquip laborum qui. Est irure ullamco duis aliquip elit dolor labore et elit ex officia ipsum ullamco ex. Eu eu ut mollit incididunt elit anim occaecat consequat fugiat mollit ullamco proident. Consequat voluptate enim pariatur esse sint aliqua ullamco duis consequat reprehenderit magna ea eu velit.", blogPhoto: "https://bloximages.newyork1.vip.townnews.com/gazette.com/content/tncms/assets/v3/editorial/d/69/d69408ec-e9fd-11ed-a66a-b7b80e56a178/6452d95b6b72a.image.jpg?resize=946%2C500", blogLink: ""}
]
const admins = [
  {firstname: 'Tobin', lastname: 'Waters', email: 'tkwaterss@gmail.com', phone: '6179214234'}
]

const seed = async () => {
  try {
    await Contact.bulkCreate(contacts)
    await Blog.bulkCreate(blogs);
    await Admin.bulkCreate(admins);
  }
  catch(err) {
    console.log(err)
  }
};

module.exports = seed;