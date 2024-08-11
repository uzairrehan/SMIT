import Hello from './hello';
export default function Home() {
  return (
    <>
      <div className="bg-yellow-400 p-3 m-2 text-2xl rounded-md text-center ">
        Hello SMIT students !
      </div>
      <div className="bg-gray-400 p-3 m-2 rounded-md">
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, adipisci
        quis architecto maxime corporis voluptatem perferendis placeat sed
        quaerat provident earum fugit omnis, minima necessitatibus ratione,
        delectus id? Corporis, ducimus.
        </p>
      </div>
      <Hello/>
      <Hello/>
    </>
  );
}
