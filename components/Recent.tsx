import React from 'react'
import Section from './ui/Section'
import BlogCard from './ui/BlogCard'

const Recent = () => {
  return (
    <Section title='Recent' href='/blogs'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5   ">
        {posts.map((post) => <BlogCard key={post.id} post={post} />)}
      </div>
    </Section>
  )
}

export default Recent




const posts =[
    {
      "id": 1,
      "slug": "lorem-ipsum",
      "url": "https://jsonplaceholder.org/posts/lorem-ipsum",
      "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "content": "Ante taciti nulla sit libero orci sed nam. Sagittis suspendisse gravida ornare iaculis cras nullam varius ac ullamcorper. Nunc euismod hendrerit netus ligula aptent potenti. Aliquam volutpat nibh scelerisque at. Ipsum molestie phasellus euismod sagittis mauris, erat ut. Gravida morbi, sagittis blandit quis ipsum mi mus semper dictum amet himenaeos. Accumsan non congue praesent interdum habitasse turpis orci. Ante curabitur porttitor ullamcorper sagittis sem donec, inceptos cubilia venenatis ac. Augue fringilla sodales in ullamcorper enim curae; rutrum hac in sociis! Scelerisque integer varius et euismod aenean nulla. Quam habitasse risus nullam enim. Ultrices etiam viverra mattis aliquam? Consectetur velit vel volutpat eget curae;. Volutpat class mus elementum pulvinar! Nisi tincidunt volutpat consectetur. Primis morbi pulvinar est montes diam himenaeos duis elit est orci. Taciti sociis aptent venenatis dui malesuada dui justo faucibus primis consequat volutpat. Rhoncus ante purus eros nibh, id et hendrerit pellentesque scelerisque vehicula sollicitudin quam. Hac class vitae natoque tortor dolor dui praesent suspendisse. Vehicula euismod tincidunt odio platea aenean habitasse neque ad proin. Bibendum phasellus enim fames risus eget felis et sem fringilla etiam. Integer.",
      "image": "https://dummyimage.com/800x430/FFFFFF/lorem-ipsum.png&text=jsonplaceholder.org",
      "thumbnail": "https://dummyimage.com/200x200/FFFFFF/lorem-ipsum.png&text=jsonplaceholder.org",
      "status": "published",
      "category": "lorem",
      "publishedAt": "04/02/2023 13:25:21",
      "updatedAt": "14/03/2023 17:22:20",
      "userId": 1
    },
    {
      "id": 2,
      "slug": "condimentum.",
      "url": "https://jsonplaceholder.org/posts/condimentum.",
      "title": "Quisque non ligula laoreet, volutpat velit cursus, condimentum arcu.",
      "content": "Placerat erat consectetur mauris sollicitudin facilisis praesent nam nascetur! Semper odio est condimentum sollicitudin fames orci porttitor consequat platea urna. Sit faucibus luctus sollicitudin, purus euismod. Volutpat habitasse molestie magnis tempus tempus conubia! Quam fringilla vitae, lacus tortor fusce. Ante enim pretium proin nec, bibendum tempus ipsum porta. Hac nunc nunc pretium! Mauris consectetur, nulla taciti class. Porttitor, nulla rutrum integer torquent accumsan magnis? Morbi condimentum senectus pulvinar duis; himenaeos adipiscing. Lacus facilisi ad scelerisque vestibulum nisl. Mi torquent curae; gravida molestie sagittis imperdiet habitasse aenean mus. Nibh nibh nisl parturient odio eros lorem suspendisse blandit torquent cum elementum. Nibh feugiat metus cursus rutrum feugiat lacinia suspendisse suscipit mollis dolor eget nisl. Adipiscing ullamcorper lobortis in. Tellus taciti fames elit consectetur laoreet pulvinar. Potenti tristique a mus, eget pharetra! Viverra.",
      "image": "https://dummyimage.com/800x430/08110f/condimentum..png&text=jsonplaceholder.org",
      "thumbnail": "https://dummyimage.com/200x200/08110f/condimentum..png&text=jsonplaceholder.org",
      "status": "published",
      "category": "lorem",
      "publishedAt": "25/12/2022 13:10:07",
      "updatedAt": "19/01/2023 08:25:17",
      "userId": 2
    },
    {
      "id": 3,
      "slug": "morbi-dictum",
      "url": "https://jsonplaceholder.org/posts/morbi-dictum",
      "title": "Morbi dictum dui vel bibendum ultrices.",
      "content": "Et ullamcorper, litora integer taciti suspendisse. Sociosqu hac bibendum elit quisque et porta in viverra sagittis conubia luctus himenaeos. Tempus ultricies egestas tempus aliquet commodo netus ultricies semper montes turpis eros dis. Scelerisque torquent enim ac pellentesque primis congue consectetur varius congue erat curae;! Scelerisque nunc condimentum class erat ultrices. Fringilla eros vulputate quisque platea aptent vivamus porta natoque. Laoreet vehicula aliquam, integer ornare interdum magna. Molestie facilisi volutpat platea primis aptent facilisi etiam ut vestibulum dis sagittis. Fames elit tincidunt id. Ante id tempus sollicitudin platea. Sagittis id fermentum litora placerat ligula primis consectetur dictum. Ligula orci facilisi dis, egestas tempus urna sollicitudin laoreet turpis tincidunt elementum imperdiet. Lobortis convallis natoque dictum dapibus enim accumsan diam pulvinar fusce. Proin nullam duis pretium hac hac dictum purus neque eget rutrum. Suspendisse sodales libero cum felis. Porta curabitur lobortis libero mollis at tempus egestas luctus erat sapien!",
      "image": "https://dummyimage.com/800x430/5e917f/morbi-dictum.png&text=jsonplaceholder.org",
      "thumbnail": "https://dummyimage.com/200x200/5e917f/morbi-dictum.png&text=jsonplaceholder.org",
      "status": "published",
      "category": "lorem",
      "publishedAt": "06/02/2023 10:19:53",
      "updatedAt": "16/01/2023 07:25:47",
      "userId": 3
    },
    {
      "id": 4,
      "slug": "feugiat",
      "url": "https://jsonplaceholder.org/posts/feugiat",
      "title": "Duis bibendum augue et feugiat imperdiet.",
      "content": "Primis conubia vivamus vestibulum curabitur! Pellentesque ad vitae cras mollis morbi elementum. Quisque gravida arcu vehicula morbi scelerisque curae; mi sapien. Elementum cum interdum senectus dolor vulputate. Pulvinar ultricies mauris arcu primis aenean arcu sagittis. Vulputate mollis fermentum luctus magnis convallis pellentesque commodo montes ut suspendisse turpis. Fermentum dapibus mattis sociosqu condimentum aliquam. Ut magna vel lacinia dis luctus tincidunt dapibus montes ligula dictumst potenti duis. Lobortis lorem litora auctor parturient mollis vel etiam fusce euismod pretium? Integer per faucibus netus fringilla. Libero mi rhoncus est aliquam? Montes ultricies consequat hac fusce tempus lacinia taciti. Sagittis; luctus vestibulum mus libero eleifend. Tempor arcu gravida bibendum quam aptent. Ad scelerisque lectus volutpat semper, luctus urna magnis duis vitae aliquam. Ut iaculis magna nullam vivamus sociis cubilia maecenas accumsan. Inceptos proin montes ultricies nunc bibendum vestibulum lorem. Fames curae; lectus tempor lacus? Habitant nullam imperdiet eleifend sem odio tempor sit! Purus ornare dui, erat dictumst maecenas turpis penatibus. Cursus tellus congue luctus etiam pharetra potenti sagittis consequat odio. Integer gravida habitasse duis cum metus sociosqu aenean aliquet commodo cubilia imperdiet? Ante litora sapien rutrum sodales tortor odio tempor cubilia mus erat nascetur! Senectus natoque vehicula dui gravida.",
      "image": "https://dummyimage.com/800x430/81b563/feugiat.png&text=jsonplaceholder.org",
      "thumbnail": "https://dummyimage.com/200x200/81b563/feugiat.png&text=jsonplaceholder.org",
      "status": "published",
      "category": "lorem",
      "publishedAt": "13/01/2023 15:18:26",
      "updatedAt": "23/01/2023 10:53:55",
      "userId": 4
    },
    {
      "id": 5,
      "slug": "integer",
      "url": "https://jsonplaceholder.org/posts/integer",
      "title": "Integer molestie metus eu felis facilisis venenatis.",
      "content": "Taciti proin leo faucibus montes parturient cursus quis sodales hac magna dui cursus. Neque aliquam dolor mollis commodo primis. Quisque suscipit proin pharetra nascetur quisque litora cubilia arcu. Cursus, mattis venenatis ullamcorper fringilla donec dictumst. Eros pulvinar eu nibh sodales tincidunt leo turpis justo purus facilisi. Cum vitae suscipit aenean cum lorem etiam molestie viverra condimentum. Proin cursus hac elit eros. Est risus vitae eu sociis magnis, malesuada rutrum. Sodales non cras ridiculus venenatis malesuada dui quam parturient cubilia tristique. Non elementum mollis turpis conubia velit semper natoque ac magnis. Hendrerit tortor ridiculus, fusce nec. Vel interdum condimentum semper fringilla nunc per lobortis senectus condimentum maecenas. Litora tristique, aliquet laoreet amet. Aptent cubilia libero quam dignissim urna. Orci donec morbi blandit pellentesque aptent ac blandit montes ultrices dignissim suspendisse. Class lacus egestas in eu ac condimentum cras.",
      "image": "https://dummyimage.com/800x430/10421c/integer.png&text=jsonplaceholder.org",
      "thumbnail": "https://dummyimage.com/200x200/10421c/integer.png&text=jsonplaceholder.org",
      "status": "published",
      "category": "lorem",
      "publishedAt": "22/12/2022 14:53:38",
      "updatedAt": "16/01/2023 21:56:46",
      "userId": 5
    },
    {
      "id": 6,
      "slug": "elementum",
      "url": "https://jsonplaceholder.org/posts/elementum",
      "title": "Nam vehicula risus non sapien tincidunt, sit amet elementum turpis posuere.",
      "content": "Risus nascetur sodales gravida hendrerit posuere primis feugiat. Eget sodales eget non odio nostra. Montes platea hac inceptos parturient diam elementum auctor luctus. Habitasse odio tempus ut ornare sagittis curae; lobortis sed sapien sit in dictum? Nascetur conubia dictumst netus diam nec nisi integer proin. Suspendisse egestas platea semper sagittis neque nec nulla diam habitasse lacinia. Luctus egestas litora, nisi porta posuere curabitur. Ante, ridiculus nisi egestas urna ad suscipit a arcu leo. Vulputate dignissim commodo montes placerat mattis, faucibus gravida porta erat erat natoque. Luctus velit duis, nec quis senectus nulla fusce habitant arcu. Etiam phasellus egestas nostra dignissim. Lacus scelerisque pretium taciti quam venenatis habitasse. Eget sociis rhoncus dolor nascetur magnis ornare nibh. Aenean inceptos justo vivamus primis. Inceptos curabitur auctor pharetra id ornare dictum mollis ipsum nam aliquet purus. In ultrices facilisis facilisi. At curae; sem non fringilla vestibulum porttitor faucibus! Sapien curae;, scelerisque suspendisse nisi vehicula. Blandit a fusce quis feugiat cursus. Tempor tortor bibendum sodales. Ultrices sed egestas lectus? Varius placerat a primis libero quam ultricies laoreet.",
      "image": "https://dummyimage.com/800x430/010504/elementum.png&text=jsonplaceholder.org",
      "thumbnail": "https://dummyimage.com/200x200/010504/elementum.png&text=jsonplaceholder.org",
      "status": "published",
      "category": "lorem",
      "publishedAt": "31/01/2023 14:09:34",
      "updatedAt": "11/03/2023 18:50:19",
      "userId": 6
    },]