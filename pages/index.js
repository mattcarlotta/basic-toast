import { toast } from "react-toastify";

const Home = () => {
  const notify = () => toast("Hello World!");

  return (
    <div onClick={notify} className="hello">
      <p>Click to Show Toast Message</p>
      <style jsx>{`
        .hello {
          cursor: pointer;
          font: 15px Helvetica, Arial, sans-serif;
          background: #eee;
          padding: 100px;
          text-align: center;
          transition: 100ms ease-in background;
        }
        .hello:hover {
          background: #ccc;
        }
      `}</style>
    </div>
  );
};

export default Home;
