import { error, redirect } from '@sveltejs/kit'
import fetchPosts from '$lib/assets/js/fetchPosts'

export const load = async ({ params }) => {
	try {
		
		if (params.post == "latest") {
			const { posts } = await fetchPosts();
			const latestPost = posts[0].slug;
			params.post = latestPost;
		}

		const post = await import(`../../../lib/posts/${params.post}.md`)

		return {
			PostContent: post.default.render().html,
			meta: { ...post.metadata, slug: params.post } 
		}
	} catch(err) {
		throw error(404, err)
	}
}
