type HobbiesType = {
  hobbies?: string[];
};

export default function Hobbies({ hobbies }: HobbiesType) {
  return (
    <>
      <h1>Your Hobbies are :</h1>
      <ul>
        {hobbies?.map((hobby, i) => (
          <li> {hobby}</li>
        ))}
      </ul>
    </>
  );
}
