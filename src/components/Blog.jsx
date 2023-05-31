import React from "react";

const Blog = () => {
  return (
    <>
      <div className="bg-[#E8E8E8] h-46 py-20 text-center text-4xl font-bold relative">
        <h2>Blog</h2>
        <img className="absolute bottom-0" src={`https://i.ibb.co/CnW5Zp8/Vector.png`} alt="" />
      </div>

      <div className="leading-8 w-5/6 mx-auto mt-10">
        <h2 className="text-lg">
          <span className=" font-bold">Question-1: </span>When should use
          context API ?
        </h2>
        <p>
          <span className="font-bold">Ans: </span> The Context API is a tool in
          React that allows data to be passed down through the component tree
          without the need for prop drilling. It is useful in situations where
          multiple components need access to the same data. Using the Context
          API can simplify your code and make it more readable by reducing the
          number of props passed down through multiple layers of components. You
          should consider using the Context API when you have data that needs to
          be accessed by multiple components in your application, especially
          when those components are nested several levels deep in the component
          tree.
        </p>
        <br />
        <h2 className="text-lg">
          <span className=" font-bold">Question-2: </span>What is custom Hook ?
        </h2>
        <p>
          <span className="font-bold">Ans: </span> A custom hook is a reusable
          function in React that encapsulates a specific behavior or logic. It
          allows developers to extract common code from components and share it
          across multiple components. Custom hooks enable code reuse, reduce
          duplication, and help to make your code more readable and
          maintainable. They can be used to manage state, handle side effects,
          or abstract complex logic, among other use cases. Custom hooks are
          created by prefixing the hook name with "use" and following the React
          Hook Rules.
        </p>
        <br />
        <h2 className="text-lg">
          <span className=" font-bold">Question-3: </span>what is useRef ?
        </h2>
        <p>
          <span className="font-bold">Ans: </span> In React, useRef is a hook
          that returns a mutable ref object which can be used to hold a
          reference to a DOM node or a value, and persists between renders
          without triggering a re-render.
        </p>
        <br />
        <h2 className="text-lg">
          <span className=" font-bold">Question-4: </span>what is useMemo ?
        </h2>
        <p>
          <span className="font-bold">Ans: </span> useMemo is a hook in React
          that memoizes a function's result and returns the cached value on
          subsequent renders, unless the dependencies change. It can help to
          optimize performance by avoiding unnecessary re-computations.
        </p>
      </div>
    </>
  );
};

export default Blog;
