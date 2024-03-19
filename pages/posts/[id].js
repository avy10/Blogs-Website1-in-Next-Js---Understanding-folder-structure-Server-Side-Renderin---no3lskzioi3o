import React from "react";
import { useRouter } from "next/router";
import { useParams } from "next/navigation";

function PostDetail() {
	// const params = useParams();
	// const { id } = params;
	// console.log(id);
	const router = useRouter();
	const { id } = router.query;
	// Complete the function
	return <h1>Post Detail: {id}</h1>;
}

export default PostDetail;
