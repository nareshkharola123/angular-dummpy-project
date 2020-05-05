import { Blog } from './blog.model';


export class BlogService {

    private blogs: Blog[] = [
         new Blog(
               'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg',
               'A small river named Duden flows',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.',
                new Date()
             ),
        new Blog(
                'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg',
                'A small river named Duden flows',
                'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
                new Date()
                ),
        new Blog(
                'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg',
                'A small river named Duden flows',
                'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
                new Date()
                ),
        new Blog(
                'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg',
                'A small river named Duden flows',
                'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
                new Date()
                )
    ]

    constructor(){}

    getBlogList(){
        return this.blogs.slice()
    }

    getBlogDetail(id: number){
        return this.blogs[id];
    }

    addBlog(blog: Blog){
        this.blogs.push(blog);
    }


}
