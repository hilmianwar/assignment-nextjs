import axios from "axios";
import Head from "next/head";

const BlogDetail = ({ todo }) => {
  return (
    <div>
      <Head>
        <title>Detail Blog</title>
        <meta name="description" content="Detail of a todo item." />
      </Head>
      <div className="flex flex-col justify-center items-center w-full h-screen font-mooli">
        <h1 className="text-center py-7 text-3xl">Detail Blog</h1>
        <div className=" bg-white text-black w-1/3 p-9 rounded-lg">
          <p className="pb-4">Todo : {todo.todo}</p>
          <p>Status : {todo.completed ? "Completed" : "Not Completed"}</p>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(`https://dummyjson.com/todos/${params.id}`);
  const todo = res.data;
  return { props: { todo } };
};

export default BlogDetail;
