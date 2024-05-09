import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card'
import { Separator } from './separator'
import { Heart } from 'lucide-react'


type Props = {
  post:{
    id: number;
    slug: string;
    url: string;
    title: string;
    content: string;
    image: string;
    thumbnail: string;
    status: string;
    category: string;
    publishedAt: string;
    updatedAt: string;
    userId: number;
  }
}


const BlogCard = ({post}:Props ) => {
  return (
    <Link href={`/${post.id}`} as={`/blogs/${post.id}`} className=' hover:scale-105 transition-all duration-300 ease-out ' >
         <Card
            key={post.id}
            className="group overflow-hidden bg-background  hover:border-r-4 hover:border-r-primary hover:border-b-4 hover:border-b-primary  "
          >
            <CardHeader className="p-0  relative overflow-hidden aspect-video ">
              <Image
                src={post.thumbnail}
               fill
                alt={post.title}
                className=' group-hover:scale-110 object-cover object-center w-full transition-all duration-150'
              />
            </CardHeader>
            <CardContent className="py-5 bg-background gap-5 flex flex-col ">
              <CardDescription className=" flex flex-col">
                <span>{post.userId}</span>
                <span>{new Date(post.publishedAt).toLocaleString()}</span>
              </CardDescription>
              <CardTitle className="text-xl md:text-2xl text-foreground group-hover:text-primary line-clamp-2  ">
                {post.title}
              </CardTitle>

              <p className="line-clamp-3">{post.content}</p>
             

              <div className=" border-t pt-5 group-hover:border-primary text-sm text-muted-foreground justify-between items-center flex gap-3 ">
                <p>0 Comments</p>
                <p className="flex items-center ml-auto gap-1">
                  0 <Heart className="w-4" />
                </p>
              </div>
            </CardContent>
          </Card>
    </Link>
  )
}

export default BlogCard