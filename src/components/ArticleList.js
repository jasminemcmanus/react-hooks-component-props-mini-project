import React from "react";
import Article from "./Article";

function ArticleList({posts}) {

    const articleArray = posts.map((post) => {
        return <Article key={post.id} date={post.date} title={post.title} preview={post.preview} minutes={post.minutes} />
      })

    return (
        <main>
            {articleArray}
        </main>
    )
}

export default ArticleList;