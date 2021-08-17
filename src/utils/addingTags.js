export const addingTags=({data:{articles}},tag)=>{

    articles=articles.map((article)=>{

      return {...article,tags:tag};

    })
    articles.length=4;
    return articles
  }