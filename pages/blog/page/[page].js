import { allCoreContent, sortedBlogPost } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { POSTS_PER_PAGE } from '../index'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import BlogListLayout from '@/layouts/BlogListLayout'

export const getStaticPaths = async () => {
  const totalPosts = allBlogs
  const totalPages = Math.ceil(totalPosts.length / POSTS_PER_PAGE)
  const paths = Array.from(
    {
      length: totalPages,
    },
    (_, i) => ({
      params: {
        page: (i + 1).toString(),
      },
    })
  )
  return {
    paths,
    fallback: false,
  }
}
export const getStaticProps = async (context) => {
  const {
    params: { page },
  } = context
  const posts = sortedBlogPost(allBlogs)
  const pageNumber = parseInt(page)
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }
  return {
    props: {
      initialDisplayPosts: allCoreContent(initialDisplayPosts),
      posts: allCoreContent(posts),
      pagination,
    },
  }
}
export default function PostPage({ posts, initialDisplayPosts, pagination }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <BlogListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="All Posts"
      />
    </>
  )
}
