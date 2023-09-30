import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
const TodoList = ({ data }) => {
  return (
    <div className="font-mooli">
      <Head>
        <title>Blog List</title>
      </Head>
      <h1 className="text-center py-7 text-3xl">Blog List</h1>

      <Image
        src="/assets/gambar.png"
        alt="Gambar"
        width={300}
        height={400}
        className="pb-7 mx-auto "
      />
      {data.map((item, index) => (
        <Link
          href={`/todo/${item.id}`}
          key={item.id}
          className="flex flex-col mb-4 hover:bg-gray-300 w-1/2 bg-white text-black mx-auto p-2 rounded-md"
        >
          <div className="flex items-center">
            <span className="pr-3">{index + 1}.</span>
            <span>{item.todo}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export const getServerSideProps = async () => {
  const res = await axios.get("https://dummyjson.com/todos");
  const data = res.data.todos;
  return { props: { data } };
};

export default TodoList;
