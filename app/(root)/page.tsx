import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";
import React from "react";

function Home() {
	return (
		<>
			<BookOverview />

			<BookList />
		</>
	);
}

export default Home;
