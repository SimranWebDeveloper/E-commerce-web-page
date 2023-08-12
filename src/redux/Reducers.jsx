const initialState = localStorage.getItem('Blogs')? JSON.parse(localStorage.getItem('Blogs')) : []
    // {
    //     id: 1,
    //     title: "iPhone 9",
    //     description: "An apple mobile which is nothing like apple",
    //     price: 549,
    //     discountPercentage: 12.96,
    //     rating: 4.69,
    //     stock: 94,
    //     brand: "Apple",
    //     category: "smartphones",
    //     thumbnail: "https://thumbs.gfycat.com/VibrantAdorableHare-max-1mb.gif"
    //   }
      

export const AppReducer = (state=initialState, action) => {
  switch (action.type) {
    case "ADD-BLOG":
      return [...state,action.payload];
    case "REMOVE-BLOG":
      return state.filter((blog)=> blog.id!=action.payload);
    case "EDIT-BLOG":
      const changeBlog=action.payload
      const editBlogs=state.map((blog)=>{
        if (blog.id===changeBlog.id) return changeBlog
        else                       return blog 
      })
     
      return (state=editBlogs);
    case "ALL-REMOVE-BLOG":
    return [];

    default :
    return (state);

  }
};
