// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

imoprt BlogItem from '../BlogItem'

import './indes.css'

class BlogList extends Component {
    state = {isLoading: true, blogsData: []}
    componentDidMount() {
        this.getBlogsData()
    }


getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json() 
    const formattedData = data.map(eachItem => ({
        id: eachItem.id,
        title: eachItem.title,
        imageUrl: eachItem.image_Url,
        avatarUrl: eachItem.avatar_Url,
        author: eachItem.author,
        topic: eachItem.topic,
    }))

    this.setState({blogsData: formattedData, isLoading: false})
}

render() {
    const {blogsData, isLoading} = this.state 


    return (

    <div className="blogs-list-container">
    {isLoading ? (

        <div testid="loader">
        <Loader type="TailSpin" color="#00bff" height={50} width={50} />
        
        
        </div>
    ): (
        <ul className="blogs-list">
        {blogsData.map(eachBlogItem => (
            <BlogItem key={eachBlogItem.id} BlogItemDetails={eachBlogItem} />
        ))}
        </ul>
    )}
    
    
    
    </div>
    )
}
}

export default BlogList